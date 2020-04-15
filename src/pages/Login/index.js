import React, { useState, useReducer, useContext } from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRoute } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';

import {
  Container, Form, SubmitBtn, SubmitText, SectionTitle,
  AddressContainer, Address1, Address2, Content
} from './styles';
const TopTab = createMaterialTopTabNavigator();

const theme = {
  colors: {
    primary: '#3BC365'
  }
}

let AuthContext;

function User() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const { signIn } = useContext(AuthContext);

  function submit() {
    signIn({ username, password });
  }

  return (
    <Form>
      <TextInput
        label='Email'
        mode='outlined'
        underlineColor='#3BC365'
        theme={theme}
        style={{ marginVertical: 15 }}
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        label='Senha'
        mode='outlined'
        underlineColor='#3BC365'
        theme={theme}
        style={{ marginVertical: 15 }}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <SubmitBtn onPress={submit} >
        <SubmitText>LOGIN</SubmitText>
      </SubmitBtn>
    </Form>
  )
}

function Company() {
  return (
    <Content>
      <Form >
        <TextInput
          label='Email'
          mode='outlined'
          underlineColor='#3BC365'
          theme={theme}
          style={{ marginVertical: 15 }}
        />
        <TextInput
          label='Senha'
          mode='outlined'
          underlineColor='#3BC365'
          theme={theme}
          style={{ marginVertical: 15 }}
        />
        <SubmitBtn>
          <SubmitText>LOGIN</SubmitText>
        </SubmitBtn>
      </Form>
    </Content>
  )
}

function MyTabs() {
  return (
    <TopTab.Navigator tabBarOptions={{
      style: {
        backgroundColor: '#F8F8F8'
      },
      indicatorStyle: {
        backgroundColor: '#3BC365'
      }
    }} >
      <TopTab.Screen name="User" component={User} />
      <TopTab.Screen name="Company" component={Company} />
    </TopTab.Navigator>
  )
}

export default function Login({ route }) {
  AuthContext = route.params.AuthContext;
  return (
    <Container>
      <MyTabs />
    </Container>
  )
}