import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Head = styled.View`
  flex-direction: row;
`;

export const HeadButtonContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const HeadLogo = styled.Image`
  align-self: center;
  margin: 10px 0px;
`;
export const HeadLogoContainer = styled.View`
  height: 80px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.Text`
  width: 100%;
  align-self: center;

  font-size: 25px;
  font-weight: bold;
  color: #2D0C57;

  text-align: center;
`;

export const Code = styled.View`
  background: #FFF;
  padding: 20px;
  align-self: center;
  margin-top: 30px;
  border-radius: 40px;
  elevation: 10;
`;

export const BtnSave = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  width: 325px;
  height: 80px;
  background: #3BC365;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 50px;
  elevation: 5;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;