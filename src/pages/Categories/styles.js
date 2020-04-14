import styled from 'styled-components/native';
import constants from 'expo-constants';

import { Headline, Paragraph } from 'react-native-paper';

export const StatusBar = styled.View`
  background: #3BC365;
  height: ${constants.statusBarHeight + 'px'};
`;

export const Container = styled.View`
  flex: 1;
`;

export const HeadLogo = styled.Image`
  align-self: center;
  margin: 10px 0px;
`;

export const Title = styled(Headline)`
  color: #2D0C57;
  font-size: 30px;
  font-weight: bold;
`;

export const TitleContainer = styled.View`
  padding-left: 20px;
`;

export const ShowPlacesContainer = styled.TouchableOpacity`
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ShowPlacesText = styled(Paragraph)`
  color: #3BC365;
  font-size: 17px;
`;