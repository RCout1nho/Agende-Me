import styled from 'styled-components/native';
import { Divider } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  background: #F6F5F5;
`;

export const HeaderTitle = styled.Text`
  width: 100%;
  text-align: center;
  padding-top: 10px;

  color: #2D0C57;
  font-size: 30px;
  font-weight: bold;

  margin: 10px 0px;
`;

export const UsernameCard = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  height: 100px;
  width: 90%;
  background: #fff;
  align-self: center;
  margin: 10px 0px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 25px;
  elevation: 10;
  margin-bottom: 20px;
`;

export const CardText = styled.Text`
  color: #2D0C57;
  font-size: 25px;
`;

export const OptionsCard = styled.View`
  background: #fff;
  width: 90%;
  height: 100%;
  border-radius: 10px;
  align-self: center;
  elevation: 5;
  margin-bottom: 10px;
`;

export const Option = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  height: 100px;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CardContent = styled.View`
  flex-direction: row;
  height: 100%;
  padding: 5px 25px;
`

export const MyDivider = styled(Divider)`
  background: rgba(0,0,0,0.2);
  height: 1px;
  width: 90%;
  align-self: center;
`;

export const IconContainer = styled.View`
  height: 100%;
  justify-content: center;
`;

export const OptionNameContainer = styled.View`
  height: 100%;
  padding-left: 20px;
  justify-content: center;
`;