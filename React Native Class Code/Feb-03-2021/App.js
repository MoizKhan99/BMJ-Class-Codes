import 'react-native-gesture-handler';

import React, { useEffect, useState } from "react";
import { Text } from "react-native"
import { loadAsync } from "expo-font";
import { Container, Button, View } from "native-base"
import Settings from "./components/Settings/Settings";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()
// Navigator
// Screen
const HomeScreen = (props) => {
  const navigation = props.navigation
  return (
    <Container>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Page</Text>
        <Button onPress={() => {
          navigation.navigate("Settings", {
            title: "App Setting Screen"
          })
        }}>
          <Text>Settings</Text>
        </Button>
      </View>
    </Container>
  )
}


const App = () => {
  const [isAppReady, setAppReady] = useState(false)

  useEffect(() => {
    loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    }).then(() => {
      setAppReady(true)
    })
  }, [])
  if (!isAppReady) {
    return <Text>Loading...</Text>
  }
  return (
    <NavigationContainer>
      <Container>
        {/* <Settings /> */}
        <Stack.Navigator initialRouteName="Settings"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#ff0000"
            },
            headerTitleStyle: {
              color: "#ffffff"
            }
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="Settings" component={Settings}
            options={{
              title: "App Settings",
            }}
            initialParams={{
              title: "Initial Settings"
            }}
          ></Stack.Screen>
        </Stack.Navigator>

      </Container>
    </NavigationContainer>
  )
}
export default App;
