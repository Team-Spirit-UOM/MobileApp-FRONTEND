import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Stacks from './navigation/stacks';

const App = () =>{
  return(
    <NavigationContainer>
      <Stacks/>
    </NavigationContainer>
  );
}

export default App;


