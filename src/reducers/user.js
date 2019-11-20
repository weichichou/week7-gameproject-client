import {SIGNEDUP, LOGGEDIN} from '../action/user';

export default (state=null, action={}) =>{
    switch (action.type){
        case SIGNEDUP:
            return action.payload
        case LOGGEDIN:
            return action.payload
        //case 'CLICKCARD':
          //  return action.payload
        default:
            return state
    }
}