import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container, CardContainer, LogoContainer, CardLogo,
  CardTitle, CardTitleText, CardDescription, CardDescriptionText,
  BtnRegister, BtnRegisterText, BtnLogin, BtnLoginText
} from './styles';

import background from '../../../assets/background.png';
import logo from '../../../assets/logo-G.png';


export default function Welcome() {
  const navigation = useNavigation();
  const [underlay, setUnderlay] = useState(false);

  function goToLogin() {
    navigation.navigate("Login");
  }

  function goToRegister() {
    navigation.navigate("Register");
  }

  return (
    <Container>
      <LogoContainer>
        <Image source={background} style={{ width: '100%', borderWidth: 1 }} />
      </LogoContainer>
      <CardContainer >
        <CardLogo>
          <Image source={logo} style={{ width: 138, height: 138 }} />
        </CardLogo>
        <CardTitle>
          <CardTitleText>Evite aglomerações!</CardTitleText>
        </CardTitle>
        <CardDescription>
          <CardDescriptionText>When placing an order, select the option “Contactless delivery” and
            the courier will leave your order at the door.</CardDescriptionText>
        </CardDescription>
        <BtnRegister activeOpacity={0.8} onPress={goToRegister} >
          <BtnRegisterText>CADASTRE-SE</BtnRegisterText>
        </BtnRegister>

        <BtnLogin underlayColor="#3BC365" onPressOut={() => { goToLogin(); setUnderlay(false) }}
          onPressIn={() => { setUnderlay(true) }} activeOpacity={0.5} delayPressOut={0.5}
        >
          <BtnLoginText style={{ color: underlay ? "#fff" : "#3BC365" }} >LOGIN</BtnLoginText>
        </BtnLogin>
      </CardContainer>
    </Container>
  )
}