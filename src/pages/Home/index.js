import React from 'react';
import { Image, Text, } from 'react-native';

import {
  Container, CardContainer, LogoContainer, CardLogo,
  CardTitle, CardTitleText, CardDescription, CardDescriptionText,
  BtnRegister, BtnRegisterText, BtnLogin, BtnLoginText
} from './styles';

import background from '../../assets/background.png';
import logo from '../../assets/logo-G.png';

export default function Home() {
  return (
    <Container>
      <LogoContainer>
        <Image source={background} style={{ width: '100%', borderColor: 'red', borderWidth: 1 }} />
      </LogoContainer>
      <CardContainer >
        <CardLogo>
          <Image source={logo} style={{ width: 138, height: 138 }} />
        </CardLogo>
        <CardTitle>
          <CardTitleText>Book your shopping</CardTitleText>
        </CardTitle>
        <CardDescription>
          <CardDescriptionText>When placing an order, select the option “Contactless delivery” and
            the courier will leave your order at the door.</CardDescriptionText>
        </CardDescription>
        <BtnRegister activeOpacity={0.8}>
          <BtnRegisterText>REGISTER</BtnRegisterText>
        </BtnRegister>

        <BtnLogin activeOpacity={0.8}>
          <BtnLoginText>LOGIN</BtnLoginText>
        </BtnLogin>
      </CardContainer>
    </Container>
  )
}