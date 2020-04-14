import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialIcons } from '@expo/vector-icons';

import Welcome from './pages/Welcome';
import Categories from './pages/Categories';
import Booking from './pages/Booking';
import Ticket from './pages/Ticket';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

import clock from './assets/clock.png';
import grid from './assets/grid.png';
import user from './assets/user.png';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      activeColor="#000"
      barStyle={{
        backgroundColor: '#F8F8F8',
        elevation: 1
      }}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: () => (
          <Image source={grid} />
        )
      }} />
      <Tab.Screen name="Booking" component={Booking} options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="lock" size={24} color={color} />
        )
      }} />
      <Tab.Screen name="Categories" component={Categories} options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="lock" size={24} color={color} />
        )
      }} />
      <Tab.Screen name="Ticket" component={Ticket} options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="lock" size={24} color={color} />
        )
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="lock" size={24} color={color} />
        )
      }} />
      <Tab.Screen name="Login" component={Login} options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="lock" size={24} color={color} />
        )
      }} />
    </Tab.Navigator>
  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#F6F5F5', elevation: 0 },

      }} >
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}