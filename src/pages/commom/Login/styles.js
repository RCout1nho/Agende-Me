import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #F6F5F5;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;  
`;

export const Form = styled.View`
  padding: 0px 20px;
  width: 90%;
  flex-direction: column;
  margin: auto;
`;

export const SubmitBtn = styled.TouchableOpacity`
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
