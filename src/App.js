import React, {useContext} from 'react';
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


          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/signup">
            <Signup></Signup>
          </Route>

          <PrivateRoute path="/feed" comp={<Feed></Feed>}>
            
          </PrivateRoute>

          <PrivateRoute path="/profile" comp={<Profile></Profile>}>
            
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
      return cUser != null ? <component{...props}></component>  :<Redirect to="/login"></Redirect>
      }
    }>

    </Route>
  )
}

export default App;
