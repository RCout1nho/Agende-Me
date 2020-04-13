import styled from 'styled-components/native';
import constants from 'expo-constants';

import { Headline, Searchbar, Paragraph, Subheading } from 'react-native-paper';

export const StatusBar = styled.View`
  background: #3BC365;
  height: ${constants.statusBarHeight + 'px'};
`;

export const Container = styled.View`
  flex: 1;
`;

export const HeadLogo = styled.Image`
  align-self: center;
  margin-top: 10px;
`;

export const Title = styled(Headline)`
  color: #2D0C57;
  font-size: 30px;
  font-weight: bold;
`;

export const TitleContainer = styled.View`
  padding-left: 20px;
`;

export const SearchBar = styled(Searchbar)`
  border-radius: 25px;
  flex-direction: row-reverse;
  width: 90%;
  align-self: center;
  margin-top: 20px;
  elevation: 0;
  border-color: #D9D0E3;
  border-width: 1px;
`;

export const ShowPlacesContainer = styled.TouchableOpacity`
  align-self: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const ShowPlacesText = styled(Paragraph)`
  color: #3BC365;
  font-size: 17px;
`;

export const CardContainer = styled.View`
  align-self: center;
  background: #fff;
  width: 90%;
  height: 150px;
  padding: 10px;
  flex-direction: row;
  elevation: 8;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const CardBrand = styled.View`
  align-items: center;
  justify-content: center;
`;

export const CardContent = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const CardTitleText = styled.Text`
  font-size: 17px;
  color: #868686;
`;

export const CardSubTitleText = styled.Text`
  font-size: 15px;
  color: #868686;
`;

export const CardBtnContainer = styled.View`
  align-items: flex-end;
`;

export const CardBtn = styled.TouchableOpacity`
  width: 80px;
  height: 40px;
  background: #3BC365;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const TextContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;