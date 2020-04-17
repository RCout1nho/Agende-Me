import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import {
  Container, HeadTitle, DayContainer,
  CardContainer, DateContainer, NameContainer, InfoContainer, MonthContainer,
  IconContainer, DayText, MonthText, NameText
} from './styles';

import StatusBar from '../../../components/StatusBar';
import SearchBar from '../../../components/SearchBar';

import api from '../../../services/api';

function Card({ name = "", day = "", month = "", available = true }) {
  return (
    <CardContainer activeOpacity={0.5} style={{ backgroundColor: available ? '#3BC365' : '#FF5252' }} >
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
    </CardContainer>
  )
}

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function YourTickets({ route }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [booking, setBooking] = useState([{
    name: "",
    date: {
      day: "",
      month: ""
    },
    company: {
      available: true
    }
  }]);

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
          <Card name={item.company.name} day={item.date.day} month={item.date.month} available={item.company.available} />
        )}
        keyExtractor={item => String(item._id)}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </Container>
  )
}