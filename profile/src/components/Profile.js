import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Nav from './Nav'


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
    <div>
    
    <h1>{user.name}</h1>
    <span>{user.login}</span>
    <button>Follow</button>
    <span>{user.location}</span>
    
    
        
    </div>

        
    )
}

export default Profile