import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions
} from 'react-native';
var {width} = Dimensions.get('window');
import {COLOURS, Items} from '../assets/database/items.js';
import Icons from 'react-native-vector-icons/Ionicons';
import {Categories} from '../assets/database/categories.js';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Menu =({navigation}) => {

  const [currentSelected, setCurrentSelected] = useState([0]);
 
  const renderCategories = ({item,index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setCurrentSelected(item.name)}>
        <View
          style={{
            width: 120,
            height: 180,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor:
              currentSelected == item.name ? '#33DDFF' : COLOURS.white,
            borderRadius: 20,
            margin: 10,
            elevation: 5,
          }}>
          <View style={{width: 60, height: 60}}>
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'center',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: COLOURS.black,
              fontWeight: '600',
            }}>
            {item.name}
          </Text>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor:
                currentSelected == item.name ? COLOURS.white : '#a12adb',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="angle-right"
              style={{
                fontSize: 12,
                color: currentSelected == item.name ? COLOURS.black : COLOURS.white,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const [burger, setBurger] = useState([]);
  const [pizza, setPizza] = useState([]);
  const [cake, setCake] = useState([]);
  const [juice, setJuice] = useState([]);

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB

  const getDataFromDB = () => {
    let burgerList = [];
    let pizzaList = [];
    let cakeList = [];
    let juiceList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'Burger') {
        burgerList.push(Items[index]);
      } else if (Items[index].category == 'Pizza') {
        pizzaList.push(Items[index]);
      } else if (Items[index].category == 'Cake') {
        cakeList.push(Items[index]);
      } else if (Items[index].category == 'Juice') {
        juiceList.push(Items[index]);
      }
    }

    setBurger( burgerList);
    setPizza(pizzaList);
    setCake(cakeList);
    setJuice(juiceList);
  };

 

  const ProductCard = ({data}) => {
    return (
      
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {productID: data.id})}
        activeOpacity={0.9}
        style={{
          width: '100%',
          height: 180,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '90%',
            height: 160,
            backgroundColor: COLOURS.white,
            borderRadius: 20,
            elevation: 4,
            position: 'relative',
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <View style={{marginBottom: 50}}>
            
            <Text
              style={{
                fontSize: 22,
                color: COLOURS.black,
                fontWeight: 'bold',
                paddingVertical:10
               
              }}>
              {data.productName}
            </Text>
            <Text
              style={{
                
                fontSize: 20,
                color: '#000000',
                opacity: 0.5,
              }}>
              LKR {data.productPrice}
            </Text>
           </View>
           <View style={{width: 150, height: 150, marginRight: -45}}>
            <Image
              source={data.productImage}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
          {data.isOff ? (
            <View
              style={{
                position: 'absolute',
                width: '20%',
                height: '24%',
                backgroundColor: '#a12adb',
                top: 0,
                left: 0,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.white,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
                {data.offPercentage}%
              </Text>
              
            </View>
          ) : null}
          </View>
        
      </TouchableOpacity>
      
    );
  };

  
 
  return (
    <View>
    <View style={styles.headerMain}>
    <View style={styles.headerFlex}>
      <TouchableOpacity onPress={()=>navigation.navigate}>
        <Icons name="menu-outline" size={40} color="#333" />
      </TouchableOpacity>
      <TextInput 
      placeholder="Search..." 
      placeholderTextColor="#333"
      style={styles.searchBox}
      />
       <TouchableOpacity>
        <Icons name="search-outline" size={30} color="#333" style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  </View>

  <ScrollView showsVerticalScrollIndicator={false}>
  <View >
        <View >
            <Text style={styles.text}>Hello</Text>
            <Text style={styles.subtext}>Welcome to Aliz Restuarant!</Text>
        </View>
  </View >
    <View
      style={{
        width: '100%',
        height: '90%',
        backgroundColor: COLOURS.white,
        position: 'relative',
      }}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      
      
     
     
      <FlatList
        horizontal={true}
        data={Categories}
        renderItem={renderCategories}
        showsHorizontalScrollIndicator={false}
      />
      <Text
        style={{
          paddingTop: 10,
          paddingHorizontal: 20,
          fontSize: 20,
          fontWeight: '600',
          color: COLOURS.black,
        }}>
       Select Your Favourite
      </Text>
      <View>
     { currentSelected == 'Burger'? burger.map(data => {
        return <ProductCard data={data} key={data.id} />;
      })  :  null} 
       { currentSelected == 'Pizza'? pizza.map(data => {
        return <ProductCard data={data} key={data.id} />;
      })  :  null} 
      { currentSelected == 'Cake'? cake.map(data => {
        return <ProductCard data={data} key={data.id} />;
      })  :  null} 
      { currentSelected == 'Juice'? juice.map(data => {
        return <ProductCard data={data} key={data.id} />;
      })  :  null} 
     

    
    
      </View>
      
      <TouchableOpacity
        style={{
          margin:30,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0.5,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: COLOURS.black,
            borderBottomWidth: 1,
            borderBottomColor: COLOURS.black,
          }}>
          Load more
        </Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
</View>
     );
  }

  const styles = StyleSheet.create({
    headerMain: {
      width: width,
      height: width / 4 - 35,
      backgroundColor: '#fff',
      elevation: 8,
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    headerFlex: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchBox:{
      width: width - 80,
      height:  width / 7 - 15,
      backgroundColor:"#e5e5e5",
      marginHorizontal:10,
      borderRadius:25,
      fontSize:15,
      color:"#333",
      paddingHorizontal:10,
      position:"relative"
    },
    searchIcon:{
      position:"absolute",
      bottom: -15,
      right: 15,
    },
    text:{
        fontSize: 30,
        color: 'black',
        paddingHorizontal: 10,
        paddingTop:10,
        backgroundColor: COLOURS.white
    },
    subtext:{
        fontSize: 20,
        paddingHorizontal: 10,
        paddingBottom: 20,
        color: 'black',
        backgroundColor: COLOURS.white
    },
    box:{
      height:120,
      width:80,
      borderWidth:1,
      marginHorizontal: 10,
      marginVertical:20,
      borderRadius:10

    }
  });



  

export default Menu;