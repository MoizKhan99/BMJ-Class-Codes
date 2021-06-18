import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  TouchableHighlight,
  Modal,
  View, Button, ScrollView, Image, FlatList, Platform, KeyboardAvoidingView, TouchableWithoutFeedback
} from 'react-native';

const Item = ({ title }) => {
  useEffect(() => {
    console.log("did mount", title)

    return () => {
      console.log("44444444", title)
    }
  }, [])
  const _style = { backgroundColor: 'blue', marginTop: 10, marginHorizontal: 10, height: 250 }
  return <View style={_style}>
    <Text style={{ fontSize: 24 }}>{title}</Text>
  </View>
}

const Seperator = () => {
  return <View style={{ height: 5, backgroundColor: 'black', marginTop: 2 }}></View>
}

const EmptyList = () => {
  return <Text style={{ fontSize: 30, fontWeight: 600 }}>No Data Found</Text>
}

const KeyboardAvoidingComponent = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const onSetModalVisible = () => {
    setModalVisible(!modalVisible)
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
       <View style={styles.centeredView}>

      {modalVisible ? <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>: null}
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} onChangeText={(value) => console.log(value)} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={onSetModalVisible} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};



export default function App() {
  const [count, useCount] = useState(0)
  const [refreshing, setRefreshing] = useState(false)
  const arrList = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Forth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fifth Item',
    },

  ];

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }
  return (
    <View style={styles.container}>
      {/* <Text style={{flex:1}}>Open up App.js to start working on your app!</Text>
      <Text style={{flex:1}}>My Application!</Text> */}
      <StatusBar backgroundColor="red" />

      {/* <Text>{count}</Text>
      <Button title='Add Count' onPress={()=>useCount(count + 1)}/>  */}

      {/* <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',marginTop:30}}>

<View style={{width:'45%',margin:'2.5%',height:200,backgroundColor:'red'}}>
<Text>Item One</Text>
</View>
<View style={{width:'45%',margin:'2.5%',height:200,backgroundColor:'orange'}}>
<Text>Item One</Text>
</View>
<View style={{width:'45%',margin:'2.5%',height:200,backgroundColor:'purple'}}>
<Text>Item One</Text>
</View>
<View style={{width:'45%',margin:'2.5%',height:200,backgroundColor:'green'}}>
<Text>Item One</Text>
</View>

</View> */}
      {/* <ScrollView style={{flex:1}} horizontal={true}>
  

<View style={{width:200,margin:30,height:200,backgroundColor:'red'}}>
<Text>Item One</Text>
</View>
<View style={{width:200,margin:30,height:200,backgroundColor:'orange'}}>
<Text>Item One</Text>
</View>
<View style={{width:200,margin:30,height:200,backgroundColor:'purple'}}>
<Text>Item One</Text>
</View>
<View style={{width:200,margin:30,height:200,backgroundColor:'green'}}>
<Text>Item One</Text>
</View>

 
</ScrollView> */}





      {/* 
<ScrollView>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
  <Text>asdasdasd</Text>
</ScrollView> */}
      {/* <Image source={require('./assets/one.jpeg')} style={{ width: 200, height: 200 }} />
      <Image source={{ uri: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' }} style={{ width: 200, height: 200 }} /> */}


      {/* <FlatList
        data={arrList}
        renderItem={({ item }) => {
          console.log("render Item")
          return <Item title={item.title}/>
        }}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seperator}
        ListHeaderComponent={() => <Text>List Header</Text>}
        ListFooterComponent={() => <Text>List Footer</Text>}
        ListEmptyComponent={EmptyList}
        // horizontal={true}
        initialNumToRender={2}
        // inverted={true}
        // numColumns={3}
        // onEndReached={() => alert("List in ended")}
        // onEndReachedThreshold={1}
        refreshing={refreshing}
        onRefresh={onRefresh}
      /> */}

      <KeyboardAvoidingComponent />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
