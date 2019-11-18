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
            .post('http://localhost:4000/signup')
            .send(data)
            .then(res => {
                const action = signedup(res.body)
                dispatch(action)
            })
            .catch(err => console.log(err))
}