import * as ActionTypes from "../../actionTypes";

const initialUserState = {
    isFetching: false,
    isError: false,
    isSuccess: false,
    currentDefault: {
        first_name:"",
        last_name:"",
        other_names:"",
        email:"",
        address:"",
        location:null
    },
    accountUsers:null

}


export default (state = initialUserState, action) => {
    console.log("Reducer", action)
    let newState = {...state}
    let payload = action.payload || {};
    switch(action.type){
        case ActionTypes.FETCH_USER_INITIATED:
            return {
                ...newState,
                isFetching :true
            }
            break;
        case ActionTypes.Fecth_USER_SUCCESS:
            return {
                ...newState,
                isFetching :false,
                isSuccess: true,
                currentDefault:{
                    first_name: payload.first_name,
                    last_name:  payload.last_name,
                    other_names: payload.other_names,
                    email: payload.email,
                    address: payload.address,
                    location:payload.location
                }
            }
            break;
        case ActionTypes.FETCH_USER_ERROR:
            return {
                ...newState,
                isFetching: false,
                isError: true
            }
            break;
        default:
        return newState;
    }
}