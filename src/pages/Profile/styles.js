import styled from 'styled-components/native';
import constants from 'expo-constants';

export const StatusBar = styled.View`
  background: #3BC365;
  height: ${constants.statusBarHeight + 'px'};
`;

export const Container = styled.View`
  flex: 1;
`;