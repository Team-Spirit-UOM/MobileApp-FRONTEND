import React from 'react';
import {View, Text, Button, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import signIn from '../screens/signIn';

const SignUp =({navigation}) => {
    return(
    <View style={styles.container}>
    <View style={styles.header}>

    </View>
    <View style={styles.footer}>
    <Text style = {styles.text}>First Name</Text>
    <TextInput style = {styles.textInput}></TextInput>
    <Text style = {styles.text}>Last Name</Text>
    <TextInput style = {styles.textInput}></TextInput>
    <Text style = {styles.text}>Email</Text>
    <TextInput style = {styles.textInput}></TextInput>
    <Text style = {styles.text}>Contact Number</Text>
    <TextInput style = {styles.textInput}></TextInput>
    <Text style = {styles.text}>Password</Text>
    <TextInput style = {styles.textInput}></TextInput>
    <Text style = {styles.text}>Confirm Passward</Text>
    <TextInput style = {styles.textInput}></TextInput>
    <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('tabs', { screen: 'menu' })}>
              <Text style = {styles.text}>Sign Up</Text>
    </TouchableOpacity>
    <Text>Already have an account?</Text>
    <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate(signIn)}>
              <Text style = {styles.text}>Sign In</Text>
    </TouchableOpacity>
    </View>
    </View>
    )
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
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
  },
  text: {
      fontSize: 20,
      color: 'black',
      padding: 1,
      fontFamily:'verdana'
  },
  textInput:{
    borderBottomWidth:1,
    borderBottomColor: 'gray',
    padding:1,
    //margin:10
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




export default SignUp;