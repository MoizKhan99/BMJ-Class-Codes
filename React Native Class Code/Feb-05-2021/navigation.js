import React from "react"
import { Text } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons";

import Settings from "./components/Settings/Settings";
import HomeScreen from "./components/Home/Home";

const HomeStack = createStackNavigator()

export const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
    )
}

const SettingStack = createStackNavigator();

export const SettingStackScreen = () => {
    return (
        <SettingStack.Navigator>
            <SettingStack.Screen name="Settings" component={Settings} 
              initialParams={{
                title: "Initial Settings"
              }}/>
        </SettingStack.Navigator>
    )
}

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Settings"
            screenOptions={(options) => {
                const route = options.route;

                // your must need to return object
                return {
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === "Home") {
                            return <FontAwesome name="home" color={color} size={size} />
                        } else if (route.name === "Settings") {
                            return <FontAwesome name="cog" color={color} size={size} />
                        } else if (route.name === "Account") {
                            return <FontAwesome name="user-circle" color={color} size={size} />
                        } else if (route.name === "Chat") {
                            return <FontAwesome name="envelope" color={color} size={size} />
                        }

                        return null
                    }
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeStackScreen}></Tab.Screen>
            <Tab.Screen name="Account" component={HomeScreen}></Tab.Screen>
            <Tab.Screen name="Chat" component={HomeScreen}
                options={{ tabBarBadge: 2 }}></Tab.Screen>
            <Tab.Screen name="Settings" component={SettingStackScreen}
                options={{
                    title: "App Settings",
                }}
                initialParams={{
                    title: "Initial Settings"
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}