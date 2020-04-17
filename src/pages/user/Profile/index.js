import React, { useContext } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

import StatusBar from '../../../components/StatusBar';
import {
  Container, HeaderTitle, UsernameCard, CardText,
  Option, OptionsCard, IconContainer, OptionNameContainer, MyDivider,
  CardContent
} from './styles';

function Card({ name, iconName, Iconcolor, onPress }) {
  return (
    <Option activeOpacity={0.5} onPress={onPress} >
      <CardContent>
        <IconContainer>
          <MaterialIcons name={iconName} size={50} color={Iconcolor} />
        </IconContainer>
        <OptionNameContainer>
          <CardText>{name}</CardText>
        </OptionNameContainer>
      </CardContent>
      <MyDivider />
    </Option>
  )
}

export default function Profile({ route }) {
  const { AuthContext, email, password, name, _id } = route.params;

  const { signOut } = useContext(AuthContext);

  function logout() {
    signOut();
  }

  return (
    <Container>
      <StatusBar />
      <HeaderTitle>Profile</HeaderTitle>
      <UsernameCard activeOpacity={0.5}>
        <IconContainer>
          <MaterialIcons name="account-circle" size={50} color="#3BC365" />
        </IconContainer>
        <OptionNameContainer>
          <CardText>{name}</CardText>
        </OptionNameContainer>
      </UsernameCard>

      <ScrollView >
        <OptionsCard>
          <Card name="Favoritos" iconName="favorite-border" Iconcolor="#3BC365" />
          <Card name="Ajustes" iconName="settings" Iconcolor="#3BC365" />
          <Card name="Privacidade" iconName="security" Iconcolor="#3BC365" />
          <Card name="FAQ" iconName="book" Iconcolor="#3BC365" />
          <Card name="Logout" iconName="settings-power" Iconcolor="#3BC365" onPress={logout} />
        </OptionsCard>
      </ScrollView>
    </Container>
  )
}