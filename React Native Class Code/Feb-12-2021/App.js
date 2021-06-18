import 'react-native-gesture-handler';
import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useEffect, useState } from "react";
import { loadAsync } from "expo-font";
import { Button, Container, Text } from "native-base"
import { NavigationContainer } from "@react-navigation/native"
import { TabNavigator } from "./navigation"

// const Stack = createStackNavigator()
// Navigator
// Screen



const App = () => {
  const [isAppReady, setAppReady] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    }).then(() => {
      setAppReady(true)
    })
    AsyncStorage.getItem("isLoggedIn")
    .then((data) => {
      if(data) {
        setIsLoggedIn(true);
      }
    })
  }, [])
  if (!isAppReady) {
    return <Text>Loading...</Text>
  }

  const onLogin = () => {
    AsyncStorage.setItem("isLoggedIn", "true")
      .then(() => {
        setIsLoggedIn(true);
        alert("Your are logged In now")
      })

  }

  if (!isLoggedIn) {
    return <Container>
      <Button onPress={onLogin}>
        <Text>Login</Text>
      </Button>
    </Container>
  }
  return (
    <NavigationContainer>
      <Container>
        <TabNavigator />
        {/* <Settings /> */}

        {/* <Stack.Navigator initialRouteName="Settings"
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
        </Stack.Navigator> */}

      </Container>
    </NavigationContainer>
  )
}
export default App;
