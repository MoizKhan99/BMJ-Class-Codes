import React, { useState, useEffect, useRef } from "react";
import { Container, Text, View, Button, Icon } from "native-base"
import { ImageBackground, Dimensions } from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner";
import { addBatteryLevelListener, getBatteryLevelAsync } from "expo-battery"
const CameraComponent = () => {
    const [hasPermission, setPermission] = useState(null)
    const [picture, setPicture] = useState(null)
    const [batteryLevel, setBatteryLevel] = useState(null);
    const subscribe = useRef(null);


    useEffect(() => {
        async function getPermission() {
            const permission = await BarCodeScanner.requestPermissionsAsync()
            setPermission(permission.status === "granted")
        }
        getPermission()

        async function getBatteryLevel() {
            const batteryLevel = await getBatteryLevelAsync();
            setBatteryLevel(batteryLevel)

            subscribe.current = addBatteryLevelListener(({ batteryLevel }) => {
                setBatteryLevel(batteryLevel)
            })
        }

        getBatteryLevel()
        return () => {
           if(subscribe.current) {
               subscribe.current.remove();
               subscribe.current = null;
           }
        }
    }, [])

    if (hasPermission === null) {
        return <View />
    }

    if (hasPermission === false) {
        return <View>
            <Text>No Acccess to Camera</Text>
        </View>
    }

    const onBarCodeScanned = async ({ type, data }) => {
        alert(JSON.stringify({
            type,
            data
        }))
    }

    return (
        <Container style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, }}>
                {batteryLevel}
            </Text>
            <BarCodeScanner
                onBarCodeScanned={onBarCodeScanned}
                style={{ flex: 1 }}
            >
                <Text>Camera</Text>
            </BarCodeScanner>

        </Container>
    )
}


export default CameraComponent;