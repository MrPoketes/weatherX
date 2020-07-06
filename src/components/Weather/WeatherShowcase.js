import React from "react";
import {View,Text,Image,StyleSheet} from "react-native";

const WeatherShowcase = ({cityName,image,temp,feelsLike,description})=>{
    description = description.charAt(0).toUpperCase()+description.slice(1);
    return(
        <View style={{flex:1,marginTop:"-15%"}}>
            <View style={{flexDirection:"row",marginTop:"30%"}}>
                <Text style={{fontSize:36}}>{cityName} </Text>
            </View>
            <View>
                <Image style={styles.image} source={{uri:`http://openweathermap.org/img/wn/${image}@2x.png`}}/>
                <Text style={styles.temperature}>{temp}C</Text>
            </View>
            <View>
                <Text style={styles.tempFeels}>Feels like {Math.round(feelsLike)}</Text>
                <Text style={styles.desc}>{description}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        width:100,
        height:100,
        marginBottom:"-10%",
        alignSelf:"center",
    },
    temperature:{
        fontSize:30,
        textAlign:"center",
        marginBottom:"5%"
    },
    tempFeels:{
        textAlign:"center",
        fontSize:20,
        marginTop:"2%",
        marginBottom:"2%"
    },
    desc:{
        textAlign:"center",
        fontSize:16
    }
})
export default WeatherShowcase;