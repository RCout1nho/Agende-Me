import styled from 'styled-components/native';

const opacity = 'rgba(0, 0, 0, .6)';
export const Top = styled.View`
  height: 32.5%;
  background: ${opacity};
  justify-content: center;
  align-items: center;
`;

export const CenterBorder = styled.View`
  flex: 1;
  border-width: 1px;
  border-color: #fff;
  border-radius: 5px;
  border-style: dashed;
`;

export const Center = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 35%;
`;

export const Bottom = styled.View`
  height: 32.5%;
  background: ${opacity};
  align-items: center;
  justify-content: center;
`;

export const Left = styled.View`
  height: 100%;
  width: 20%;
  background: ${opacity};
`;

export const Right = styled.View`
  height: 100%;
  width: 20%;
  background: ${opacity};
`;

export const ReadAgain = styled.TouchableOpacity`
  height: 90px;
  width: 50%;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background: #47B76A;
  elevation: 5;
`;

export const TitleView = styled.View`
  justify-content: center;
`;

export const TitleText = styled.Text`
  font-size: 40px;
  text-align: center;
  font-weight: 400;
  color: #47B76A;
`;

export const ReadAgainText = styled.Text`
  font-size: 17;
  color: #fff;
  font-weight: bold;
`;