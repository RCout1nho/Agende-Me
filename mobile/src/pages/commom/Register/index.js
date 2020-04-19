import React, { useState } from 'react';
import { View, ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TextInput, HelperText } from 'react-native-paper';

import {
  Container, Form, SubmitBtn, SubmitText, SectionTitle,
  AddressContainer, Address1, Address2, TextStructure, BackgroundImage,
  InputName, InputEmail, InputPassword2, InputPassword, InputCity, InputUF,
  InputBurgh, InputCEP, InputStreet, InputDDD, InputPhone
} from './styles';

import Dialog from '../../../components/Dialog'

import api from '../../../services/api';

const TopTab = createMaterialTopTabNavigator();

const theme = {
  colors: {
    primary: '#3BC365'
  }
}

function User() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongName, setWrongName] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [fail, setFail] = useState(false);

  async function registerUser() {
    if (password !== password2) {
      setWrongPassword(true);
    } else {
      setWrongPassword(false);

      const response = await api.post('/user', {
        name,
        email,
        password
      });

      if (response) {
        setFail(false);
        setName('');
        setEmail('');
        setPassword('');
        setPassword2('');
      } else {
        setFail(true);
      }

      setDialogVisible(true);
    }
  }

  return (
    <Form >
      <BackgroundImage />
      <ScrollView style={{ padding: 20 }} >
        <Dialog dialogVisible={dialogVisible} setDialogVisible={setDialogVisible} fail={fail} />
        <TextStructure>Bem vindo</TextStructure>
        <TextStructure>Crie seu cadastro de usuário</TextStructure>
        <View>
          <InputName
            theme={{ colors: { primary: wrongName ? '#FF5252' : "#3BC365" } }}
            onChangeText={text => setName(text)}
            value={name}
          />
          <HelperText type="error" visible={wrongName} >
            Nome inválido
          </HelperText>
        </View>
        <View>
          <InputEmail
            theme={{ colors: { primary: wrongEmail ? '#FF5252' : "#3BC365" } }}
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <HelperText type="error" visible={wrongEmail} >
            Senhas não coincidem
        </HelperText>
        </View>
        <View>
          <InputPassword
            theme={{ colors: { primary: wrongPassword ? '#FF5252' : "#3BC365" } }}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
          />
          <HelperText type="error" visible={wrongPassword} >
            Senhas não coincidem
          </HelperText>
        </View>
        <View  >
          <InputPassword2
            theme={{ colors: { primary: wrongPassword ? '#FF5252' : "#3BC365" } }}
            onChangeText={text => setPassword2(text)}
            value={password2}
            secureTextEntry
          />
          <HelperText type="error" visible={wrongPassword} >
            Senhas não coincidem
          </HelperText>
        </View>
        <SubmitBtn onPress={registerUser} >
          <SubmitText>REGISTRAR</SubmitText>
        </SubmitBtn>
      </ScrollView>
    </Form>
  )
}

function Company() {
  return (
    <Form>
      <BackgroundImage />
      <ScrollView style={{ padding: 20 }} >
        <TextStructure>Bem vindo</TextStructure>
        <TextStructure>Crie seu cadastro de empresa</TextStructure>

        <SectionTitle>Endereço</SectionTitle>

        <AddressContainer>
          <Address1>
            <InputCity
              theme={theme}
            />
            <InputUF
              theme={theme}
            />
          </Address1>

          <Address2>
            <InputBurgh
              theme={theme}
            />
            <InputStreet
              theme={theme}
            />
            <InputCEP
              theme={theme}
            />
          </Address2>

          <SectionTitle>Contato</SectionTitle>

          <Address2>
            <InputDDD
              theme={theme}
            />
            <InputPhone
              theme={theme}
            />
          </Address2>

        </AddressContainer>

        <InputEmail
          theme={theme}
        />
        <InputPassword
          theme={theme}
        />
        <InputPassword2
          theme={theme}
        />

        <SubmitBtn>
          <SubmitText>REGISTRAR</SubmitText>
        </SubmitBtn>
      </ScrollView>
    </Form>
  )
}

function MyTabs({ token }) {
  return (
    <TopTab.Navigator tabBarOptions={{
      style: {
        backgroundColor: '#F8F8F8'
      },
      indicatorStyle: {
        backgroundColor: '#3BC365'
      }
    }} >
      <TopTab.Screen name="User" component={User} initialParams={{ token }} options={{
        title: "Usuário"
      }} />
      <TopTab.Screen name="Company" component={Company} options={{
        title: "Empresa"
      }} />
    </TopTab.Navigator>
  )
}

export default function Register({ route }) {
  const { token } = route.params;
  return (
    <Container>
      <MyTabs token={token} />
    </Container>
  )
}