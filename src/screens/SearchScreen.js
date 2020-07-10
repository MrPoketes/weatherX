import React, { Component } from "react";
import {View} from "react-native";
import SearchBar from "../components/Search/SearchBar";
import {List} from "react-native-paper";
import * as rapidApi from "../../rapidApi.json";

export default class SearchScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            searchResults:{}
        }
        this.search = this.search.bind(this);
    }
    componentWillUnmount(){
        this.setState({
            searchResults:{}
        })
    }
    search(query){
        if(query.length>3){
            fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=5&namePrefix=${query}`,{
                method:"GET",
                headers:{
                    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
                    "x-rapidapi-key":rapidApi["x-rapidapi-key"]
                }
            })
            .then(res=>res.json())
            .then(data=>{
                let info = [];
                for(var i=0;i!==data.data.length;i++){
                    let infoObj = {};
                    infoObj = Object.assign({},infoObj,{
                        city:data.data[i].city,
                        country:data.data[i].country,
                        region:data.data[i].regionCode
                    })
                    info.push(infoObj);
                }
                let results = {}
                results = Object.assign({},results,{
                    data:info
                })
                this.setState({
                    searchResults:results
                })
            })
        }
    }
    render(){
        return(
            <View style={{flex:1,alignItems:"center",backgroundColor:"lightgray"}}>
                <SearchBar search={this.search}/>
                {Object.keys(this.state.searchResults).length !==0?
                <View style={{width:"100%"}}>
                    {this.state.searchResults.data.map((data,i)=>
                        <List.Item key={i} onPress={()=>this.props.navigation.navigate('Selected',{
                            name:data.city,
                            country:data.country,
                            region:data.region
                        })} title={data.city} description={data.country +" "+ data.region} left={props=>
                            <List.Icon style={{margin:0,marginTop:"1%"}} icon="equal"/>}/>                      
                    )}
                </View>:
                <View style={{width:"100%"}}>
                </View>  
            }
            </View>
        )
    }
}