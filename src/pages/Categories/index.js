import React from 'react';
import { IconButton } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

import {
  Container, HeadTitle, HeadLogo, HeadLogoContainer, CardsContainer,
  Card, CardImageContainer, CardInfoContainer, CardImage, CardCounter,
  CardCounterContainer, CardTitle, CardTitleContainer, Line, Head, HeadButtonContainer
} from './styles';
import StatusBar from '../../components/StatusBar';

import SearchBar from '../../components/SearchBar';

import logo from '../../assets/logo-S.png';
import supermarket from '../../assets/supermarket.png';
import bank from '../../assets/bank.png';
import fastFood from '../../assets/fastFood.png';
import restaurant from '../../assets/restaurant.png';

function MyCard({ name = "", count = "0", logo, onPress }) {
  return (
    <Card activeOpacity={0.5} onPress={onPress} >
      <CardImageContainer>
        <CardImage source={logo} />
      </CardImageContainer>
      <CardInfoContainer>
        <CardTitleContainer>
          <CardTitle>{name}</CardTitle>
        </CardTitleContainer>
        <CardCounterContainer>
          <CardCounter>({count})</CardCounter>
        </CardCounterContainer>
      </CardInfoContainer>
    </Card>
  )
}



export default function Categories() {
  const navigation = useNavigation();
  return (
    <Container>
      <StatusBar />
      <HeadLogoContainer>
        <HeadLogo source={logo} />
      </HeadLogoContainer>
      <HeadTitle>Categories</HeadTitle>
      <SearchBar placeholder="Pesquise por categoria" marginTop={15} />

      <CardsContainer>
        <Line>
          <MyCard name="Supermercados" count="10" logo={supermarket} onPress={() => { navigation.navigate('Places', { type: "Supermarket" }) }} />
          <MyCard name="Bancos" count="7" logo={bank} onPress={() => { navigation.navigate('Places', { type: "Bank" }) }} />
        </Line>
        <Line>
          <MyCard name="Fast-Food" count="3" logo={fastFood} onPress={() => { navigation.navigate('Places', { type: "Fast-Food" }) }} />
          <MyCard name="Restaurantes" count="3" logo={restaurant} onPress={() => { navigation.navigate('Places', { type: "Restaurant" }) }} />
        </Line>
      </CardsContainer>
    </Container>
  )
}