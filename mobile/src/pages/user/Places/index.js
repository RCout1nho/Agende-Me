import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

import {
  Container, HeadLogo, Title,
  TitleContainer, HeadLogoContainer,
  Head, HeadButtonContainer
} from './styles';

import logo from '../../../assets/logo-S.png';

import StatusBar from '../../../components/StatusBar';
import SearchBar from '../../../components/SearchBar';
import Card from '../../../components/Card';

import api from '../../../services/api';

export default function Places({ route }) {
  const navigation = useNavigation();

  const [places, setPlaces] = useState([]);

  const { type, name } = route.params;

  useEffect(() => {
    (async () => {
      const response = await api.get(`/company/${String(type).toLowerCase()}`);

      setPlaces(response.data);
    })()
  }, []);

  function goSchedule(_id) {
    navigation.navigate('Schedule', {
      company_id: _id
    });
  }

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
        <Title>{name}</Title>
      </TitleContainer>

      <SearchBar placeholder="Pesquise um estabelecimento" marginTop={20} />

      <FlatList
        data={places}
        renderItem={({ item }) => (
          <Card name={item.name} available={item.available} brand={item.photo_url}
            haveImage={item.haveImage} onPressLike={() => { }} onPress={() => { item.available && goSchedule(item._id) }}
          />
        )}
        keyExtractor={item => String(item.id)}
      />
    </Container>
  )
}