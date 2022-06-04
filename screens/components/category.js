import { render } from 'express/lib/response';
import React from 'react';
import {View, Text, ScrollView, StyleSheet ,Dimensions,TouchableOpacity,Image } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {imageUri,name} from '../menu.js';

const Category =({navigation}) => {
   
    return(
    <TouchableOpacity style={styles.containner}>
        
        <Image 
        source={imageUri}/>
        
        <View>
              <Text>{name}</Text>
        </View>
    </TouchableOpacity>
    );
    
}


const styles = StyleSheet.create({
    containner:{
      height:120,
      width:90,
      borderWidth:1,
      marginHorizontal: 10,
      marginVertical:20,
      borderRadius:10
    },
    
})
export default Category;

