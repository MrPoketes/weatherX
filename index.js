/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import RNAndroidLocationEnabler from "react-native-android-location-enabler";

RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval:10000,fastInterval:5000})
    .then(data=>{
        console.log(data);
        
    })
AppRegistry.registerComponent(appName, () => App);
