import React, { useEffect, useState, } from 'react';
import { QRCode } from 'react-native-custom-qr-codes';
import { useNavigation } from '@react-navigation/native';

import {
  Container, Title, Code, BtnSave, BtnText, Head,
  HeadLogo, HeadLogoContainer
} from './styles';

import StatusBar from '../../../components/StatusBar';

import logo from '../../../assets/logo-S.png';

export default function Ticket({ route }) {
  const navigation = useNavigation();
  const [rendered, setRendered] = useState(false);

  const { id } = route.params;

  useEffect(() => {
    setRendered(true);
  }, []);


  return (
    <Container>
      <StatusBar />
      <Head>
        <HeadLogoContainer>
          <HeadLogo source={logo} />
        </HeadLogoContainer>
      </Head>


      <Title>Agendado! Seu bilhete:</Title>
      <Code >
        {
          rendered &&
          <QRCode
            content={id}
            logo={logo}
            logoSize={70}
            color="#3BC365"
            codeStyle='dot'
          />
        }
      </Code>

      <BtnSave onPress={() => { navigation.navigate('Your Tickets') }} >
        <BtnText>OK</BtnText>
      </BtnSave>
    </Container>
  )
}
