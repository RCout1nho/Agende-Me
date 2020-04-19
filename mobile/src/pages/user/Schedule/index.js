import React, { useState, useEffect } from 'react';
import { YellowBox, View, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import Dialog from 'react-native-dialog';

YellowBox.ignoreWarnings([
  'componentWillUpdate has been renamed',
  'componentWillReceiveProps has been renamed',
  'source.uri'
]);

import {
  Container, ContainerTitle, NameMarket, FavButton, TextTitle, ContainerMarket,
  ContainerList, ContainerAdress, TextAdress, Adress, ContainerDropdown,
  ScheduleButton, TextBox, Content, FavContainer, NoPosterContainer,
  Brand, BrandContainer, DayDropdown, HourDropdown
} from './styles';

import StatusBar from '../../../components/StatusBar';

import getDays from '../../../utils/getDays';
import getSchedules from '../../../utils/getSchedules';

import api from '../../../services/api';

function MyDialog({ dialogVisible, setDialogVisible }) {
  return (
    <View>
      <Dialog.Container visible={dialogVisible} >
        <Dialog.Title>Parabéns!</Dialog.Title>
        <Dialog.Description>
          Você foi agendado(a) com sucesso!
          </Dialog.Description>
        <Dialog.Button label="OK" onPress={() => { setDialogVisible(false) }} />
      </Dialog.Container>
    </View>
  )
}

export default function Shedule({ route }) {
  const navigation = useNavigation();

  const [dialogVisible, setDialogVisible] = useState(false);
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [liked, setLiked] = useState(false);
  const [place, setPlace] = useState({
    name: "",
    photo_url: ""
  });
  const [address, setAdress] = useState({
    city: "",
    UF: "",
    burgh: "",
    street: "",
    num: ""
  });

  useEffect(() => {
    (async () => {
      const response = await api.get(`/company/find/${route.params.company_id}`);

      setPlace(response.data);
      setAdress(response.data.address);
    })()
  }, []);

  function handleLike() {
    setLiked(!liked);
  };

  async function booking() {
    const response = await api.post(`/booking/${place._id}`, {
      hour,
      day: date
    }, {
      headers: {
        user: route.params.user_id
      }
    });

    setDialogVisible(true);

    navigation.navigate('Ticket', { id: response.data._id });
  }

  return (
    <Container>
      <StatusBar />
      <MyDialog setDialogVisible={setDialogVisible} dialogVisible={dialogVisible} />
      <Content>
        <BrandContainer>
          {place.haveImage ?
            <Brand source={{ uri: place.photo_url }} />
            :
            <NoPosterContainer>
              <Feather name="camera-off" color="#BEBEBE" size={80} />
            </NoPosterContainer>
          }
        </BrandContainer>
        <View  >

        </View>
        <ContainerMarket>
          <ContainerTitle>
            <NameMarket>
              <TextTitle>{place.name}</TextTitle>
            </NameMarket>
            <FavContainer>
              <FavButton onPress={() => { handleLike() }}  >
                <MaterialIcons
                  name={liked ? "favorite" : "favorite-border"}
                  size={30}
                  color={liked ? "#FF0000" : "#D9D0E3"}
                />
              </FavButton>
            </FavContainer>
          </ContainerTitle>
          <ContainerAdress>
            <MaterialIcons name="home" size={20} color="#000" />
            <Adress>
              <TextAdress>
                {address.city}, {address.UF}
              </TextAdress>
              <TextAdress>
                Bairro {address.burgh}, {address.street}, Número {address.num}
              </TextAdress>
            </Adress>
          </ContainerAdress>
          <ScrollView style={{ width: '100%' }} >
            <ContainerList>
              <ContainerDropdown>
                <DayDropdown
                  data={getDays()}
                  onChangeText={text => setDate(text)}
                  value={date}
                />
                <HourDropdown
                  data={getSchedules()}
                  onChangeText={text => setHour(text)}
                  value={hour}
                />
                <ScheduleButton onPress={booking} >
                  <TextBox>Agendar</TextBox>
                </ScheduleButton>
              </ContainerDropdown>
            </ContainerList>
          </ScrollView>
        </ContainerMarket>
      </Content>
    </Container>
  )
}