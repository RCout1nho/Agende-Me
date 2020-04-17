import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import {
  Container, HeadTitle, ListView, DayContainer,
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

export default function YourTickets({ route }) {
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

  useEffect(() => {
    async function apiGet() {
      const response = await api.get(`/booking/${route.params._id}`);

      setBooking(response.data);
    }

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
      />
    </Container>
  )
}