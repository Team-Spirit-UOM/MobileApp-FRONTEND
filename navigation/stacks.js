import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import start from '../screens/start';
import signIn from '../screens/signIn';
import signUp from '../screens/signUp';
import Details from '../screens/Details';
import cart from '../screens/cart.js';
import tabs from '../navigation/tabs';

const Stack = createNativeStackNavigator();

const Stacks = () => {
    return(
        <Stack.Navigator>
        <Stack.Screen name="Start" component={start} options={{headerShown: false}}/>
        <Stack.Screen name="SignIn" component={signIn} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={signUp} options={{headerShown: false}}/>
        <Stack.Screen name="tabs" component={tabs} options={{ headerShown: false }}/>
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    );
}

export default Stacks;