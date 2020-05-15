import React, { useState, useEffect } from "react"
import axios from 'axios'

function Respositories ()  {
    const [repos, getRepos] = useState ([{name: ''}])

    useEffect (() => {
    axios.get('https://api.github.com/users/thomas1117/repos').then(resp =>{
        getRepos(resp.data)
        
    })
    }, [])

return(<div>
    <ul>
     {repos.map( item =>{ 
        return <li >{item.name}</li>

        })}

    </ul>


</div>


)

}

export default Respositories