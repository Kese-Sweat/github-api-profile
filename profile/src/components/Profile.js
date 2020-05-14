import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Nav from './Nav'
import { GoLocation } from "react-icons/go";


function Profile () {
    const [user, setUser] = useState({})
    console.log(user)

    useEffect(() => {
        axios.get('https://api.github.com/users/thomas1117').then(resp =>{
            setUser(resp.data)
        console.log(resp.data)
    })

   }, [])

    return(
    <div className="profileSection">
        
    <img className="avatar" src="https://avatars1.githubusercontent.com/u/14916684?s=460&u=a7b8de4a2e3cb7dea34cfd0edab98ea35c0c11a9&v=4"></img>


    <h1 className="avatarName">{user.name}</h1>
    <span className="userName">{user.login}</span>
    <ul>
     <li><button className="followBtn">Follow</button></li>
     <li className="location"><GoLocation />{user.location}</li>
    </ul>
    <span className="reportUser">Block or report user</span>
    
    
        
    </div>

        
    )
}

export default Profile