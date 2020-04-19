import React, { useReducer, useEffect, useMemo, createContext } from 'react';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import Welcome from './pages/commom/Welcome';
import Places from './pages/user/Places';
import Schedule from './pages/user/Schedule';
import Ticket from './pages/user/Ticket';
import Profile from './pages/user/Profile';
import Login from './pages/commom/Login';
import Register from './pages/commom/Register';
import Categories from './pages/user/Categories';
import ScanTickets from './pages/company/ScanTickets';
import YourTickets from './pages/user/YourTickets';
import Map from './pages/user/Map';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


function UserTabs({ route }) {
  const { email, password, name, _id } = route.params;

  return (
    <Tab.Navigator
      activeColor="#3BC365"
      barStyle={{
        backgroundColor: '#F8F8F8',
        elevation: 5,
      }}

    >

      <Tab.Screen name="Categories" component={Categories} options={{
        tabBarIcon: ({ color }) => (
          <Entypo name="grid" size={24} color={color} />
        ),
        title: "Categorias",
      }} />
      <Tab.Screen name="Your Tickets" component={YourTickets} options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="ticket-account" size={25} color={color} />
        ),
        title: "Meus Tickets"
      }}
        initialParams={{ _id }}
      />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="account-circle" size={25} color={color} />
        ),
        title: "Perfil"
      }}
        initialParams={{ AuthContext, email, password, name, _id }}
      />
    </Tab.Navigator>
  )
}

function CompanyTabs({ route }) {
  const { email, password, name, _id } = route.params;
  return (
    <Tab.Navigator
      activeColor="#3BC365"
      barStyle={{
        backgroundColor: '#F8F8F8',
        elevation: 5,
      }}
    >
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="account-circle" size={25} color={color} />
        ),
        title: "Perfil"
      }}
        initialParams={{ AuthContext, email, password, name, _id }}
      />

      <Tab.Screen name="ScanTickets" component={ScanTickets} options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="qrcode-scan" size={25} color={color} />
        ),
        title: "Scanner"
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
            name: action.name,
            company: action.company
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            email: null,
            password: null,
            _id: null,
            name: null,
            company: false
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
      name: null,
      company: false
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

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token', password: data.password, email: data.email, name: data.name, _id: data._id, company: data.company });
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
                options={{
                  title: "Cadastre-se"
                }}
              />
            </>
            : !state.company ?
              <>
                <Stack.Screen name="home" component={UserTabs} options={{ headerShown: false }} initialParams={{ email: state.email, password: state.password, name: state.name, _id: state._id }} />
                <Stack.Screen name="Places" component={Places} options={{ headerShown: false }} />
                <Stack.Screen name="Schedule" component={Schedule} options={{ headerShown: false }} initialParams={{ user_id: state._id }} />
                <Stack.Screen name="Ticket" component={Ticket} options={{ headerShown: false }} />
                <Stack.Screen name="Map" component={Map} />
              </>
              :
              <>
                <Stack.Screen name="home" component={CompanyTabs} options={{ headerShown: false }} initialParams={{ email: state.email, password: state.password, name: state.name, _id: state._id }} />
              </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}