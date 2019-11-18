import {SIGNEDUP} from '../action/user';

export default (state=null, action={}) =>{
    switch (action.type){
        case SIGNEDUP:
            return action.payload
        default:
            return state
    }
}