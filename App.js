import {Provider as PaperProvider, Button} from "react-native-paper";
import React, { Component } from 'react';
import { StyleSheet, View,PermissionsAndroid } from 'react-native';
import {Provider as StoreProvider} from "react-redux";
import Navigation from "./src/components/Navigation";
import store from "./src/stores/configureStore";
import {Permission, PERMISSION_TYPE} from "./AppPermissions";
import HomeScreen from "./src/screens/HomeScreen";

export default class App extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    Permission.checkPermission(PERMISSION_TYPE.location);
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
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
