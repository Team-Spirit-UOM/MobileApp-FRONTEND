import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from '../screens/signUp';


const SignIn =({navigation}) => {
    return(
        <View style={styles.container}>
          <View style={styles.header}>
          
          </View>
          <View style={styles.footer}>
            <Text style = {styles.text}>Email</Text>
            <TextInput style = {styles.textInput}></TextInput>
            <Text style = {styles.text}>Passward</Text>
            <TextInput style = {styles.textInput}></TextInput>
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('tabs', { screen: 'menu' })}>
              <Text style = {styles.text}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate(SignUp)}>
              <Text style = {styles.text}>Sign Up</Text>
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
      flex: 1,
      justifyContent: 'center',
      padding : 0
  },
  footer: {
      flex: 2.5,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
  },
  text: {
      fontSize: 20,
      color: 'black',
      padding: 10,
      fontFamily:'verdana'
  },
  textInput:{
    borderBottomWidth:1,
    borderBottomColor: 'gray',
    padding:10,
    margin:10
  },
  button: {
        marginVertical: 10,
        marginHorizontal: 50,
        backgroundColor: "#33BBFF",
        width: '70%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
       
  }

 
  
  
})

export default SignIn;