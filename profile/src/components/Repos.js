import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useProfile } from "../hooks/profile"
import { AiFillStar } from 'react-icons/ai'





function Respositories ()  {
    const {getRepos, repos} = useProfile()
    console.log(repos)

    useEffect(() => {
        getRepos()
    }, [])

    

    

return(<div>
    <ul>
    {repos.map(item => {
        return <div className="repoItems">
            <li className="repoList">
                <div>
            <h3 key={item.name} onClick={() => getRepos(item.html_url)}>{item.name}</h3>
            <span className="language">{item.language}</span>
            </div>
        <div>
            <button className="starButton"><AiFillStar/>Star</button>
        </div>

            </li>
        </div>
        

        
    
    })}
    </ul>

</div>


)

}

export default Respositories