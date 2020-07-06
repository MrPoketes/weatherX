import React, { Component } from "react";
import {Text,View,Image} from "react-native";
import {connect} from "react-redux";
import {fetchWeatherData} from "../actions/index.js";
import * as apiKey from '../../apiKey.json';
import Geolocation from "@react-native-community/geolocation";
import WeatherShowcase from "../components/Weather/WeatherShowcase";
// Global variables

var latitude = null;
var longitude = null;
// Getting the location
Geolocation.getCurrentPosition((info)=>{
  latitude = info.coords.latitude
  longitude = info.coords.longitude
});

class HomeScreen extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if(latitude!==null && longitude!==null){
            this.props.fetchWeatherData(latitude,longitude,apiKey.apiKey);
        }
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"lightgray"}}>
                {this.props.weatherData?
                    <WeatherShowcase cityName={this.props.weatherData.cityName} image={this.props.weatherData.weather.icon} temp={this.props.weatherData.weather.temp} feelsLike={this.props.weatherData.weather.feelsLike} description={this.props.weatherData.weather.description}/>:<Text>This is Home</Text>    
            }
            </View>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        weatherData:state.data.weather
    }
}
const mapDispatchToProps = {
    fetchWeatherData,
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
