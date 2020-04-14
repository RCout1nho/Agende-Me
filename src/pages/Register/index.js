import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Container, } from './styles';

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

    </Container>
  )
}