import React,{useState} from "react";
import {Searchbar} from "react-native-paper";

const SearchBar = ({search})=>{
    const [searchQuery,setSearchQuery] = useState('');

    const onChangeSearch = query =>{
        setSearchQuery(query);
        search(query);
    }

    return(
        <Searchbar
            placeholder="Search"
            searchAccessibilityLabel="Search bar"
            onChangeText = {onChangeSearch}
            value={searchQuery}
        />
    )
}
export default SearchBar