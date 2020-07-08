import React, { Component } from "react";
import {View,Text} from "react-native";
import SearchBar from "../components/Search/SearchBar";
import * as rapidApi from "../../rapidApi.json";

let searchResults = {};

export default class SearchScreen extends Component{
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
    }
    search(query){
    }
    render(){
        return(
            <View style={{flex:1,alignItems:"center",backgroundColor:"lightgray"}}>
                <SearchBar search={this.search}/>
                {Object.keys(searchResults).length !==0?
                <View>
                    {searchResults.data.map((data,i)=>
                        <Text>{data.city}</Text>
                    )}
                </View>:
                <View>
                    <Text>Not Found</Text>
                </View>  
            }
            </View>
        )
    }
}