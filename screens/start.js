import React from 'react';
import {View, Text, Button, StyleSheet,Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import signIn from '../screens/signIn';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
const Start =({navigation}) => {
  
    return(
    <View style={styles.container}>
         
        <View style={styles.header}>
        <Image 
        source={require('../assets/icons/logo.png')}/>
        </View>
        <View style={styles.footer}> 
        <Text style={styles.text}>Enjoy Every Moment</Text> 
        <TouchableOpacity onPress={() => navigation.navigate(signIn)} style={{
          position: 'absolute',
          marginHorizontal: 170,
          marginVertical: 60,
          width: 200,
          bottom:30,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#a12adb',
          height: 70
        }}>
        <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#ffffff',
              letterSpacing: 1,
              marginRight: 10,
              marginLeft: 10
            }}>
          Get Start 
          <FontAwesome
              name="angle-right"
              style={{
                fontSize: 20,
                color: '#ffffff',
                paddingLeft: 30,
                marginLeft: 10,
              
              }}
            />
            </Text>
            
        </TouchableOpacity>
        </View>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#33BBFF'
    },
    header: {
        flex: 2,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text: {
        fontSize: 25,
        color: 'black',
        padding: 10,
        fontFamily:'verdana'
    }
    
    
})

export default Start;