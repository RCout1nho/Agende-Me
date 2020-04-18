import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Brand = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 4px;
  border-width: 0px;
  border-color: #D9D0E3;
  background: #fff;
`;

export const NoPoster = styled.View`
  width: 54px;
  height: 54px;
  border-radius: 4px;
  border-width: 2px;
  border-color: #D9D0E3;
  background: #fff;
  justify-content: center;
  align-items: center;
`

export const CalloutContainer = styled.View`
  width: 260px;
  background: #F6F5F5;
  border-radius: 10px;
  border: 1px solid #D9D0E3;
  padding: 10px;
`;

export const TypeContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const NameText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  align-self: center;
`;

export const TypeText = styled.Text`
  font-size: 17px;
`;

export const AvailableText = styled.Text`
  color: #3BC365;
  font-size: 15px;
`;

export const BottomContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const GoToContainer = styled.TouchableOpacity`
  flex-direction: row;

  justify-content: space-between;
`;

export const GoToText = styled.Text`
  flex-direction: row;
  margin-left: 10px;
`;