import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function SearchBar({ placeholder }) {
  return (
    <View style={styles.searchBar} >
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        returnKeyType="search"
      />
      <MaterialIcons name="search" size={30} color="#8E8E8F" />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#fff',
    height: 45,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 27,
    borderWidth: 1,
    borderColor: '#D9D0E3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  textInput: {
    fontSize: 15
  }
});