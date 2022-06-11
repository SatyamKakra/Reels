import React from 'react';
import "./feed.css";

function Feed() {
  return (
    <>
      <div className="header">
        <img src="
        https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png
        " alt="" className="insta_img" />
     
      <img src="https://media-exp2.licdn.com/dms/image/C4E03AQGwZ5l_z5sA2Q/profile-displayphoto-shrink_200_200/0/1646319637527?e=1660176000&v=beta&t=ATbHFGoXT9vE7IYLFeRkhOjS5PqI_h0nmE56YFN95T8" alt=""  className='profile_img'/>
    </div>
    <div className="main_continer">
        <div className="upload_container">
          <i 
            className="movie_icon fa-solid fa-clapperboard"
          ></i>
          <div className="upload_text">UPLOAD</div>
        </div>
        <div className="reels_container">Reels</div>
      </div>
    </>
  )
}
export default Feed;