import React,{useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUp from '../screens/signUp';

const SignIn =({navigation}) => {

  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

  async function loginUser(event) {
    event.preventDefault()

    try {
      const response = await fetch('http://10.0.2.2:8000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
  
      const data = await response.json()
  
      if (data) {
        //localStorage.setItem('token', data.user)
        alert('Login successful')
        console.log(data)
        navigation.navigate('tabs', { screen: 'menu' })
      } else {
        alert('Please check your username and password')
      }
    } catch (error) {
      console.error(error);
    }

	
	}

    return(
        <View style={styles.container}>
          <View style={styles.header}>
          
          </View>
          <View style={styles.footer}>
            <Text  style = {styles.text}>Email</Text>
            <TextInput onChangeText={newText => setEmail(newText)} type="email" style = {styles.textInput}></TextInput>
            <Text style = {styles.text}>Passward</Text>
            <TextInput onChangeText={newText => setPassword(newText)} type="password" style = {styles.textInput}></TextInput>

            <TouchableOpacity style = {styles.button} onPress={ loginUser }>
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