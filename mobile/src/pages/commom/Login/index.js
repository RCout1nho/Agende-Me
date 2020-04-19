import React, { useState, useContext } from 'react';
import { YellowBox, View, ScrollView, Image, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TextInput } from 'react-native-paper';
import Dialog from 'react-native-dialog';

import api from '../../../services/api';
import backImage from '../../../assets/background.png';

import {
  Container, Form, SubmitBtn, SubmitText, BackgroundView, BackgroundImage,
  InputEmail, InputPassword
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

function MyDialog({ dialogVisible, setDialogVisible }) {
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

function SignIn({ route }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);

  const { AuthContext, company } = route.params;

  const { signIn } = useContext(AuthContext);

  async function submitUser() {
    const type = company ? 'company' : 'user';
    const response = await api.get(`/auth/${type}`, {
      headers: {
        email,
        password
      }
    });

    if (response.data !== null) {
      const { _id, name } = response.data[0];
      signIn({ email, password, _id, name, company });
    } else {
      setDialogVisible(true);
    }
  }

  return (
    <BackgroundView >
      <BackgroundImage />
      <Form >
        <ScrollView >
          <MyDialog dialogVisible={dialogVisible} setDialogVisible={setDialogVisible} />
          <InputEmail
            theme={theme}
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <InputPassword
            theme={theme}
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <SubmitBtn onPress={submitUser}>
            <SubmitText>LOGIN</SubmitText>
          </SubmitBtn>
        </ScrollView>
      </Form>
    </BackgroundView>
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
      <TopTab.Screen name="User" component={SignIn} initialParams={{ AuthContext, company: false }} options={{
        title: "Usuário"
      }} />
      <TopTab.Screen name="Company" initialParams={{ AuthContext, company: true }} component={SignIn} options={{
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