import React from "react";
import {Text,View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";

const Tab = createMaterialBottomTabNavigator();
export default function Navigation(){
        return(
            <NavigationContainer>
                <Tab.Navigator
                initialRouteName="Home"
                shifting={true}
                barStyle={{backgroundColor:"lightblue"}}>
                    <Tab.Screen name="Home" component={HomeScreen} 
                    options={{
                        tabBarLabel:"Home",
                        tabBarIcon: ()=>{
                            <MaterialCommunityIcons icon="home" color="red" size={26}/>
                        },
                        tabBarColor:"lightblue"
                    }}/>
                    <Tab.Screen name="Search" component={SearchScreen}
                    options={{
                        tabBarLabel:"Search",
                        tabBarColor:"blue"
                    }}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
}