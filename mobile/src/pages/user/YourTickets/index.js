import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container, HeadTitle, DayContainer,
  CardContainer, DateContainer, NameContainer, InfoContainer, MonthContainer,
  IconContainer, DayText, MonthText, NameText, NoTicketsContainer, NoTicketsText,
  NoTicketsSubText, CardView
} from './styles';

import StatusBar from '../../../components/StatusBar';
import SearchBar from '../../../components/SearchBar';

import api from '../../../services/api';

function Card({ name = "", day = "", month = "", available = true, onPress }) {
  return (
    <CardContainer style={{ backgroundColor: available ? '#3BC365' : '#FF5252' }} onPress={available ? onPress : () => { }} >
      <CardView colors={available ? ['#3BC365', '#97FFB7'] : ['#FFADAD', '#FF5252']}
        start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} locations={[0, 1]}
      >
        <DateContainer>
          <DayContainer>
            <DayText>{day}</DayText>
          </DayContainer>
          <MonthContainer>
            <MonthText>{month}</MonthText>
          </MonthContainer>
        </DateContainer>
        <InfoContainer>
          <NameContainer>
            <NameText>{name}</NameText>
          </NameContainer>
          <IconContainer>
            <SimpleLineIcons name={available ? "lock-open" : "lock"} size={40} color="#262F56" />
          </IconContainer>
        </InfoContainer>
      </CardView>
    </CardContainer>
  )
}

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function YourTickets({ route }) {
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);
  const [booking, setBooking] = useState([]);

  async function apiGet() {
    const response = await api.get(`/booking/${route.params._id}`);

    setBooking(response.data);
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    apiGet();
    wait(2000).then(() => setRefreshing(false));

  }, [refreshing])

  useEffect(() => {

    apiGet();
  }, []);
  return (
    <Container>
      <StatusBar />
      <HeadTitle>Agenda</HeadTitle>
      <SearchBar placeholder="pesquise seus horários" marginTop={15} marginBottom={30} />
      <FlatList
        data={booking}
        renderItem={({ item }) => (
          <Card name={item.company.name} day={item.date.day}
            month={item.date.month} available={item.company.available}
            onPress={() => { navigation.navigate('Ticket', { id: item._id }) }}
          />
        )}
        keyExtractor={item => String(item._id)}
        refreshControl={
          <RefreshControl colors={["#3BC365", "#FF5252"]} refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={() => (
          <NoTicketsContainer>
            <NoTicketsText>Sem tickets a exibir</NoTicketsText>
            <NoTicketsSubText>Arraste para baixo pra atualizar!</NoTicketsSubText>
          </NoTicketsContainer>
        )}
      />
    </Container>
  )
}