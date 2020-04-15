import React, { useReducer, useEffect, useMemo, createContext } from 'react';
import { Image, AsyncStorage } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
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

import grid from './assets/grid.png';

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
      <Tab.Screen name="Welcome" component={Welcome} options={{
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
      }}
        initialParams={{ AuthContext }}
      />
    </Tab.Navigator>
  )
}

const AuthContext = createContext();

export default function Routes() {

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {

      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async data => {

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={authContext} >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#F8F8F8', elevation: 0 }
        }} >
          {state.userToken == null ?
            <>
              <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                initialParams={{ AuthContext }}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{

                }}
              />
            </>
            :
            <Stack.Screen name="home" component={Tabs} options={{ headerShown: false }} />
          }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}