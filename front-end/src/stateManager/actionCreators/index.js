import * as ActionTypes from "../actionTypes";
import axios from "axios";

const url = "http://localhost:3000/api/v1/login"

export const loginUser = (userDetails)=>{
    return async (dispatch) => {
        dispatch(loginRequestInitiated());
            console.log("user details", userDetails);
           await fetch(`${url}`,{
               crossDomain: true,
               method: "POST",
               headers: {
                   "Content-Type":"application/json"
                
                },
               body: JSON.stringify(userDetails)
           }).then(res => res.json())
           .then(async response => {
                // console.log(response.success);

                if(!response.success){
                    dispatch(loginRequestFailed());
                    userDetails.history.push("/auth/login");
                    return;
                }
                console.log("payload",response.payload)
               dispatch(loginRequestSuccessfull(response.payload));  

               await saveLoginToken(response.payload.token);

               userDetails.history.push("/admin/index");

          

           }).catch(error=>{
               console.log(error)
            dispatch(loginRequestFailed())
           });
    }
}


export const registerUser = (userDetails)=>{
    return {
        type: ActionTypes.USER_REGISTRATION,
        payload: userDetails
    }
}


export const fetchUser = (token, history) =>{
    let url = "http://localhost:3000/api/v1/users";
    return async dispatch => {
            dispatch(fetchingUserInitiated());
            await fetch(url,{
                headers :{
                    "Authorization":"Bearer "+ JSON.parse(token),
                    "Content-Type":"application/json"
                }
            })
                .then(res => res.json())
                    .then(response => {
                        console.log("response",response.success)
                        response.success ? dispatch(fetchUserSuccess(response.payload)): dispatch(fetchUserError())
                    })
                    .catch(error => {
                        dispatch(fetchUserError());
                    })
    }
}


export const logoutUser = (history) => {
   return async dispatch =>{
       try {
            await localStorage.removeItem("user");
            await dispatch(logoutUserSuccessfully());
            history.push("/auth/login");
       } catch (error) {
            await dispatch(logoutUserFailed());
            history.push("/admin/index");
       }
      
   }
}

/**
 * SMS PROCESSING
 */

export const fetchSMSBalance = (token, history) => {
    let url = "http://localhost:3000/api/v1/smsbalance"
    return async dispatch => {

        dispatch(fetchSMSBalanceInitiated());

        fetch(url,{
            headers :{
                "Authorization":"Bearer "+ JSON.parse(token),
                "Content-Type":"application/json"
            }
        })
            .then(res => res.json())
                .then(response => {
                    response.success ? dispatch(fetchSMSBalanceSuccess(response.payload)) : dispatch(fetchSMSBalanceError());
                }).catch(error => {
                    dispatch(fetchSMSBalanceError());
                });
    }
}

export const fetchSMSHistory = (token, history) => {
    let url = "http://localhost:3000/api/v1/smshistory";
    return async dispatch => {

        dispatch(fetchSMSHistoryInitiated());

       await fetch(url,{
        headers :{
            "Authorization":"Bearer "+ JSON.parse(token),
            "Content-Type":"application/json"
        }
       })
            .then(res => res.json())
                .then(response => {
                    console.log("response history", response);
                    response.success ? dispatch(fetchSMSHistorySuccess(response.payload)) : dispatch(fetchSMSHistoryError());
                }).catch(error => {
                    console.log("response eroror", error);
                    dispatch(fetchSMSHistoryError());
                });
    }
}

export const fetchSMSSchedules = (token, history) => {
    let url = "http://localhost:3000/api/v1/schedules"
    return async dispatch => {

        dispatch(fetchSMSSchuduleInitiated());

        fetch(url, {
            headers :{
                "Authorization":"Bearer "+ JSON.parse(token),
                "Content-Type":"application/json"
            }
        })
            .then(res => res.json())
                .then(response => {
                    response.success ? dispatch(fetchSMSScheduleSuccess(response.payload)) : dispatch(fetchSMSSchduleError());
                }).catch(error => {
                    dispatch(fetchSMSSchduleError());
                });
    }
}



/**
 * HELPER FUNCTIONS
 */

 function loginRequestFailed(){return {type: ActionTypes.LOGIN_REQUEST_FAILED}};

 function loginRequestSuccessfull(user){
    //  console.log("successfull...", user)
     return {type: ActionTypes.LOGIN_REQUEST_SUCCESSFULL,  payload:{...user,token:null}}
 }

 function loginRequestInitiated(){return {type: ActionTypes.LOGIN_REQUEST_INITIATED}}

 async function saveLoginToken(token){
    //  console.log("token...", token)
    await localStorage.setItem('user',JSON.stringify(token));
    //  console.log("token",localStorage.getItem("user"));
     return;
 }

function logoutUserSuccessfully(){return {type: ActionTypes.LOGOUT_SUCCESSFULL}}

function logoutUserFailed(){return {type: ActionTypes.LOGOUT_FAILED}}

function fetchUserError(){
    // console.log("error")
    return {type: ActionTypes.FETCH_USER_ERROR}};
function fetchUserSuccess(payload){
    // console.log("<payload>..", payload)
    return {type: ActionTypes.Fecth_USER_SUCCESS, payload: payload}};
function fetchingUserInitiated(){return {type: ActionTypes.FETCH_USER_INITIATED}};

// function loginRequest(){return {type:ActionTypes.LOGIN_REQUEST}};

function fetchSMSBalanceInitiated(){return {type: ActionTypes.FETCH_SMS_BALANCE_INITIATED}}
function fetchSMSBalanceSuccess(payload){return {type: ActionTypes.FETCH_SMS_BALANCE_SUCCESSFULL, payload: payload}}
function fetchSMSBalanceError(){return {type: ActionTypes.FETCH_SMS_BALANCE_ERROR}}

function fetchSMSHistoryInitiated(){return {type: ActionTypes.FETCH_SMS_HISTORY_INITIATED}}
function fetchSMSHistorySuccess(payload){return {type: ActionTypes.FETCH_SMS_HISTORY_SUCCESSFUL, payload: payload}}
function fetchSMSHistoryError(){return {type: ActionTypes.FETCH_SMS_HISTORY_ERROR}}

function fetchSMSSchuduleInitiated(){return {type: ActionTypes.FETCH_SMS_SCHEDULE_INITIATED}}
function fetchSMSScheduleSuccess(payload){return {type: ActionTypes.FETCH_SMS_SCHEDULE_SUCCESSFULL, payload: payload}}
function fetchSMSSchduleError(){return {type: ActionTypes.FETCH_SMS_SCHEDULE_ERROR}}