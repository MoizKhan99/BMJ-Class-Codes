import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const [count,useCount] =useState(0)
  return (
    <View style={styles.container}>
      <Text style={{flex:2}}>Open up App.js to start working on your app!</Text>
      <Text style={{flex:1}}>My Application!</Text>
      <Text>{count}</Text>
      <Button title='Add Count' onPress={()=>useCount(count + 1)}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
