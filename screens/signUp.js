import React, {useState } from 'react';
import {View, Text, Button, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import signIn from '../screens/signIn';


const SignUp =({navigation}) => {
 
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
	const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

	async function registerUser() {
    var axios = require('axios');
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      alert("Email is Not Correct");
      //this.setState({ email: text })
      return false;
    }

    // if(!(email === confirm)){
    //   alert("Password are not equal.");
    //   return false;
    // }
    var config = {
      method: 'post',
      url: 'http://10.0.2.2:8000/user/save',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify({
        firstName,
        lastName,
        email ,
        contact,
        password
      })
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      alert("Register successfully")
      navigation.navigate('tabs', { screen: 'menu' })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    
    return(
    <View style={styles.container}>
    <View style={styles.header}>

    </View>
    <View style={styles.footer}>
    <Text style = {styles.text}>First Name</Text>
    <TextInput onChangeText={newText => setFirstName(newText)} type="text" style = {styles.textInput}></TextInput>
    <Text style = {styles.text}>Last Name</Text>
    <TextInput  onChangeText={newText => setLastName(newText)} type="text" style = {styles.textInput}></TextInput>
    <Text style = {styles.text}>Email</Text>
    <TextInput  onChangeText={newText => setEmail(newText)} type="email" style = {styles.textInput}></TextInput>
    <Text style = {styles.text}>Contact Number</Text>
    <TextInput onChangeText={newText => setContact(newText)} type="text" style = {styles.textInput}></TextInput>
    <Text style = {styles.text}>Password</Text>
    <TextInput onChangeText={newText => setPassword(newText)} type="password" style = {styles.textInput}></TextInput>
    <Text style = {styles.text}>Confirm Password</Text>
    <TextInput onChangeText={newText => setConfirm(newText)} type="password" style = {styles.textInput}></TextInput>
  
    <TouchableOpacity style = {styles.button} onPress={registerUser}><Text style = {styles.text}>Sign Up</Text>
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