import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
` ;

export const ImageContainer = styled.View`
  height: 50%;
  width:100%;
  position: absolute;
  align-items: center;
`;

export const ContainerMarket = styled.View`
  background: #F6F5F5;
  height: 55%;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  elevation: 20;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  width: 90%;
  margin-top: 37px;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerAdress = styled.View`
  border-bottom-width: 1px;
  margin-top:16px;
  padding-bottom: 10px;
  flex-direction: row;
  align-items: center;
  width: 90%;
`;

export const ContainerList = styled.View`
  width:90%;
  align-self: center;
`;

export const ContainerDropdown = styled.View`
  width: 100%;
  align-self: center;
`;

export const FavButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background: #fff;
  border-color: #D9D0E3;
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  elevation: 10;
`;

export const FavContainer = styled.View`
  width: 20%;
`;

export const ScheduleButton = styled.TouchableOpacity`
  width: 80%;
  height: 60px;
  background-color: #3BC365;
  justify-content: center;
  border-radius: 13px;
  margin: auto;
  elevation: 5;
  margin-bottom: 10px;
`;

export const NameMarket = styled.View`
  width: 80%;
`;

export const TextTitle = styled.Text`
  font-size:30px;
  font-weight:bold;
  width: 100%;
`;

export const TextAdress = styled.Text`
  font-size: 17px;
  text-align: left;
`;

export const TextBox = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
`;

export const Adress = styled.View`
  margin-left: 3px;
`;

export const NoPosterContainer = styled.View`
  width: 100%;
  height: 100%;
  background: #9C9C9C;
  justify-content: center;
  align-items: center;
`;

export const NoPosterText = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;