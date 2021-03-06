import React from 'react';
import SearchBar from './SearchBar';
import Respositories from './Repos';




function navBar () {


    return(
        <div className="nav">
            <ul className="navBar">
                <li className="navLi">Overview</li>
                <li className="navLi">Projects</li>
                <li className="navLi">Project</li>
                <li className="navLi">Packages</li>
                <li className="navLi">Stars</li>
                <li className="navLi">Followers</li>
                <li className="navLi">Following</li>
            </ul>
            <SearchBar />
            <Respositories />
            


        </div>


    )
}

export default navBar