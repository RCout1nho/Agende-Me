import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Card({ name = "Sem nome", available = true, brand, id, onPressLike, onPressSchedule, haveImage }) {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} >
      <View style={styles.brand} >
        {haveImage ?
          <Image source={{ uri: brand }} style={{ width: '100%', height: '100%' }} /> :
          <View style={styles.noPosterContainer} >
            <MaterialIcons name="broken-image" size={40} color="#BEBEBE" />
            <Text style={styles.noPoster} >No Poster</Text>
          </View>
        }
      </View >
      <View style={styles.content} >
        <View>
          <View>
            <Text style={styles.title} >{name}</Text>
          </View>
          <View>
            <Text style={styles.description} >{available ?
              "AVAILABLE THIS WEEK" :
              "UNAVAILABLE THIS WEEK"}</Text>
          </View>
        </View>

        <View style={styles.actions} >
          <TouchableOpacity style={styles.like} activeOpacity={0.5} onPress={() => { onPressLike() || handleLike() }}  >
            <MaterialIcons
              name={liked ? "favorite" : "favorite-border"}
              size={30}
              color={liked ? "#FF0000" : "#D9D0E3"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={available ? styles.scheduleOk : styles.scheduleNok} activeOpacity={0.5} >
            <MaterialIcons
              name="access-time"
              size={30}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 160,
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 10
  },
  brand: {
    width: 170,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 1,
    paddingLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    color: '#2D0C57',
    fontSize: 25,
    fontWeight: 'bold'
  },
  description: {
    color: '#2D0C57',
    fontSize: 17,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center'
  },
  like: {
    width: 80,
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#D9D0E3',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scheduleOk: {
    width: 80,
    height: 50,
    backgroundColor: '#3BC365',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scheduleNok: {
    width: 80,
    height: 50,
    backgroundColor: '#FF5252',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noPoster: {
    fontSize: 20,
    color: '#BEBEBE'
  },
  noPosterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})