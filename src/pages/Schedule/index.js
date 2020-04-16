import React, { useState, useEffect } from 'react';
import { Image, YellowBox, View } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import { MaterialIcons } from '@expo/vector-icons';

YellowBox.ignoreWarnings([
  'componentWillUpdate has been renamed',
  'componentWillReceiveProps has been renamed'
])

import {
  Container, ContainerTitle, NameMarket, FavButton, TextTitle, ContainerMarket, ContainerList, ContainerAdress, TextAdress,
  Adress, ContainerDropdown, ScheduleButton, TextBox, Content, ImageContainer
} from './styles';

import StatusBar from '../../components/StatusBar';
import extra from '../../assets/extra.png';

import api from '../../services/api';

export default function Shedule({ route }) {
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
    async function getAPi() {
      const response = await api.get(`/company/find/${route.params._id}`);

      setPlace(response.data);
      setAdress(response.data.address);
    }

    getAPi();
  }, []);

  function handleLike() {
    setLiked(!liked);
  };

  let data = [{
    value: '1',
  }, {
    value: '2',
  }, {
    value: '3',
  }, {
    value: '4',
  }, {
    value: '5',
  }, {
    value: '6',
  }];

  return (
    <Container>
      <StatusBar />
      <Content>
        <ImageContainer>
          <Image source={{ uri: place.photo_url }} style={{ width: '100%', height: '100%' }} />
        </ImageContainer>
        <View  >

        </View>
        <ContainerMarket>
          <ContainerTitle>
            <NameMarket>
              <TextTitle>{place.name}</TextTitle>
            </NameMarket>
            <FavButton activeOpacity={0.5} onPress={() => { handleLike() }}  ><MaterialIcons
              name={liked ? "favorite" : "favorite-border"}
              size={30}
              color={liked ? "#FF0000" : "#D9D0E3"}
            /></FavButton>
          </ContainerTitle>
          <ContainerAdress>
            <MaterialIcons name="home" size={20} />
            <Adress>
              <TextAdress>
                {address.city}, {address.UF}
              </TextAdress>
              <TextAdress>
                Bairro {address.burgh}, Rua {address.street}, Número {address.num}
              </TextAdress>
            </Adress>
          </ContainerAdress>
          <ContainerList>
            <ContainerDropdown>
              <Dropdown
                label='Escolha o dia'
                data={data}
                itemPadding={8}
                fontSize={21}
                baseColor={"#868686"}
                containerStyle={({
                  borderRadius: 13,
                  height: 56,
                  marginTop: 21,
                  backgroundColor: '#FFFFFF',
                  justifyContent: "center",
                  paddingLeft: 10
                })}
              />
              <Dropdown
                label='Escolha o horário'
                data={data}
                itemPadding={8}
                fontSize={21}
                baseColor={"#868686"}
                containerStyle={({
                  borderRadius: 13,
                  height: 56,
                  marginTop: 21,
                  backgroundColor: '#FFFFFF',
                  justifyContent: "center",
                  paddingLeft: 10
                })}
              />
              <ScheduleButton>
                <TextBox>
                  Schedule
               </TextBox>
              </ScheduleButton>
            </ContainerDropdown>
          </ContainerList>
        </ContainerMarket>
      </Content>
    </Container>
  )
}