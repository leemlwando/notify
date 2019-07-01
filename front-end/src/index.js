import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./stateManager/store";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";
import LoginAuth from "./views/examples/Login"
import Login from "./views/examples/Login";
import Register from "./views/examples/Register";

// class App extends React.Component{
//   render(){
//     return (
       
//     )
//   }
// }

ReactDOM.render(
      <Provider store={store}>
              <BrowserRouter>
                    <Switch>
                        {/* {
                          localStorage.getItem("user") ? <Route path="/admin" render={props => (<AdminLayout {...props} />)} /> : 
                          <Route path="/auth/login" render={props => <Login {...props} />} />
                        } */}
                      <Route path="/admin" render={props => (
                        localStorage.getItem('user') ? <AdminLayout {...props} /> : props.history.push("/auth/login")
                      )} />



                    {/* <Route path="/auth" render={props => (<AuthLayout {...props} />)} /> */}
                    <Route path="/auth/login" component={Login}/>
                    <Route path="/auth/register" component={Register}/>

                      <Redirect from="/" to="/admin/index" />
                    </Switch>
                  </BrowserRouter>
      </Provider>,
  document.getElementById("root")
);
