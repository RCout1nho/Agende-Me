import React, { useReducer, useEffect, useMemo, createContext } from 'react';
import { Image, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialIcons, Entypo } from '@expo/vector-icons';

import Welcome from './pages/Welcome';
import Places from './pages/Places';
import Schedule from './pages/Schedule';
import Ticket from './pages/Ticket';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Categories from './pages/Categories';

import grid from './assets/grid.png';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


function Tabs({ route }) {
  const { email, password, name, _id } = route.params;

  return (
    <Tab.Navigator
      activeColor="#000"
      barStyle={{
        backgroundColor: '#F8F8F8',
        elevation: 5
      }}
    >

      <Tab.Screen name="Categories" component={Categories} options={{
        tabBarIcon: ({ color }) => (
          <Entypo name="grid" size={24} color={color} />
        )
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="account-circle" size={25} color={color} />
        )
      }}
        initialParams={{ AuthContext, email, password, name, _id }}
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
            email: action.email,
            password: action.password,
            _id: action._id,
            name: action.name
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            email: null,
            password: null,
            _id: null,
            name: null
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      email: null,
      password: null,
      _id: null,
      name: null
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

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token', password: data.password, email: data.email, name: data.name, _id: data._id });
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
                initialParams={{ token: state.userToken }}
              />
            </>
            :
            <>
              <Stack.Screen name="home" component={Tabs} options={{ headerShown: false }} initialParams={{ email: state.email, password: state.password, name: state.name, _id: state._id }} />
              <Stack.Screen name="Places" component={Places} options={{ headerShown: false }} />
              <Stack.Screen name="Schedule" component={Schedule} options={{ headerShown: false }} />
              <Stack.Screen name="Ticket" component={Ticket} options={{ headerShown: false }} />
            </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}