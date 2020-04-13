import styled from 'styled-components/native';

export const Container = styled.View`
  background: #97FFB7;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoContainer = styled.View`
  height: 50px;
`;

export const CardContainer = styled.View`
  background: #fff;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  height: 450px;
`;

export const CardLogo = styled.View`
  align-items: center;
  margin-top: 40px;
`;

export const CardTitle = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
`;

export const CardTitleText = styled.Text`
  font-size: 34px;
  font-weight: bold;
  color: #2D0C57;
`;

export const CardDescription = styled.Text`
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const CardDescriptionText = styled.Text`
  color: #9586A8;
  font-size: 19px;
`;

export const BtnBook = styled.TouchableOpacity`
  height: 56px;
  width: 370px;
  background: #3BC365;
  align-self: center;
  margin-top: 30px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const BtnBookText = styled.Text`
  font-size: 18px;
  color: #fff;
`;