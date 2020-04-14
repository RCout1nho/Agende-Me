import React from 'react';
import { Dropdown } from 'react-native-material-dropdown';

import { StatusBar, Container } from './styles';

export default function Profile() {
  const data = [{
    value: 'Banana',
    id: 1
  }, {
    value: 'Mango',
    id: 2
  }, {
    value: 'Pear',
    id: 3
  }];

  return (
    <Container>
      <StatusBar />
    </Container>
  )
}