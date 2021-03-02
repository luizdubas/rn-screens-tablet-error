import React from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'

const friendData = [
  { name: 'Friend 1', age: 20 },
  { name: 'Friend 2', age: 45 },
  { name: 'Friend 3', age: 32 },
  { name: 'Friend 4', age: 27 },
  { name: 'Friend 5', age: 53 },
  { name: 'Friend 6', age: 18 },
  { name: 'Friend 7', age: 30 },
]

const ListScreen = () => {
  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.largeText}>List view</Text>
      <FlatList 
        keyExtractor={(item) => { return item.name }}
        data={friendData}
        renderItem={ ({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>Age {item.age}</Text>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'stretch',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginVertical: 8
  },
  largeText: {
      fontSize: 32,
      marginHorizontal: 24,
      marginVertical: 8,
  },
  text: {
      fontSize: 20
  }
})

export default ListScreen