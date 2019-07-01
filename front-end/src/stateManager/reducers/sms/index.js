import * as ActionTypes from "../../actionTypes";

const InitialState  = {
    history:{
        payload: [],
        isFetching: false,
        isFetchingError: false
    },
    balance:{
        payload: [],
        isFetching: false,
        isFetchingError: false
    },
    schedules:{
        payload: [],
        isFetching: false,
        isFetchingError: false
    }
}

export default (state = InitialState, action) => {
    let newState = {...state};
    let payload = action.payload || {};
    console.log("state-------------", newState, action )
    switch(action.type){
        case ActionTypes.FETCH_SMS_HISTORY_INITIATED:
            return {
                ...newState,
                history:{
                    ...newState.history,
                    payload:null,
                    isFetching: true,
                }
            }
            break;
        case ActionTypes.FETCH_SMS_HISTORY_ERROR:
            return {
                ...newState,
                history:{
                    ...newState.history,
                    isFetching: false,
                    isFetchingError: true
                }
            }
            break;
        case ActionTypes.FETCH_SMS_HISTORY_SUCCESSFUL:
            return {
                ...newState,
                history:{
                    ...newState.history,
                    isFetching:false,
                    isFetchingError: false,
                    payload: payload
                }
            }
            break;
        case ActionTypes.FETCH_SMS_SCHEDULE_INITIATED:
            return {
                ...newState,
                schedules:{
                    ...newState.schedules,
                    isFetching: true,
                }
            }
            break;
        case ActionTypes.FETCH_SMS_SCHEDULE_ERROR:
            return {
                ...newState,
                schedules:{
                    ...newState.schedules,
                    isFetching:false,
                    isFetchingError: true
                }
            }
            break;
        case ActionTypes.FETCH_SMS_SCHEDULE_SUCCESSFULL:
            return {
                ...newState,
                schedules:{
                    ...newState.schedules,
                    isFetching:false,
                    isFetchingError:false,
                    payload: payload
                }
            }
            break;
        case ActionTypes.FETCH_SMS_BALANCE_INITIATED:
            return {
                ...newState,
                balance:{
                    ...newState.balance,
                    isFetching: true,
                }
            }
            break;
        case ActionTypes.FETCH_SMS_BALANCE_ERROR:
            return {
                ...newState,
                balance:{
                    ...newState.balance,
                    isFetching:false,
                    isFetchingError: true
                }
            }
            break;
        case ActionTypes.FETCH_SMS_BALANCE_SUCCESSFULL:
            return {
                ...newState,
                balance:{
                    ...newState.balance,
                    isFetching:false,
                    isFetchingError:false,
                    payload: payload
                }
                
            }
            break;
        default:
            return newState
    }
}