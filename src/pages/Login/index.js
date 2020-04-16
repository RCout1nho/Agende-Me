import React, { useState, useContext } from 'react';
import { YellowBox, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TextInput } from 'react-native-paper';
import Dialog from 'react-native-dialog';

import api from '../../services/api';

import {
  Container, Form, SubmitBtn, SubmitText, SectionTitle,
  AddressContainer, Address1, Address2, Content
} from './styles';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state'
])

const TopTab = createMaterialTopTabNavigator();

const theme = {
  colors: {
    primary: '#3BC365'
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

  async function submit() {
    const response = await api.get('/auth/user', {
      headers: {
        email,
        password
      }
    });

    if (response.data !== null) {
      const { _id, name } = response.data[0];
      signIn({ email, password, _id, name });
    } else {
      setEmail('');
      setPassword('');
      setDialogVisible(true);
    }
  }

  return (
    <Form >
      <MyDialog />

      <TextInput
        label='Email'
        mode='outlined'
        underlineColor='#3BC365'
        theme={theme}
        style={{ marginVertical: 15 }}
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label='Senha'
        mode='outlined'
        underlineColor='#3BC365'
        theme={theme}
        style={{ marginVertical: 15 }}
        onChangeText={text => setPassword(text)}
        value={password}
        autoCapitalize="none"
        secureTextEntry
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

function MyTabs({ AuthContext }) {
  return (
    <TopTab.Navigator tabBarOptions={{
      style: {
        backgroundColor: '#F8F8F8'
      },
      indicatorStyle: {
        backgroundColor: '#3BC365'
      }
    }} >
      <TopTab.Screen name="User" component={User} initialParams={{ AuthContext }} />
      <TopTab.Screen name="Company" component={Company} />
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