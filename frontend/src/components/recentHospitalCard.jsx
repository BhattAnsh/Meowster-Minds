import React from 'react'
import '../styles/recentHospitals.css'
import hospitalimg from '../assets/image.png'

function RecentHospitals() {
  return (
    <>
        <div className="hospital-card-container">
            <h5 className='heading'>Recently Visited Hospitals</h5>
            <img className = "hospitalCardImage" src = {hospitalimg} alt="" />  
            <h5 className='hospital-name'>Hospital Name</h5>
            <p className='hospital-address'>Hospital Address</p>
            <div className="button-container">
                <button>Show More</button>
            </div>
        </div>
    </>
  )
}

export default RecentHospitals;