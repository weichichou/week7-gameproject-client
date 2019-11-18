import {url} from '../constant'

import superagent from 'superagent'

export const SIGNEDUP = 'SIGNEDUP'

function signedup(user){
    return {
        type: SIGNEDUP,
        payload: user
    }
}

export const signup = data => dispatch => {
    superagent
            .post(`${url}/signup`)
            .send(data)
            .then(res => {
                const action = signedup(res.body)
                dispatch(action)
            })
            .catch(err => console.log(err))
}

export const LOGGEDIN = 'LOGGEDIN'

function loggedin(user){
    return {
        type: LOGGEDIN,
        payload: user
    }
}

export const login = data => dispatch => {
    superagent
            .post(`${url}/login`)
            .send(data)
            .then(res => {
                const action = loggedin(res.body)
                dispatch(action)
                console.log('login res.body',res.body)
            })
            .catch(err => console.log(err))
} 