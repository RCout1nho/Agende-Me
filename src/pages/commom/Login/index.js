import React, { useState, useContext } from 'react';
import { YellowBox, View, ScrollView, Image, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AntDesign } from '@expo/vector-icons'
import { TextInput } from 'react-native-paper';
import Dialog from 'react-native-dialog';

import api from '../../../services/api';
import logo from '../../../assets/logo-S.png';
import backImage from '../../../assets/background.png';

import {
  Container, Form, SubmitBtn, SubmitText
} from './styles';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state'
])

const TopTab = createMaterialTopTabNavigator();

const theme = {
  colors: {
    primary: '#2D0C57'
  }
}

function User({ route }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);

  function MyDialog() {
    return (
      <View>
        <Dialog.Container visible={dialogVisible} >
          <Dialog.Title>Ops</Dialog.Title>
          <Dialog.Description>
            E-mail ou senha inválidos, tente novamente!
            </Dialog.Description>
          <Dialog.Button label="OK" onPress={() => { setDialogVisible(false) }} />
        </Dialog.Container>
      </View>
    )
  }

  const { AuthContext } = route.params;

  const { signIn } = useContext(AuthContext);

  async function submitUser() {
    const response = await api.get('/auth/user', {
      headers: {
        email,
        password
      }
    });

    if (response.data !== null) {
      const { _id, name } = response.data[0];
      signIn({ email, password, _id, name, company: false });
    } else {
      setDialogVisible(true);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#97FFB7' }} >
      <Image source={backImage} style={{ position: 'absolute', height: '100%', width: '100%' }} />
      <Form >
        <ScrollView >
          <MyDialog />
          <TextInput
            label='Email'
            mode='flat'
            underlineColor='#3BC365'
            theme={theme}
            style={{ marginVertical: 15, backgroundColor: 'rgba(255,255,255,0.8)', fontSize: 17 }}
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            label='Senha'
            mode='flat'
            underlineColor='#3BC365'
            theme={theme}
            style={{ marginVertical: 15, backgroundColor: 'rgba(255,255,255,0.8)' }}
            onChangeText={text => setPassword(text)}
            value={password}
            autoCapitalize="none"
            secureTextEntry
          />
          <SubmitBtn onPress={submitUser} activeOpacity={0.5}>
            <SubmitText>LOGIN</SubmitText>
          </SubmitBtn>
        </ScrollView>
      </Form>
    </View>
  )
}

function Company({ route }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);

  const { AuthContext } = route.params;

  const { signIn } = useContext(AuthContext);

  function MyDialog() {
    return (
      <View>
        <Dialog.Container visible={dialogVisible} >
          <Dialog.Title>Ops</Dialog.Title>
          <Dialog.Description>
            E-mail ou senha inválidos, tente novamente!
            </Dialog.Description>
          <Dialog.Button label="OK" onPress={() => { setDialogVisible(false) }} />
        </Dialog.Container>
      </View>
    )
  }

  async function submitCompany() {
    const response = await api.get('/auth/company', {
      headers: {
        email,
        password
      }
    });

    if (response.data !== null) {
      const { _id, name } = response.data[0];
      signIn({ email, password, _id, name, company: true });
    } else {
      setDialogVisible(true);
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#97FFB7' }} >
      <MyDialog />
      <Image source={backImage} style={{ position: 'absolute', height: '100%', width: '100%' }} />
      <Form >
        <ScrollView >
          <TextInput
            label='Email'
            mode='flat'
            underlineColor='#3BC365'
            theme={theme}
            style={{ marginVertical: 15, backgroundColor: 'rgba(255,255,255,0.8)' }}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            label='Senha'
            mode='flat'
            underlineColor='#3BC365'
            theme={theme}
            style={{ marginVertical: 15, backgroundColor: 'rgba(255,255,255,0.8)' }}
            autoCapitalize="none"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <SubmitBtn onPress={submitCompany} >
            <SubmitText>LOGIN</SubmitText>
          </SubmitBtn>
        </ScrollView>
      </Form>
    </View>
  )
}

function MyTabs({ AuthContext }) {
  return (
    <TopTab.Navigator tabBarOptions={{
      style: {
        backgroundColor: '#F8F8F8'
      },
      indicatorStyle: {
        backgroundColor: '#2D0C57'
      }
    }} >
      <TopTab.Screen name="User" component={User} initialParams={{ AuthContext }} options={{
        title: "Usuário"
      }} />
      <TopTab.Screen name="Company" initialParams={{ AuthContext }} component={Company} options={{
        title: "Empresa"
      }} />
    </TopTab.Navigator>
  )
}

export default function Login({ route }) {
  const { AuthContext } = route.params;

  return (
    <Container>
      <MyTabs AuthContext={AuthContext} />
    </Container>
  )
}