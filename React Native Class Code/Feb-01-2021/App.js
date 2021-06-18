import React, { useEffect, useState } from "react";
import { Text } from "react-native"
import { loadAsync } from "expo-font";
import { Container, Button, View } from "native-base"
import Settings from "./components/Settings/Settings";



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
  return (
    <Container>
      {isAppReady ? <Settings /> : <Text>Loading...</Text>}

    </Container>
  )
}
export default App;
