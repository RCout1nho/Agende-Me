import React, { useState } from 'react';
import { Image, FlatList } from 'react-native';

import {
  Container, StatusBar, HeadLogo, Title,
  TitleContainer, SearchBar, ShowPlacesText, ShowPlacesContainer,
  CardContainer, CardBrand, CardContent, TextContainer,
  CardSubTitleText, CardTitleText, CardBtn, CardBtnContainer
} from './styles';

import logo from '../../assets/logo-S.png';
import carrefour from '../../assets/carrefour.png';
import clock from '../../assets/clock-S.png';

function Card({ name, limite }) {
  return (
    <CardContainer>
      <CardBrand>
        <Image source={carrefour} />
      </CardBrand>
      <CardContent>
        <TextContainer>
          <CardTitleText>
            {name}
          </CardTitleText>
          <CardSubTitleText>
            Limite de {limite} pessoas
          </CardSubTitleText>
        </TextContainer>
        <CardBtnContainer >
          <CardBtn activeOpacity={0.5} >
            <Image source={clock} />
          </CardBtn>
        </CardBtnContainer>

      </CardContent>
    </CardContainer>
  )
}

export default function Categories() {
  const mercados = [
    {
      name: "carrefour",
      limite: 20,
      id: 1
    },
    {
      name: "DB",
      limite: 30,
      id: 2
    },
    {
      name: "atack",
      limite: 127,
      id: 3
    },
    {
      name: "big amigão",
      limite: 5,
      id: 4
    },
    {
      name: "assaí",
      limite: 234,
      id: 5
    }
  ]

  return (
    <Container>
      <StatusBar />

      <HeadLogo source={logo} />

      <TitleContainer>
        <Title>Supermercados</Title>
      </TitleContainer>

      <SearchBar
        placeholder="Pesquise por estabelecimento"
      />
      <ShowPlacesContainer activeOpacity={0.5} >
        <ShowPlacesText>Ver locais próximos</ShowPlacesText>
      </ShowPlacesContainer>

      <FlatList
        data={mercados}
        renderItem={({ item }) => (
          <Card name={item.name} limite={item.limite} />
        )}
        keyExtractor={item => String(item.id)}
      />


    </Container>
  )
}