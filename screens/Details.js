import React,{useEffect, useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {COLOURS} from '../assets/database/items';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
//import Entypo from 'react-native-vector-icons/Entypo';


const Details = ({route}) => {
  const navigation = useNavigation(); 
  const {
    name,
    price,
    image,
    size,
    crust,
    delivery,
    ingredients,
    isTopOfTheWeek,
  } = route.params;
  
  const addToCart = (data, index) => {
          return(
            
              navigation.push('tabs', { screen: 'Cart' , params : {
                name: name,
                price: price,
                image: image,
                size: size,
                crust: crust,
                delivery: delivery,
                ingredients: ingredients,
                isTopOfTheWeek: isTopOfTheWeek,
                navigation: navigation
              }
             
              }))
  }
  

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
      }}>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
       
        
      </View>
      <Text
        style={{
          fontSize: 38,
          color: '#a12adb',
          fontWeight: '800',
          paddingHorizontal: 20,
          maxWidth: 310,
        }}>
        {name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: COLOURS.accentRed,
            fontWeight: '900',
            paddingRight: 5,
            paddingBottom: 0,
          }}>
          LKR
        </Text>
        <Text
          style={{
            fontSize: 38,
            color: COLOURS.accentRed,
            fontWeight: '900',
          }}>
          {price}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          maxHeight: 300,
          width: '100%',
          alignItems: 'center',
        }}>
        <View style={{paddingHorizontal: 20}}>
          <View style={{paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: '#a12adb',
                opacity: 0.5,
              }}>
              Size
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: '600',
              }}>
              {size}
            </Text>
          </View>
          
          <View style={{paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 18,
                color: '#a12adb',
                opacity: 0.5,
                fontWeight:'700'
              }}>
             Estimated Time
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: '600',
              }}>
              {delivery} min
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 380,
            height: 380,
          }}>
          <Image
            source={image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
     
     
      <View
        style={{
          position: 'absolute',
          marginHorizontal: 120,
          marginVertical: 60,
          width: 150,
          bottom:60,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#33DDFF',
          height: 70
        }}>
        <TouchableOpacity onPress={addToCart}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: COLOURS.black,
              letterSpacing: 1,
              marginRight: 10,
            }}>
            Add to cart
          </Text>
          
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;

