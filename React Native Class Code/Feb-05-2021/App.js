import 'react-native-gesture-handler';

import React, { useEffect, useState } from "react";
import { Text } from "react-native"
import { loadAsync } from "expo-font";
import { Container} from "native-base"
import { NavigationContainer } from "@react-navigation/native"
import {  TabNavigator } from "./navigation"

// const Stack = createStackNavigator()
// Navigator
// Screen



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
