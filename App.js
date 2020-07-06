import {Provider as PaperProvider} from "react-native-paper";
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {Provider as StoreProvider} from "react-redux";
import Navigation from "./src/components/Navigation";
import store from "./src/stores/configureStore";
// import Geolocation from "@react-native-community/geolocation";

export default class App extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    // Geolocation.getCurrentPosition(info=>console.log(info));
  }
  render(){
    return (
      <StoreProvider store={store}>
        <PaperProvider style={styles}>
            <Navigation/>
        </PaperProvider>
      </StoreProvider>
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
