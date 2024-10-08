import React from 'react';
import '../styles/profileCard.css'
function ProfileCard({Name, Location}) {
  return (
    <>
    <div className='profile-container'>
        <div className="basic-details">
            <img src="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png" alt=""/> 
            <h3>{Name}</h3>
            <div>Edit your Profile</div>
        </div>
        <div className="bottom-container">
          <div>
            <hr className='hr' />
          </div>
          <div className='location-container'>
            <p>From</p>
            <p>{Location}</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default ProfileCard;