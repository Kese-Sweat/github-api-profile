import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useProfile } from "../hooks/profile"





function Respositories ()  {
    const {getRepos} = useProfile()
    console.log(getRepos)

    

    

return(<div>
    

</div>


)

}

export default Respositories