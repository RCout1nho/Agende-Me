import styled from 'styled-components/native';
import constants from 'expo-constants';

export const StatusBar = styled.View`
  background: #3AC365;
  height: ${constants.statusBarHeight + 'px'};
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgCarousel = styled.Image`
  height:300px;
`;

export const ContainerMarket = styled.View`
  background: #F6F5F5;
  height: 532px;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  border-width: 1px;
  elevation: 20;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  height: 41px;
  width: 374px;
  margin-top: 37px;
  margin-left: 20px;
`;

export const ContainerAdress = styled.View`
  border-bottom-width: 1px;
  margin-top:16px;
  margin-left: 44.5px;
  margin-right: 44.5px;
  padding-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const ContainerList = styled.View`
  margin-top:16px;
  height:199px;
  width:325px;
  margin-left: 44.5px;
`;

export const ContainerDropdown = styled.View`
`;

export const FavButton = styled.TouchableOpacity`
  width: 80px;
  height: 50px;
  background: #fff;
  border-color: #D9D0E3;
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  elevation: 10;
`;

export const ScheduleButton = styled.TouchableOpacity`
  width: 165px;
  height: 44px;
  background-color: #3BC365;
  justify-content: center;
  border-radius: 13px;
  margin: auto;
`;

export const NameMarket = styled.View`
  height: 41px;
`;

export const TextTitle = styled.Text`
  font-size:30px;
  padding-right: 20px;
  font-weight:bold;
`;

export const TextAdress = styled.Text`
  font-size: 17px;
  text-align: left;
`;

export const Text = styled.Text`
  color: #fff;
  text-align: center;
`;

export const Adress = styled.View`
  margin-left: 3px;
`;