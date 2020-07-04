import { StatusBar } from 'expo-status-bar';
import {Provider as PaperProvider} from "react-native-paper";
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {Provider as StoreProvider} from "react-redux";
import Navigation from "./src/components/Navigation";

export default class App extends Component{
  render(){
    return (
      // <StoreProvider>
        <PaperProvider style={styles}>
            <Navigation/>
        </PaperProvider>
      // </StoreProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
