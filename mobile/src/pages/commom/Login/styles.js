import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper'
import backImage from '../../../assets/background.png';

export const Container = styled.View`
  flex: 1;
  background: #97FFB7;
`;

export const BackgroundView = styled.View`
flex:1;
background:#97FFB7;
`;

export const BackgroundImage = styled.Image.attrs({
  source: backImage
})`
  position: absolute; 
  height: 100%; 
  width: 100%;
`;

export const Form = styled.View`
  padding: 0px 20px;
  width: 90%;
  flex-direction: column;
  margin: auto;
`;

export const SubmitBtn = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  margin-top: 20px;
  width: 90%;
  height: 56px;
  background: #319851;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  align-self: center;
  elevation: 5;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

//style={{ marginVertical: 15, backgroundColor: 'rgba(255,255,255,0.8)', fontSize: 17 }}
export const InputPassword = styled(TextInput).attrs({
  label: 'Senha',
  mode: 'flat',
  autoCapitalize: 'none',
  secureTextEntry: true,
})`
  margin: 15px 0px;
  background-color: rgba(255,255,255,0.8);
  font-size: 17px;
`;

export const InputEmail = styled(TextInput).attrs({
  label: 'Email',
  mode: 'flat',
  keyboardType: 'email-address',
  autoCapitalize: 'none'
})`
  margin: 15px 0px;
  background-color: rgba(255,255,255,0.8);
  font-size: 17px;
`;