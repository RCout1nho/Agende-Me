import styled from 'styled-components/native';
import backImage from '../../../assets/background.png';
import { TextInput } from 'react-native-paper';


export const BackgroundImage = styled.Image.attrs({
  source: backImage
})`
  position: absolute; 
  height: 100%; 
  width: 100%;
`;

export const InputName = styled(TextInput).attrs({
  label: 'Nome',
  mode: 'outlined',
  autoCapitalize: 'words'
})`
  background-color: rgba(255,255,255,0.8);  
`;

export const InputEmail = styled(TextInput).attrs({
  label: 'Email',
  mode: 'outlined',
  autoCapitalize: 'words',
  keyboardType: 'email-address',
})`
  background-color: rgba(255,255,255,0.8);  
`;

export const InputPassword = styled(TextInput).attrs({
  label: 'Senha',
  mode: 'outlined',
  autoCapitalize: 'none',
})`
  background-color: rgba(255,255,255,0.8);  
`;

export const InputPassword2 = styled(TextInput).attrs({
  label: 'Repita a senha',
  mode: 'outlined',
  autoCapitalize: 'none',
})`
  background-color: rgba(255,255,255,0.8);  
`;

export const InputCity = styled(TextInput).attrs({
  label: 'Cidade',
  mode: 'outlined',
  autoCapitalize: 'words',
})`
  width: 75%;
  background-color: rgba(255,255,255,0.8);  
`;

export const InputUF = styled(TextInput).attrs({
  label: 'UF',
  mode: 'outlined',
  autoCapitalize: 'characters',
  maxLength: 2,
})`
  width: 20%;
  background-color: rgba(255,255,255,0.8);
`;

export const InputBurgh = styled(TextInput).attrs({
  label: 'Bairro',
  mode: 'outlined',
  autoCapitalize: 'words',
})`
  flex: 1; 
  padding-right: 5px; 
  background: rgba(255,255,255,0.8);
`;

export const InputStreet = styled(TextInput).attrs({
  label: 'Rua',
  mode: 'outlined',
  autoCapitalize: 'words',
})`
  flex: 1; 
  padding-right: 5px; 
  background: rgba(255,255,255,0.8);
`;

export const InputCEP = styled(TextInput).attrs({
  label: 'CEP',
  mode: 'outlined',
  maxLength: 8,
  autoCapitalize: 'words',
})`
  flex: 1; 
  background: rgba(255,255,255,0.8);
  padding-right: 5px;
`;

export const InputDDD = styled(TextInput).attrs({
  label: 'DDD',
  mode: 'outlined',
  keyboardType: 'number-pad',
  maxLength: 2
})`
  background: rgba(255,255,255,0.8);
  width: 20%;
`;

export const InputPhone = styled(TextInput).attrs({
  label: 'Telefone',
  mode: 'outlined',
})`
  background: rgba(255,255,255,0.8);
  width: 80%;
`;

export const Container = styled.View`
  flex: 1;
  background: #F6F5F5;
`;

export const Form = styled.View`
  padding-top: 20px;
  flex: 1;
  background-color: #97FFB7;
  align-self: center;
`;

export const SubmitBtn = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 90%;
  height: 56px;
  background: #3BC365;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  align-self: center;
  elevation: 3;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const SectionTitle = styled.Text`
  color: #2D0C57;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0px;
`;

export const AddressContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const Address1 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
`;

export const Address2 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const TextStructure = styled.Text`
  color: #2D0C57;
  font-size: 34px;
  font-weight: bold
`;