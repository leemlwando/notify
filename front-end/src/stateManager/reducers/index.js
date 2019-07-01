import { combineReducers } from "redux";
import AuthReducer from "./authentication";
import UserReducer from "./users";
import SMSReduder from "./sms";

//import reducers



const rootReducer = combineReducers({
    authentication: AuthReducer,
    user: UserReducer,
    // contacts:()=>{},
    // groups:()=>{},
    sms: SMSReduder


});

export default rootReducer;