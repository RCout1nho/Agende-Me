import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { MaterialIcons } from '@expo/vector-icons';

import Home from './pages/Home';
import Login from './pages/Login';


const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          )
        }} />
        <Tab.Screen name="Login" component={Login} options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="lock" size={24} color={color} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}