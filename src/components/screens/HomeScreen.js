import React, { Component } from "react";
import {Text,View} from "react-native";
import {connect} from "react-redux";
import {fetchWeatherData} from "../../actions/index.js";
// import * as apiKey from '../../../apiKey.json';

class HomeScreen extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // this.props.fetchWeatherData("Vilnius",apiKey.apiKey);
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text>This is home</Text>
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
