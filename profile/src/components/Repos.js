import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useProfile } from "../hooks/profile"





function Respositories ()  {
    const {getRepos, repos} = useProfile()
    console.log(repos)

    useEffect(() => {
        getRepos()
    }, [])

    

    

return(<div>
    

</div>


)

}

export default Respositories