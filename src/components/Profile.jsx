import React from 'react'
import "./profile.css"

function Profile() {
  return (
    <>
    <div className="header"></div>
    <div className="main">

    <div className="pimg_container">

    <img src="https://loremflickr.com/640/360
" alt="" className="pimg" />
    </div>
    <div className="details">
    <div className="content">Satyam</div>
    <div className="content">No Of Posts: <span className="bold_text">Posts</span></div>
    <div className="content">Email <span className="bold_text">Email.com</span></div>
    </div>
</div>
    </>
  )
}

export default Profile