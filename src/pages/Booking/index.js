import React, { useState } from 'react';
import { Image } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container, ContainerTitle, NameMarket, FavButton, TextTitle, ContainerMarket, ContainerList, ContainerAdress, TextAdress,
  Adress, ContainerDropdown, ScheduleButton, TextBox, Content, ImageContainer
} from './styles';

import StatusBar from '../../components/StatusBar';
import extra from '../../assets/extra.png';

export default function Booking() {
  const [liked, setLiked] = useState(false);

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
          <Image source={extra} style={{ width: '100%' }} />
        </ImageContainer>
        <ContainerMarket>
          <ContainerTitle>
            <NameMarket>
              <TextTitle>Market</TextTitle>
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
                Alexandra Smith
            </TextAdress>
              <TextAdress>
                Cesu 31 k-2 5.st, SIA Chili
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