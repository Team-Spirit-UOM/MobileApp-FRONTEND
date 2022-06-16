import React from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import menu from '../screens/menu';
import cart from '../screens/cart';
import profile from '../screens/profile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
             tabBarOptions ={{
                 showLabel: false,
                
                 style:{
                     position:'absolute',
                     bottom:40,
                     left:20,
                     right:20,
                     elevation: 0,
                     tintColor: '#00ff00',
                     borderRadius:15,
                     height:90
                    

                 }
             }}>
            <Tab.Screen name="Menu" 
            component={menu} 
            options ={{
                headerShown: false,
                tabBarIcon:({focused}) => (
                   <View style={{alignItems:'center', justifyContent:'center'}}>
                       <Image
                       source={require('../assets/icons/Home.png')}
                       resizeMode='contain'
                       style={{
                           width:25,
                           height:25,
                           tintColor:focused ? '#e32f45' : '#748c94',
                       }}
                       />
                       
                   </View>
                ),
                
            }}
            />
            <Tab.Screen name="Cart" component={cart} 
            options ={{
                
                tabBarIcon:({focused}) => (
                   <View style={{alignItems:'center', justifyContent:'center'}}>
                       <Image
                       source={require('../assets/icons/Cart.png')}
                       resizeMode='contain'
                       style={{
                           width:25,
                           height:25,
                           tintColor:focused ? '#e32f45' : '#748c94',
                       }}
                       />
                       
                   </View>
                ),
            }}/>
            <Tab.Screen name="Profile" component={profile}
            options ={{
                headerShown: false,
                tabBarIcon:({focused}) => (
                   <View style={{alignItems:'center', justifyContent:'center'}}>
                       <Image
                       source={require('../assets/icons/Profile.png')}
                       resizeMode='contain'
                       style={{
                           width:25,
                           height:25,
                           tintColor:focused ? '#e32f45' : '#748c94',
                       }}
                       />
                       
                   </View>
                ),
            }} />
        </Tab.Navigator>

    );
}






export default Tabs;