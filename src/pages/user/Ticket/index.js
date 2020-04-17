import React, { useEffect, useState, } from 'react';
import { QRCode } from 'react-native-custom-qr-codes';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import StatusBar from '../../../components/StatusBar';
import {
  Container, Title, Code, BtnSave, BtnText, Head,
  HeadButtonContainer, HeadLogo, HeadLogoContainer
} from './styles';

import logo from '../../../assets/logo-S.png';

export default function Ticket({ route }) {
  const navigation = useNavigation();
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  const { id } = route.params;

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


      <Title >Scheduled! Your ticket:</Title>
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

      <BtnSave activeOpacity={0.5} >
        <BtnText>Save</BtnText>
      </BtnSave>
    </Container>
  )
}
