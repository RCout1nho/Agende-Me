import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constans from 'expo-constants';

export default function StatusBar() {
  return (
    <View style={styles.statusbar} />
  )
}

const styles = StyleSheet.create({
  statusbar: {
    backgroundColor: '#3BC365',
    height: Constans.statusBarHeight
  }
})