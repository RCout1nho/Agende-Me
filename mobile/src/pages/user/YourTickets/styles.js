import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

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

export const CardContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  background: #3BC365;
  border-radius: 17px;
  width: 90%;
  height: 115px;
  align-self: center;
  margin-bottom: 15px;
`;

export const DateContainer = styled.View`
  flex: 0.25;
  background: #F6F5F5;
  border-radius: 7px;
`;

export const CardView = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  background: #3BC365;
  border-radius: 17px;
  align-self: center;
  flex-direction: row;
  padding: 20px;
  margin-bottom: 15px;
`;
export const InfoContainer = styled.View`
  flex: 0.8;
  flex-direction: row;
`;

export const NameContainer = styled.View`
  flex: 0.8;
  padding: 0px 10px;
  flex-direction: row;
`;

export const DayContainer = styled.View`
  justify-content: center;
  
`;

export const MonthContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;
`;

export const DayText = styled.Text`
  color: #2D0C57;
  font-size: 30px;
  text-align: center;
`;

export const MonthText = styled.Text`
  color: #2D0C57;
  font-size: 15px;
  text-align: center;
`;

export const NameText = styled.Text`
  color: #1E1C61;
  font-size: 23px;
`;

export const NoTicketsContainer = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 100px;
`;

export const NoTicketsText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #3BC365;
`;

export const NoTicketsSubText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #3BC365;
`;