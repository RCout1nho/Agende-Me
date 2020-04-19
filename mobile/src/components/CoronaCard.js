import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, Ionicons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';
import constants from 'expo-constants';


export default function CoronaCard() {
  const [visible, setVisible] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <View>
      {visible ?
        <View style={[styles.card, { backgroundColor: collapsed ? 'rgba(238,209,27,1)' : 'rgba(238,209,27,0.8)' }]} >
          <View style={styles.header} >
            <View style={styles.infoTitle}>
              <Feather name="alert-triangle" size={35} color="#F6F5F5" />
              <Text style={styles.title} >Alerta sobre o Covid-19!</Text>
            </View>
            <IconButton icon="close" size={30} color="#fff" onPress={() => { setVisible(false) }} />
          </View>
          <View style={styles.coronaInfoContainer} >
            <Text style={styles.coronaInfoText} >
              O covid-19 é uma ameaça em potencial, por isso, nós do agende.me queremos te ajudar
              a se proteger
            </Text>
          </View>
          {
            collapsed &&
            <View>
              <Text style={styles.infoTexts} >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
            </Text>
            </View>
          }

          <View style={styles.saibaMaisContainer} >
            {collapsed ? <></> : <Text style={styles.saibaMais} >Saiba mais</Text>}
            <IconButton icon={() => (
              <Ionicons name={collapsed ? "ios-arrow-up" : "ios-arrow-down"} color="#fff" size={20} />
            )} size={30} color="#fff" onPress={() => { setCollapsed(!collapsed) }} />
          </View>
        </View>
        :
        <></>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 17,
    paddingLeft: 10,
    position: 'absolute',
    marginTop: constants.statusBarHeight,
    zIndex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#F6F5F5',
    fontSize: 19,
    marginLeft: 10
  },
  infoTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  coronaInfoContainer: {
    paddingRight: 10
  },
  coronaInfoText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
  saibaMaisContainer: {
    alignItems: 'center',
    marginTop: 5
  },
  saibaMais: {
    color: '#fff',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  infoTexts: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center'
  }
});