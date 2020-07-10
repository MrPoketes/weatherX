import React, { Component } from "react";
import {Text,View} from "react-native";
import {connect} from "react-redux";
import {fetchWeatherDataByName} from "../actions/index.js";
import * as apiKey from "../../apiKey.json";
import WeatherShowcase from "../components/Weather/WeatherShowcase";
import {Button} from "react-native-paper";

class SelectedCityScreen extends Component{
    constructor(props){
        super(props);
        this.handleSave = this.handleSave.bind(this);
    }
    componentDidMount(){
        this.props.fetchWeatherDataByName(this.props.route.params.name,apiKey.apiKey);
    }
    handleSave(){
        console.log("Have to work on this still");
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"lightgray"}}>
                {this.props.weather?
                    <View style={{marginTop:"5%"}}>
                        <Button style={{marginBottom:"2%"}} icon="plus" mode="outlined" compact={true} onPress={this.handleSave}>Save</Button>
                        <WeatherShowcase cityName={this.props.weather.cityName} image={this.props.weather.weather.icon} temp={this.props.weather.weather.temp} feelsLike={this.props.weather.weather.feelsLike} description={this.props.weather.weather.description}/>
                    </View>:<Text>This is Home</Text>    
            }
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        weather:state.data.weatherByName
    }
}
const mapDispatchToProps = {
    fetchWeatherDataByName,
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectedCityScreen);