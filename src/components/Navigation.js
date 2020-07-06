import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import LocationScreen from "./screens/LocationScreen";

const Tab = createMaterialBottomTabNavigator();
export default function Navigation(){
        return(
            <NavigationContainer>
                <Tab.Navigator
                initialRouteName="Home"
                shifting={true}
                barStyle={{backgroundColor:"lightblue"}}>
                    {/* Search Screen */}
                    <Tab.Screen name="Search" component={SearchScreen}
                    options={{
                        tabBarLabel:"Search",
                        tabBarIcon: ()=>(
                            <MaterialCommunityIcons name="magnify" color="white" size={26}/>
                        ),
                        tabBarColor:"blue"
                    }}/>
                    {/* Home Screen */}
                    <Tab.Screen name="Home" component={HomeScreen} 
                    options={{
                        tabBarLabel:"Home",
                        tabBarIcon: ()=>(
                            <MaterialCommunityIcons name="home" color="white" size={26}/>
                        ),
                        tabBarColor:"lightblue"
                    }}/>
                    {/* Locations Screen */}
                    <Tab.Screen name="Locations" component={LocationScreen}
                    options={{
                        tabBarLabel:"Locations",
                        tabBarIcon: ()=>(
                            <MaterialCommunityIcons name="crosshairs-gps" color="white" size={26}/>
                        ),
                        tabBarColor:"gray"
                    }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        )
}