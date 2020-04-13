import React from 'react';
import { Image, Text } from 'react-native';

import {
  Container, CardContainer, LogoContainer, CardLogo,
  CardTitle, CardTitleText, CardDescription, CardDescriptionText,
  BtnBook, BtnBookText
} from './styles';

import background from '../../assets/background.png';
import logo from '../../assets/logo-B.png';

export default function Home() {
  return (
    <Container>
      <LogoContainer>
        <Image source={background} style={{ width: '100%' }} />
      </LogoContainer>
      <CardContainer >
        <CardLogo>
          <Image source={logo} />
        </CardLogo>
        <CardTitle>
          <CardTitleText>Book your shopping</CardTitleText>
        </CardTitle>
        <CardDescription>
          <CardDescriptionText>When placing an order, select the option “Contactless delivery” and
            the courier will leave your order at the door.</CardDescriptionText>
        </CardDescription>
        <BtnBook activeOpacity={0.8}>
          <BtnBookText>BOOK NOW</BtnBookText>
        </BtnBook>
      </CardContainer>
    </Container>
  )
}