import React from 'react';
import { FlatList } from 'react-native';

import StatusBar from '../../components/StatusBar';
import {
  Container, HeadLogo, Title,
  TitleContainer, ShowPlacesText, ShowPlacesContainer, HeadLogoContainer
} from './styles';

import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';

import logo from '../../assets/logo-S.png';

export default function Categories() {
  const mercados = [
    {
      name: 'TESTE',
      available: true,
      id: 1,
      haveImage: true
    },
    {
      name: 'Carrefour',
      available: false,
      id: 2,
      haveImage: true
    },
    {
      name: 'Atack',
      available: true,
      id: 3,
      haveImage: true
    },
    {
      name: 'Big Amigão',
      available: true,
      id: 4,
      haveImage: true
    },
    {
      name: 'Assaí',
      available: true,
      id: 5,
      haveImage: true
    }
  ];

  return (
    <Container>
      <StatusBar />

      <HeadLogo source={logo} />

      <TitleContainer>
        <Title>Supermercados</Title>
      </TitleContainer>

      <SearchBar placeholder="Pesquise um estabelecimento" marginTop={20} />
      <ShowPlacesContainer activeOpacity={0.5} >
        <ShowPlacesText>Ver locais próximos</ShowPlacesText>
      </ShowPlacesContainer>

      <FlatList
        data={mercados}
        renderItem={({ item }) => (
          <Card name={item.name} available={item.available} haveImage={item.haveImage} onPressLike={() => { }} />
        )}
        keyExtractor={item => String(item.id)}
      />


    </Container>
  )
}