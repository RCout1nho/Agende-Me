import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

import StatusBar from '../../components/StatusBar';
import {
  Container, HeadLogo, Title,
  TitleContainer, ShowPlacesText, ShowPlacesContainer, HeadLogoContainer,
  Head, HeadButtonContainer
} from './styles';

import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';

import logo from '../../assets/logo-S.png';

import api from '../../services/api';

export default function Places({ route }) {
  const [places, setPlaces] = useState([]);
  const navigation = useNavigation();

  const { type } = route.params;

  useEffect(() => {
    async function apiGet() {
      const response = await api.get(`/company/${String(type).toLowerCase()}`);

      setPlaces(response.data);
    }

    apiGet();
  }, []);

  return (
    <Container>
      <StatusBar />

      <Head>
        <HeadButtonContainer>
          <IconButton icon="arrow-left" size={30} onPress={() => { navigation.goBack(); }} />
        </HeadButtonContainer>
        <HeadLogoContainer>
          <HeadLogo source={logo} />
        </HeadLogoContainer>
      </Head>

      <TitleContainer>
        <Title>{type}</Title>
      </TitleContainer>

      <SearchBar placeholder="Pesquise um estabelecimento" marginTop={20} />
      <ShowPlacesContainer activeOpacity={0.5} >
        <ShowPlacesText>Ver locais próximos</ShowPlacesText>
      </ShowPlacesContainer>

      <FlatList
        data={places}
        renderItem={({ item }) => (
          <Card name={item.name} available={item.available} brand={item.photo_url} haveImage={item.haveImage} onPressLike={() => { }} />
        )}
        keyExtractor={item => String(item.id)}
      />


    </Container>
  )
}