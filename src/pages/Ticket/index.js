import React from 'react';
//import QRCode from 'react-native-qrcode-svg';
import { QRCode } from 'react-native-custom-qr-codes';

import { Container, StatusBar, HeadLogo, Title, Code, BtnSave, BtnText } from './styles';

import logo from '../../assets/logo-S.png';
import galaxy from '../../assets/galaxy.jpg';

export default function Ticket() {
  return (
    <Container>
      <StatusBar />

      <HeadLogo source={logo} />

      <Title>Scheduled! Your ticket:</Title>

      <Code>
        <QRCode
          content="https://instagram.com/agende.me?igshid=rhreiz6cld52"
          logo={logo}
          logoSize={70}
          color="#3BC365"
          codeStyle='dot'
        />
      </Code>

      <BtnSave activeOpacity={0.5} >
        <BtnText>Save</BtnText>
      </BtnSave>
    </Container>
  )
}