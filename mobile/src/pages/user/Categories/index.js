import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container, HeadTitle, HeadLogo, HeadLogoContainer, CardsContainer,
  Card, CardImageContainer, CardInfoContainer, CardImage, CardCounter,
  CardCounterContainer, CardTitle, CardTitleContainer, Line, ShowPlacesContainer,
  ShowPlacesText
} from './styles';

import logo from '../../../assets/logo-S.png';
import supermarketImg from '../../../assets/supermarket.png';
import bankImg from '../../../assets/bank.png';
import fastFoodImg from '../../../assets/fastFood.png';
import restaurantImg from '../../../assets/restaurant.png';

import StatusBar from '../../../components/StatusBar';
import SearchBar from '../../../components/SearchBar';
import CoronaCard from '../../../components/CoronaCard';

import api from '../../../services/api';

function MyCard({ name = "", count = "0", logo, onPress }) {
  return (
    <Card onPress={onPress} >
      <CardImageContainer>
        <CardImage source={logo} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
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

  const [supermarket, setSupermarket] = useState(0);
  const [bank, setBank] = useState(0);
  const [fastFood, setFastFood] = useState(0);
  const [restaurant, setRestaurant] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await api.get('/index/company');
      setSupermarket(response.data.supermarket);
      setBank(response.data.bank);
      setFastFood(response.data.fastfood);
      setRestaurant(response.data.restaurant);
    })();
  }, [])

  return (
    <Container>
      <StatusBar />
      <CoronaCard />
      <HeadLogoContainer>
        <HeadLogo source={logo} />
      </HeadLogoContainer>
      <HeadTitle>Categorias</HeadTitle>
      <SearchBar placeholder="Pesquise por categoria" marginTop={15} />
      <ShowPlacesContainer>
        <ShowPlacesText onPress={() => { navigation.navigate('Map') }} >Ver locais próximos</ShowPlacesText>
      </ShowPlacesContainer>

      <CardsContainer>
        <Line>
          <MyCard name="Supermercados" count={supermarket} logo={supermarketImg} onPress={() => { navigation.navigate('Places', { type: "Supermarket", name: "Supermercados" }) }} />
          <MyCard name="Bancos" count={bank} logo={bankImg} onPress={() => { navigation.navigate('Places', { type: "Bank", name: "Bancos" }) }} />
        </Line>
        <Line>
          <MyCard name="Lachonetes" count={fastFood} logo={fastFoodImg} onPress={() => { navigation.navigate('Places', { type: "Fast-Food", name: "Lanchonetes" }) }} />
          <MyCard name="Restaurantes" count={restaurant} logo={restaurantImg} onPress={() => { navigation.navigate('Places', { type: "Restaurant", name: "Restaurantes" }) }} />
        </Line>
      </CardsContainer>
    </Container>
  )
}