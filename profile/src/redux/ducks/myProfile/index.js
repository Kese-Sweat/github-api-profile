import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"              
import axios from "axios"

const GET_REPOS = "myProfile/GET_REPOS"

const initialState = {
    repos: [],
    profile: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_REPOS:
            return { ...state, repos: action.payload } // This is returning a new state of the app
        default:
            return state // Make sure to return the state of the app after return a new state

    }
}

function getReposData() { // this will be a async action
    return dispatch => {
        axios.get('https://api.github.com/users/thomas1117/repos').then(resp =>{
            dispatch({
                type: GET_REPOS,
                payload: resp.data
            })
        })
    }
}

export function useProfile () {
    const dispatch = useDispatch()
    const repos = useSelector(appState => appState.profileState.repos)

    const getRepos = () => dispatch(getReposData())

   

    return { getRepos, repos }

}