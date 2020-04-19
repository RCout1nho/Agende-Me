import React, { useState } from 'react';
import { View, ScrollView, Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput, HelperText } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Dialog from 'react-native-dialog';

import {
  Container, Form, SubmitBtn, SubmitText, SectionTitle,
  AddressContainer, Address1, Address2, TextStructure
} from './styles';

import backImage from '../../../assets/background.png';

import api from '../../../services/api';

const TopTab = createMaterialTopTabNavigator();

const theme = {
  colors: {
    primary: '#3BC365'
  }
}

function User({ route }) {
  const navigation = useNavigation();

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

  function MyDialog() {
    return (
      <View>
        <Dialog.Container visible={dialogVisible} >
          <Dialog.Title>{fail ? "Falha!" : "Sucesso!"}</Dialog.Title>
          <Dialog.Description>
            {fail ? "Ops, ouve um problema ao criar sua conta, tente novamente mais tarde" :
              "Sua conta foi criada com sucesso, agora basta ir para o menu login e aproveitar nosso app."}
          </Dialog.Description>
          <Dialog.Button label="OK" onPress={() => { setDialogVisible(false); navigation.navigate("Welcome") }} />
        </Dialog.Container>
      </View>
    )
  }

  return (
    <Form  >
      <Image source={backImage} style={{ position: 'absolute', height: '100%', width: '100%' }} />
      <ScrollView style={{ padding: 20 }} >
        <MyDialog />
        <TextStructure>
          Bem vindo
          </TextStructure>
        <TextStructure>
          Crie seu cadastro de usuário
          </TextStructure>
        <View style={{ alignItems: 'center' }}>
        </View>
        <View>
          <TextInput
            label='Nome'
            mode='outlined'
            theme={{ colors: { primary: wrongName ? '#FF5252' : "#3BC365" } }}
            onChangeText={text => setName(text)}
            value={name}
            autoCapitalize="words"
            style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
          />
          <HelperText type="error" visible={wrongName} >
            Senhas não coincidem
        </HelperText>
        </View>
        <View>
          <TextInput
            label='Email'
            mode='outlined'
            theme={{ colors: { primary: wrongEmail ? '#FF5252' : "#3BC365" } }}
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
          />
          <HelperText type="error" visible={wrongEmail} >
            Senhas não coincidem
        </HelperText>
        </View>
        <View>
          <TextInput
            label='Senha'
            mode='outlined'
            theme={{ colors: { primary: wrongPassword ? '#FF5252' : "#3BC365" } }}
            onChangeText={text => setPassword(text)}
            value={password}
            autoCapitalize="none"
            secureTextEntry
            style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
          />
          <HelperText type="error" visible={wrongPassword} >
            Senhas não coincidem
        </HelperText>
        </View>
        <View  >
          <TextInput
            label='Repita Senha'
            mode='outlined'
            theme={{ colors: { primary: wrongPassword ? '#FF5252' : "#3BC365" } }}
            onChangeText={text => setPassword2(text)}
            value={password2}
            autoCapitalize="none"
            secureTextEntry
            style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
          />
          <HelperText type="error" visible={wrongPassword} >
            Senhas não coincidem
        </HelperText>
        </View>
        <SubmitBtn onPress={registerUser} activeOpacity={0.5} >
          <SubmitText >REGISTRAR</SubmitText>
        </SubmitBtn>
      </ScrollView>
    </Form>
  )
}

function Company() {
  return (
    <Form>
      <Image source={backImage} style={{ position: 'absolute', height: '100%', width: '100%' }} />
      <ScrollView style={{ padding: 20 }} >
        <TextStructure>
          Bem vindo
        </TextStructure>
        <TextStructure>
          Crie seu cadastro de empresa
        </TextStructure>
        <SectionTitle>Endereço</SectionTitle>
        <AddressContainer>
          <Address1>
            <TextInput
              label='Cidade'
              mode='outlined'
              theme={theme}
              style={{ width: '70%', backgroundColor: 'rgba(255,255,255,0.8)' }}
            />
            <TextInput
              label='UF'
              mode='outlined'
              theme={theme}
              style={{ width: '20%', backgroundColor: 'rgba(255,255,255,0.8)' }}
            />
          </Address1>

          <Address2>
            <TextInput
              label='Bairro'
              mode='outlined'

              theme={theme}
              style={{ flex: 1, paddingRight: 5, backgroundColor: 'rgba(255,255,255,0.8)' }}
            />
            <TextInput
              label='Rua'
              mode='outlined'

              theme={theme}
              style={{ flex: 1, paddingRight: 5, backgroundColor: 'rgba(255,255,255,0.8)' }}
            />
            <TextInput
              label='CEP'
              mode='outlined'

              theme={theme}
              style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.8)' }}
            />
          </Address2>

          <SectionTitle>Contato</SectionTitle>
          <Address2>
            <TextInput
              label='DDD'
              mode='outlined'

              theme={theme}
              style={{ width: '20%', paddingRight: 5, backgroundColor: 'rgba(255,255,255,0.8)' }}
            />
            <TextInput
              label='Telefone'
              mode='outlined'

              theme={theme}
              style={{ width: '80%', backgroundColor: 'rgba(255,255,255,0.8)' }}
            />
          </Address2>
        </AddressContainer>
        <View>
          <TextInput
            label='Email'
            mode='outlined'
            theme={theme}
            style={{ marginTop: 15, backgroundColor: 'rgba(255,255,255,0.8)' }}
          />
          <TextInput
            label='Senha'
            mode='outlined'
            theme={theme}
            style={{ marginTop: 15, backgroundColor: 'rgba(255,255,255,0.8)' }}
          />
          <TextInput
            label='Senha novamente'
            mode='outlined'
            theme={theme}
            style={{ marginTop: 15, backgroundColor: 'rgba(255,255,255,0.8)' }}
          />
        </View>
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