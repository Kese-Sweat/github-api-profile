import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"              
import axios from "axios"

const PROFILE_ACTION = "myProfile/PROFILE_ACTION"

const initialState = {
    myProfile: "profile",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_ACTION:
            return { ...state, myProfile: action.payload } // This is returning a new state of the app
        default:
            return state // Make sure to return the state of the app after return a new state

    }
}

function getRepos() { // this will be a async action
    return dispatch => {
        axios.get('https://api.github.com/users/thomas1117/repos').then(resp =>{
            dispatch({
                type: PROFILE_ACTION,
                payload: resp.data
            })
        })
    }
}

export function useProfile (){
    const dispatch = useDispatch()
    const myProfile = useSelector(appState => appState.profileState.myProfile)

    const getRepos = () => dispatch(getRepos())

    useEffect(() => {
        
      }, [])

    return { getRepos }

}