import React, { useContext } from 'react';
import { ScrollView, View, Keyboard, AsyncStorage } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
  Container, Form, SubmitBtn, SubmitText, SectionTitle,
  AddressContainer, Address1, Address2
} from './styles';

const theme = {
  colors: {
    primary: '#3BC365'
  }
}

const TopTab = createMaterialTopTabNavigator();


function User() {
  const { signIn } = useContext(AuthContext);
  const username = "Ricardo";
  const password = "123";

  return (
    <Form>
      <TextInput
        label='Nome'
        mode='outlined'
        underlineColor='#3BC365'
        theme={theme}
        style={{ marginVertical: 15 }}
      />
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
      <TextInput
        label='Repita Senha'
        mode='outlined'
        underlineColor='#3BC365'
        theme={theme}
        style={{ marginVertical: 15 }}
      />
      <SubmitBtn onPress={() => signIn({ username, password })} >
        <SubmitText>REGISTER</SubmitText>
      </SubmitBtn>
    </Form>
  )
}

function Company() {
  return (
    <Form >
      <SectionTitle>Endereço</SectionTitle>
      <AddressContainer>
        <Address1>
          <TextInput
            label='Cidade'
            mode='outlined'
            underlineColor='#3BC365'
            theme={theme}
            style={{ width: '70%' }}
          />
          <TextInput
            label='UF'
            mode='outlined'
            underlineColor='#3BC365'
            theme={theme}
            style={{ width: '20%' }}
          />
        </Address1>

        <Address2>
          <TextInput
            label='Bairro'
            mode='outlined'
            underlineColor='#3BC365'
            theme={theme}
            style={{ flex: 1 }}
          />
          <TextInput
            label='Rua'
            mode='outlined'
            underlineColor='#3BC365'
            theme={theme}
            style={{ flex: 1 }}
          />
          <TextInput
            label='CEP'
            mode='outlined'
            underlineColor='#3BC365'
            theme={theme}
            style={{ flex: 1 }}
          />
        </Address2>

        <SectionTitle>Contato</SectionTitle>
        <Address2>
          <TextInput
            label='DDD'
            mode='outlined'
            underlineColor='#3BC365'
            theme={theme}
            style={{ width: '20%' }}
          />
          <TextInput
            label='Telefone'
            mode='outlined'
            underlineColor='#3BC365'
            theme={theme}
            style={{ width: '80%' }}
          />
        </Address2>
      </AddressContainer>
      <View>
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
        <TextInput
          label='Senha novamente'
          mode='outlined'
          underlineColor='#3BC365'
          theme={theme}
          style={{ marginVertical: 15 }}
        />
      </View>
      <SubmitBtn>
        <SubmitText>REGISTER</SubmitText>
      </SubmitBtn>
    </Form>
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

export default function Register() {
  return (
    <Container>
      <MyTabs />
    </Container>
  )
}