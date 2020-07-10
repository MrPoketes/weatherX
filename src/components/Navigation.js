import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import LocationScreen from "../screens/LocationScreen";
import SelectedCityScreen from "../screens/SelectedCityScreen";

const Tab = createMaterialBottomTabNavigator();
const SearchStack = createStackNavigator();

function SearchNavigation(){
    return(
        <SearchStack.Navigator initialRouteName="Search" headerMode="none">
            <SearchStack.Screen name="Selected" component={SelectedCityScreen}/>
            <SearchStack.Screen name="Search" component={SearchScreen}/>
        </SearchStack.Navigator>
    )
}

export default function Navigation(){
        return(
            <NavigationContainer>
                <Tab.Navigator
                initialRouteName="Home"
                shifting={true}
                barStyle={{backgroundColor:"lightblue"}}>
                    {/* Search Screen */}
                    <Tab.Screen name="Search" component={SearchNavigation}
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