import React from 'react'



function SearchBar () {



    return(
        <div className="searchBar">
            <input className="findInput" placeholder="Find a repository..."></input>
            <button className="btn">Type: All</button>
            <button className="btn">Language: All</button>
            


        </div>
    )
}

export default SearchBar