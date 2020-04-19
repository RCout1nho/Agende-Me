import styled from 'styled-components/native';
import { Paragraph } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  background: #F6F5F5;
`;

export const HeadTitle = styled.Text`
  color: #2D0C57;
  font-size: 30px;
  font-weight: bold;
  padding: 10px 25px;
`;

export const HeadLogoContainer = styled.View`
  height: 80px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HeadLogo = styled.Image`
  
`;

export const CardsContainer = styled.ScrollView`
  height: 100%;
  padding: 20px;
`;

export const Card = styled.TouchableOpacity.attrs({
  activityOpacity: 0.5,
})`
  border: 1px solid #D9D0E3;
  border-radius: 8px;
  background: #fff;
  height: 220px;
  width: 180px;
`;

export const CardImageContainer = styled.View`
  height: 70%;
  justify-content: center;
  align-items: center;
`;

export const CardInfoContainer = styled.View`
  flex: 1;
  padding: 0px 10px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const CardTitleContainer = styled.View`
  height: 50%;
  
`;

export const CardCounterContainer = styled.View`
  
`;

export const Line = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;


export const CardTitle = styled.Text`
  font-size: 20px;
  color: #2D0C57;
  font-weight: bold;
`;


export const CardCounter = styled.Text`
  color: #9586A8;
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

export const ShowPlacesContainer = styled.TouchableOpacity.attrs({
  activityOpacity: 0.5,
})`
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ShowPlacesText = styled(Paragraph)`
  color: #3BC365;
  font-size: 17px;
`;