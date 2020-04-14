import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TextInput } from 'react-native-paper';

import { Container, Form } from './styles';

const TopTab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Company" component={() => (<></>)} />
      <TopTab.Screen name="User" component={() => (<></>)} />
    </TopTab.Navigator>
  )
}

export default function Register() {
  return (
    <Container>
      <Form>
        <TextInput
          label='Email'
          mode='outlined'
          selectionColor='red'
        />
      </Form>
    </Container>
  )
}