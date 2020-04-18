import styled from 'styled-components/native';

import { Headline, Paragraph } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  background: #F6F5F5;
`;

export const HeadLogo = styled.Image`
  align-self: center;
  margin: 10px 0px;
`;
export const HeadLogoContainer = styled.View`
  height: 80px;
  justify-content: center;
  align-items: center;
  width: 100%;
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


export const Head = styled.View`
  flex-direction: row;
`;

export const HeadButtonContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100%;
`;