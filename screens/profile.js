import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, SafeAreaView,StyleSheet, TouchableOpacity } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from "axios";


const Profile = ({navigation}) => {

  const myCustomShare = async() => {
    const shareOptions = {
      message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
      url: files.appLogo,
      // urls: [files.image1, files.image2]
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error => ', error);
    }
  };


  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getUser = async () => {
    var axios = require('axios');
    
var config = {
  method: 'get',
  url: 'http://10.0.2.2:8000/user/627b44793aa6dfed12097d26',
  headers: { 
    'Content-Type': 'application/json'
  },
  //data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  setData(response.data.users);
  // setData(response.data);
})
.catch(function (error) {
  console.log(error);
});

  }

  useEffect(() => {
    getUser();
  }, []);

  const deleteUser = async () => {
    var axios = require('axios');
    var config = {
      method: 'delete',
      url: 'http://10.0.2.2:8000/user/delete/62a9dcec4fafb071ce34ecd1',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.userInfoSection}>
      <View style={{flexDirection: 'row', marginTop: 15}}>
       
        <View style={{marginLeft: 20}}>
          <Title style={[styles.title, {
            marginTop:15,
            marginBottom: 5,
          }]}> 
            <Text> Hello {data.firstName}</Text>        
          </Title>
         
        </View>
      </View>
    </View>

    <View style={styles.userInfoSection}>
     
      <View style={styles.row}>
        <Icon name="rocket" color="#777777" size={20}/>
        <Text style={{color:"#777777", marginLeft: 20}}>{data.firstName} {data.lastName}</Text>
       
      </View>
    
      <View style={styles.row}>
        <Icon name="phone" color="#777777" size={20}/>
        <Text style={{color:"#777777", marginLeft: 20}}>{data.contact}</Text>
      </View>
      <View style={styles.row}>
        <Icon name="email" color="#777777" size={20}/>
        <Text style={{color:"#777777", marginLeft: 20}}>{data.email}</Text>
      </View>
    </View>

    

    <View style={styles.menuWrapper}>
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name="heart-outline" color="#33ddff" size={25}/>
          <Text style={styles.menuItemText}>Your Favorites</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name="credit-card" color="#33ddff" size={25}/>
          <Text style={styles.menuItemText}>Payment</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={myCustomShare}>
        <View style={styles.menuItem}>
          <Icon name="share-outline" color="#33ddff" size={25}/>
          <Text style={styles.menuItemText}>Tell Your Friends</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={ deleteUser}>
        <View style={styles.menuItem}>
          <Icon name="delete" color="#33ddff" size={25}/>
          <Text style={styles.menuItemText}>Delete Account</Text>
        </View>
      </TouchableRipple>
      <TouchableOpacity 
        onPress={() => {navigation.navigate('editProfile')}}>
        <View style={styles.menuItem}>
          <Icon name="pencil" color="#33ddff" size={25}/>
          <Text style={styles.menuItemText}>Edit Profile</Text>
        </View>
      </TouchableOpacity>
    
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Profile;

