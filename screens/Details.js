import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
} from 'react-native';
import {COLOURS, Items} from '../assets/database/items.js';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Details = ({route,navigation}) => {
    const {productID} = route.params;

  const [product, setProduct] = useState({});

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get product data by productID

  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == productID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };

  //add to cart

  const addToCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);
 
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('tabs', { screen: 'Cart' });
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('tabs', { screen: 'Cart' });
      } catch (error) {
        return error;
      }
    }
  };

  //product horizontal scroll product card
  const renderProduct = ({item, index}) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  return (
    <View  style={{backgroundColor:'#33DDFF',flex:1}}>
       <View style={{backgroundColor:'#33DDFF',flex:4}}>
       <Image
              source={product.productImage}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
            />
      </View>
      
      <View  style={{backgroundColor:'#ffffff',flex:4,borderRadius:10}}>
      
      <Text
              style={{
                fontSize: 30,
                fontWeight: '600',
                letterSpacing: 0.5,
                marginVertical: 4,
                color: COLOURS.black,
                maxWidth: '84%',
                textAlign:'center',
                paddingTop: 10
              }}>
              {product.productName}
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '600',
                letterSpacing: 0.5,
                marginVertical: 4,
                color: COLOURS.black,
                maxWidth: '84%',
                textAlign:'left',
                paddingTop: 10,
                paddingLeft:10
              }}>
              LKR {product.productPrice}
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '600',
                letterSpacing: 0.5,
                marginVertical: 4,
                color: COLOURS.black,
                maxWidth: '84%',
                textAlign:'left',
                paddingTop: 10,
                paddingLeft:10
              }}>
              Available
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '600',
                letterSpacing: 0.5,
                marginVertical: 4,
                color: COLOURS.black,
                maxWidth: '84%',
                textAlign:'left',
                paddingTop: 10,
                paddingLeft:10
              }}>
              10% Off
            </Text>
          
      <View
        style={{
          position: 'absolute',
          bottom: 25,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
          style={{
            width: '40%',
            height: '150%',
            backgroundColor: '#a12adb',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: COLOURS.white,
              textTransform: 'uppercase',
            }}>
            {product.isAvailable ? 'Add to cart' : 'Not Avialable'}
          </Text>
        </TouchableOpacity>
      </View>
      </View>

    </View>
   
  );
  
};

export default Details;

