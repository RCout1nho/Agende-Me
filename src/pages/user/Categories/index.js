import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container, HeadTitle, HeadLogo, HeadLogoContainer, CardsContainer,
  Card, CardImageContainer, CardInfoContainer, CardImage, CardCounter,
  CardCounterContainer, CardTitle, CardTitleContainer, Line, Head, HeadButtonContainer
} from './styles';

import StatusBar from '../../components/StatusBar';
import SearchBar from '../../components/SearchBar';

import logo from '../../../assets/logo-S.png';
import supermarketImg from '../../../assets/supermarket.png';
import bankImg from '../../../assets/bank.png';
import fastFoodImg from '../../../assets/fastFood.png';
import restaurantImg from '../../../assets/restaurant.png';

import api from '../../services/api';

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
  const [supermarket, setSupermarket] = useState(0);
  const [bank, setBank] = useState(0);
  const [fastFood, setFastFood] = useState(0);
  const [restaurant, setRestaurant] = useState(0);

  useEffect(() => {
    async function getApi() {
      const response = await api.get('/index/company');
      setSupermarket(response.data.supermarket);
      setBank(response.data.bank);
      setFastFood(response.data.fastfood);
      setRestaurant(response.data.restaurant);
    }
    getApi();
  }, [])


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
          <MyCard name="Supermercados" count={supermarket} logo={supermarketImg} onPress={() => { navigation.navigate('Places', { type: "Supermarket" }) }} />
          <MyCard name="Bancos" count={bank} logo={bankImg} onPress={() => { navigation.navigate('Places', { type: "Bank" }) }} />
        </Line>
        <Line>
          <MyCard name="Fast-Food" count={fastFood} logo={fastFoodImg} onPress={() => { navigation.navigate('Places', { type: "Fast-Food" }) }} />
          <MyCard name="Restaurantes" count={restaurant} logo={restaurantImg} onPress={() => { navigation.navigate('Places', { type: "Restaurant" }) }} />
        </Line>
      </CardsContainer>
    </Container>
  )
}