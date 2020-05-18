import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";



function SearchBar () {



    return(
        <div className="searchBar">
            <input className="findInput" placeholder="Find a repository..."></input>
            <button className="btn">Type: All<TiArrowSortedDown/></button>
            <button className="btn">Language: All <TiArrowSortedDown/></button>
            


        </div>
    )
}

export default SearchBar