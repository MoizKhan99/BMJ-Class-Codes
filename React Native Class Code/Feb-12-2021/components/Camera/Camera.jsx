import React, { useState, useEffect, useRef } from "react";
import { Container, Text, View, Button, Icon } from "native-base"
import { ImageBackground, Dimensions } from "react-native"
import { Camera } from "expo-camera";

const CameraComponent = () => {
    const cameraRef = useRef(null);
    const [hasPermission, setPermission] = useState(null)
    const [picture, setPicture] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back)

    useEffect(() => {
        async function getPermission() {
            const permission = await Camera.requestPermissionsAsync()
            setPermission(permission.status === "granted")
        }
        getPermission()
        // Camera.requestPermissionsAsync()
        //     .then((permission) => {
        //         const hasPermission = permission.status === "granted";
        //         setPermission(hasPermission)
        //         // const hasPermission = permission.status === "granted" ? true : false;
        //         // if (permission.status === "granted") {
        //         //     setPermission(true)
        //         // } else {
        //         //     setPermission(false)
        //         // }
        //     })
    }, [])

    const rotateCamera = () => {
        const newType = type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back;
        setType(newType)
    }
    if (hasPermission === null) {
        return <View />
    }

    if (hasPermission === false) {
        return <View>
            <Text>No Acccess to Camera</Text>
        </View>
    }

    const takePicture = async () => {
        const picture = await cameraRef.current.takePictureAsync();
        setPicture(picture.uri)
        // alert(JSON.stringify(picture))
    }

    return (
        <Container style={{ flex: 1 }}>
            {picture ? <ImageBackground source={{ uri: picture }} style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height }} >
                <Button onPress={() => setPicture(null)}>
                    <Text>Take Picture</Text>
                </Button>
            </ImageBackground> : <Camera
                ref={cameraRef}
                type={type} style={{ flex: 1 }} onCameraReady={() => alert("Camera is ready now")}>
                    <Text>Camera</Text>
                    <Button onPress={rotateCamera}>
                        <Icon name='camera-reverse-outline' />
                    </Button>
                    <Button onPress={takePicture}>
                        <Text>Take Picture</Text>
                    </Button>
                </Camera>}

        </Container>
    )
}


export default CameraComponent;