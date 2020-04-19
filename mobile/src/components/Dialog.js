import React from 'react';
import { View } from 'react-native';
import Dialog from 'react-native-dialog';
import { useNavigation } from '@react-navigation/native';

export default function MyDialog({ dialogVisible, setDialogVisible, fail }) {
  const navigation = useNavigation();
  return (
    <View>
      <Dialog.Container visible={dialogVisible} >
        <Dialog.Title>{fail ? "Falha!" : "Sucesso!"}</Dialog.Title>
        <Dialog.Description>
          {fail ? "Ops, ouve um problema ao criar sua conta, tente novamente mais tarde" :
            "Sua conta foi criada com sucesso, agora basta ir para o menu login e aproveitar nosso app."}
        </Dialog.Description>
        <Dialog.Button label="OK" onPress={() => { setDialogVisible(false); navigation.navigate("Welcome") }} />
      </Dialog.Container>
    </View>
  )
}