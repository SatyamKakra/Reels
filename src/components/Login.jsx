import React, { useState } from 'react'
import {auth} from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const trackEmail = function (e) {
    setEmail(e.target.value);
  }

  const trackPassword = function (e) {
    setPassword(e.target.value);
  }

  const printDetails = async function (e) {
    alert(email + " " + password);
    
    let userCred = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCred.user);
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


  return (
    <div>
      <input type="email" onChange={trackEmail} value={email} placeholder="email"></input>
      <br></br>
      <input type="password" onChange={trackPassword} value={password} placeholder="password"></input>
      <br></br>
      <button type='click' onClick={printDetails}>Login</button>
    </div>
  )
}

export default Login