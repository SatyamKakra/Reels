import React, {Component, useContext} from 'react';
import Feed from './components/Feed';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import Signup from './components/Signup';
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthContextProvider, AuthContext } from './context/AuthContext';


function App() {
  return (
    <>

      {/* which component should render on which path */}
      <AuthContextProvider>
        <Switch>


          <RedirectToFeed path="/login" comp={Login}>
        
          </RedirectToFeed>

          <RedirectToFeed path="/signup" comp={Signup}>
            
          </RedirectToFeed>

          <PrivateRoute path="/feed" comp={Feed}>
            
          </PrivateRoute>

          <PrivateRoute path="/profile" comp={Profile}>
            
          <Redirect from="/" to="/feed"></Redirect>

          </PrivateRoute>

          <Route>
            <PageNotFound></PageNotFound>
          </Route>

        </Switch>
      </AuthContextProvider>

    </>
  );
}
function PrivateRoute(props){
  console.log("private Route", props)
  let component = props.comp;
  // cheack -> are you logged in
  let cUser = useContext(AuthContext);
  //cUser -> null -> login page
  // cUser -> anything
  return(
    <Route {...props}
    render={
      (props)=>{
      //logic
      return cUser != null ? <component{...props}></component>  :
      <Redirect {...props} to="/login"></Redirect>
      }
    }>

    </Route>
  )
}
function RedirectToFeed(props){
  let component = props.comp;
  // cheack -> are you logged in
  let cUser = useContext(AuthContext);
  //cUser -> null -> login page
  // cUser -> anything
  return(
    <Route {...props}
    render={
      (props)=>{
      //logic
      return cUser != null ? <Redirect{...props} to="/feed"></Redirect>:
      <Component {...props}>

      </Component>
      }
    }>

    </Route>
  )
}

export default App;
