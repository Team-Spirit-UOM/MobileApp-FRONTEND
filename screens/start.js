import React from 'react';
import {View, Text, Button, StyleSheet,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import signIn from '../screens/signIn';
const Start =({navigation}) => {
  
    return(
    <View style={styles.container}>
         
        <View style={styles.header}>
        <Image 
        source={require('../assets/icons/logo.png')}/>
        </View>
        <View style={styles.footer}> 
        <Text style={styles.text}>Enjoy Every Moment</Text> 
        <Button
        title="Get Start"
        onPress={() => navigation.navigate(signIn)}
      />
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
        justifyContent: 'center',
        padding : 0
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