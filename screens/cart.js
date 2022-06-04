import React,{useEffect,useState,useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, Button, StyleSheet,TouchableOpacity, FlatList, ScrollView,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import foods from '../assets/database/items.js';

const Cart =() => {

    return(
		<SafeAreaView style={{backgroundColor:'#ffffff',flex:1}}>
			<View style={style.header}>
			<Text style={{fontSize:20}}>Cart Item</Text>
			</View>
			<FlatList
			    showsHorizontalScrollIndicator={false}
				contentContainerStyle = {{paddingBottom:80}}
				
			/>
		</SafeAreaView>
	);
	
} 

const style = StyleSheet.create({
	header:{
		paddingVertical:20,
		flexDirection: 'row',
		alignItems:'center',
		marginHorizontal: 20
	}
})

export default Cart;



