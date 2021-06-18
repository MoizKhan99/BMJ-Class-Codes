import React from "react";
import { Container, Button, View, Text } from "native-base"
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

export default HomeScreen;