import React, {useEffect, useState} from 'react'
import "./profile.css"
import { useContext } from 'react'
import {AuthContext} from "../context/AuthContext";
import { db } from "../firebase";

function Profile() {
  let contextObj = useContext(AuthContext);
  let [loading, setLoading] = useState("");

  useEffect((function fn (){
    (async function(){

      const docRef = doc(db, "user", cUser.uid);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());}
  })()
  })(),[cUser]);
  
  return (
    <>
    {contextObj.cUser==null?<div>Need to Login</div>:
    <div>Logged in user {contextObj.cUser.uid}</div>
    // loading == true ? <div>getting data</div>:

    // <>
    // <div className="header"></div>
    // <div className="main">
    
    // <div className="pimg_container">
    
    // <img src="https://loremflickr.com/640/360
    // " alt="" className="pimg" />
    // </div>
    // <div className="details">
    // <div className="content">Satyam</div>
    // <div className="content">No Of Posts: <span className="bold_text">Posts</span></div>
    // <div className="content">Email <span className="bold_text">Email.com</span></div>
    // </div>
    // </div>
    // </>    
}
</>
   
    )
}

export default Profile