import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Todo from "./components/Todo";

export default function App() {
  const [ counter, setCounter ] = React.useState(0)
  return (
    <View style={styles.container}>
         <StatusBar translucent backgroundColor='red' />
      {/* <Todo /> */}
      {/* <Text style={styles.text}>
        Counter: {counter}
      </Text>
      <Button title="Increment" onPress={() => setCounter(counter  + 1)}/> */}
      {/* <Text style={{fontSize:20,}}>Open React Native </Text>
      <Text style={{fontSize:20,}}>Open React Native </Text>
      <Text style={{fontSize:20,}}>Open React Native </Text>
      <Text style={{fontSize:20,}}>Open React Native </Text>
      <Text style={{fontSize:20,}}>Open React Native </Text>
      <Text style={{fontSize:20,}}>Open React Native </Text>
      <Text style={{fontSize:20,}}>Open React Native </Text>
      <Text style={{fontSize:20,}}>Open React Native </Text>
      <Text style={{fontSize:20,}}>Open React Native </Text>
      <Text style={{fontSize:20,}}>Open React Native </Text>

      <Text style={{fontSize:20,backgroundColor:'blue' }}>Open React Native </Text> */}
<View style={{width:'45%',margin:'2.5%',backgroundColor:'yellow',height:200}}>
<Text>Item 1</Text>
</View>
<View style={{width:'45%',margin:'2.5%',backgroundColor:'blue',height:200}}>
<Text>Item 2</Text>
</View>
<View style={{width:'45%',margin:'2.5%',backgroundColor:'orange',height:200}}>
<Text>Item 3</Text>
</View>
<View style={{width:'45%',margin:'2.5%',backgroundColor:'purple',height:200}}>
<Text>Item 4</Text>
</View>
<View style={{width:'45%',margin:'2.5%',backgroundColor:'gray',height:200}}>
<Text>Item 5</Text>
</View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 26
  }
});
