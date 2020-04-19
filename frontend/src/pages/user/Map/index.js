import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout, Overlay } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { AntDesign, FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container, Brand, CalloutContainer, AvailableText, NameText, TypeText,
  TypeContainer, BottomContainer, GoToContainer, GoToText, NoPoster
} from './styles';

import api from '../../../services/api';

export default function Map() {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [places, setPlaces] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function getPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        })
      }
    }

    async function getApi() {
      const response = await api.get('/company');

      setPlaces(response.data);
    }

    getApi();
    getPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }
  return (
    <Container>
      <MapView style={{ flex: 1 }} initialRegion={currentRegion}>
        <Marker coordinate={{ latitude: currentRegion.latitude, longitude: currentRegion.longitude }} />
        {places.map(place => (
          <Marker key={place._id} coordinate={place.address.coordinates} >
            {place.haveImage ?
              <Brand source={{ uri: place.photo_url }} />
              :
              <NoPoster>
                <Feather name="camera-off" size={30} color="#D9D0E3" />
              </NoPoster>
            }
            <Callout tooltip={true} onPress={() => { navigation.navigate('Schedule', { company_id: place._id }) }} >
              <CalloutContainer>
                <NameText>{place.name}</NameText>
                <TypeContainer>
                  {place.type == 'supermarket' &&
                    <>
                      <AntDesign name="shoppingcart" size={20} style={{ marginRight: 10 }} color="#3BC365" />
                      <TypeText>Supermercado</TypeText>
                    </>
                  }
                  {place.type == 'bank' &&
                    <>
                      <MaterialCommunityIcons name="bank" size={20} style={{ marginRight: 10 }} color="#3BC365" />
                      <TypeText>Banco</TypeText>
                    </>
                  }
                </TypeContainer>
                <BottomContainer>
                  {place.available ?
                    <AvailableText style={{ color: '#3BC365' }} >Disponível</AvailableText>
                    :
                    <AvailableText style={{ color: '#FF5252' }} >Indisponível</AvailableText>
                  }
                  <GoToContainer>
                    <FontAwesome name="send" size={20} color="#3BC365" />
                    <GoToText>Agendar</GoToText>
                  </GoToContainer>
                </BottomContainer>
              </CalloutContainer>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </Container >
  )
}

{/* <Marker coordinate={{ latitude: -3.0031862, longitude: -59.9807489 }} >
          <Brand source={{ uri: 'https://images.gupy.io/unsafe/85x85/https://s3.amazonaws.com/gupy5/production/companies/361/career/805/images/logo.png' }} />
          <Callout tooltip={true} onPress={() => { navigation.navigate('Schedule', { company_id: "5e995fef90e2e525c9d95b81" }) }} >
            <CalloutContainer>
              <NameText>Atack</NameText>
              <TypeContainer>
                <AntDesign name="shoppingcart" size={20} style={{ marginRight: 10 }} color="#3BC365" />
                <TypeText>Supermercado</TypeText>
              </TypeContainer>

              <BottomContainer>
                <AvailableText>Disponível</AvailableText>
                <GoToContainer>
                  <FontAwesome name="send" size={20} color="#3BC365" />
                  <GoToText>Ir para a loja</GoToText>
                </GoToContainer>
              </BottomContainer>
            </CalloutContainer>
          </Callout>
        </Marker> */}