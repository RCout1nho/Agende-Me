import React, { useState } from 'react';
import { Image, FlatList } from 'react-native';

import {
  Container, StatusBar, HeadLogo, Title,
  TitleContainer, ShowPlacesText, ShowPlacesContainer
} from './styles';

import SearchBar from '../../components/SearchBar';

import logo from '../../assets/logo-S.png';
import carrefour from '../../assets/carrefour.png';
import clock from '../../assets/clock-S.png';

function Card({ name, limite }) {
  return (
    <></>
  )
}


export default function Categories() {
  return (
    <Container>
      <StatusBar />

      <HeadLogo source={logo} />

      <TitleContainer>
        <Title>Supermercados</Title>
      </TitleContainer>

      <SearchBar placeholder="Pesquise um estabelecimento" />
      <ShowPlacesContainer activeOpacity={0.5} >
        <ShowPlacesText>Ver locais próximos</ShowPlacesText>
      </ShowPlacesContainer>

      {/* <FlatList
        data={mercados}
        renderItem={({ item }) => (
          <Card name={item.name} limite={item.limite} />
        )}
        keyExtractor={item => String(item.id)}
      /> */}

      <Card />


    </Container>
  )
}