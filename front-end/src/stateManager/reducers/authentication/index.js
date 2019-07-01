import * as ActionTypes from "../../actionTypes";


const InitialState  = {
    authenticated: false,
    auth_loading : false,
    loggedin_user:null
}

export default (state = InitialState, action) => {
    let newState = {...state};
    switch(action.type){
        case ActionTypes.LOGIN_REQUEST_INITIATED:

            return {
                ...newState,
                auth_loading: true
            };
            break;
        case ActionTypes.LOGIN_REQUEST_FAILED:
            console.log("LOGIN_REQUEST_FAILED")
            return {
                ...newState,
                authenticated: false
            };
            break;
        case ActionTypes.LOGIN_REQUEST_SUCCESSFULL:
            console.log("LOGIN_REQUEST_SUCCESSFULL", action.payload);
            return {
                ...newState,
                authenticated: !newState.authenticated,
                auth_loading: false,
                loggedin_user: action.payload
            }
            break;
        case ActionTypes.LOGOUT_FAILED:
            return newState
            break;
        case ActionTypes.LOGOUT_SUCCESSFULL:
            return {
                ...newState,
                authenticated: false,
                loggedin_user:null
            }
            break;
        default:
            return newState
    }
}