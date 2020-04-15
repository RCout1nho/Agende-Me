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
  background: #3BC365;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  align-self: center;
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
  width: 100%;
`;

export const Address2 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;