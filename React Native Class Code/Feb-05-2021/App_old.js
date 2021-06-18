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

const Item = ({ title, image }) => {
  useEffect(() => {
    console.log("did mount", title)

    return () => {
      console.log("44444444", title)
    }
  }, [])
  const _style = { backgroundColor: 'blue', marginTop: 10, marginHorizontal: 10, height: 250 }
  return <View style={_style}>
    <Text style={{ fontSize: 24 }}>{title}</Text>
    <Image source={image} width={200} height={200}/>
  </View>
}

const Seperator = () => {
  return <View style={{ height: 5, backgroundColor: 'black', marginTop: 2 }}></View>
}

const EmptyList = () => {
  return <Text style={{ fontSize: 30, fontWeight: 600 }}>No Data Found</Text>
}
export default function App() {
  const arrList = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      image: require("./assets/b1097f8.jpg")
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      image: require("./assets/b1097f8.jpg")
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      image: require("./assets/b1097f8.jpg")
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Forth Item',
      image: require("./assets/b1097f8.jpg")
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fifth Item',
      image: require("./assets/b1097f8.jpg")
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
      <StatusBar backgroundColor="red" />

      <FlatList
        data={arrList}
        renderItem={({ item }) => {
          console.log("render Item")
          return <Item title={item.title} image={item.image}/>
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
        // refreshing={refreshing}
        // onRefresh={onRefresh}
      />

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
