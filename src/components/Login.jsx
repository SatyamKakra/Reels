import React, { useState, useEffect } from 'react'
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [user, setUser] = useState(null);
  let [loader, setLoader] = useState(false);
  let [error, setError] = useState("");
 

  const trackEmail = function (e) {
    setEmail(e.target.value);
  }

  const trackPassword = function (e) {
    setPassword(e.target.value);
  }

  const printDetails = async function (e) {
    // alert(email + " " + password);
    try {

      setLoader(true);
      let userCred = await signInWithEmailAndPassword(auth, email, password)
      // console.log(userCred.user);
      setUser(userCred.user);
    } catch (err) {
      setError(err.message);
      // after some time -> error message remove
      setTimeout(() => {
        setError("")
      }, 2000)
    }
    setLoader(false);

    //     .then((userCredential) => {
    //       // Signed in
    //       var user = userCredential.user;
    //       // ...
    //     })
    //     .catch((error) => {
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //     });

  }
  const signout = async function () {
    await signOut(auth);
    setUser(null);
  }


  useEffect(() => {
    // aake call ho gya hai
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
      }
      
    });
  }, []);

  

  return (
    <>

      {
        // maiLoader==true?<h1>Page Loading...</h1>:
        error != "" ? <h1>Error is {error}</h1> :
          loader == true ? <h1>...Loading</h1> :
            user != null ?

              <>
                <button onClick={signout}>Signout</button>
                <h1>user is {user.uid}</h1>
              </>
              :
              <>
                <input type="email" onChange={trackEmail} value={email} placeholder="email"></input>
                <br></br>
                <input type="password" onChange={trackPassword} value={password} placeholder="password"></input>
                <br></br>
                <button type='click' onClick={printDetails}>Login</button>
              </>

      }
    </>
  )
}

export default Login