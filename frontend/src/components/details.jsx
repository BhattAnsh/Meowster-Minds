import React, { useState, useEffect } from 'react';
import api from '../api.js';
import Navbar from './navbar.jsx';
import ProfileCard from './profileCard.jsx';
import RecentHospitals from './recentHospitalCard.jsx';
import Loading from './loading.jsx';
import '../styles/details.css'

function Details() {
  const [loading, setLoading] = useState(true);
  const [userBasic, setUserBasic] = useState({});
  const [userMedical, setUserMedical] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [basicRes, medicalRes] = await Promise.all([
          api.get("patient/details"),
          api.get("patient/medical-details")
        ]);
        setUserBasic(basicRes.data);
        setUserMedical(medicalRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    console.log(userBasic)
  }, []);

  return (
    <>
    <div>
      
    </div>
      <Navbar />
      <div className='details-container'>
        {loading ?<Loading></Loading>: (
          <>
            <div className='cards-container'>
              <ProfileCard Name = {userBasic[0].fullName} Location = "Your Location"/>
              <RecentHospitals/>
            </div>
            <div className='patient-details-container'>
              <h1>Your Details</h1>
              <div className="details-info">
                <p><strong className='bold'>Name:</strong> {userBasic[0].fullName}</p>
                <p><strong className='bold'>Phone Number:</strong> {userBasic[0].phoneNo}</p>
                <p><strong className='bold'>Address:</strong> {userBasic[0].houseNo + ', ' + userBasic[0].area + ','+ userBasic[0].postalCode}</p>
                <p><strong className='bold'>Gender:</strong> {userBasic[0].gender}</p>
                <p><strong className='bold'>Allergies:</strong> {userMedical[0].allergies}</p>
                <p><strong className='bold'>Past Medical Records:</strong> {userMedical[0].past_medical_conditions}</p>
                <p><strong className='bold'>Surgical History:</strong> {userMedical[0].surgical_history}</p>
                <p><strong className='bold'>Family Medical History:</strong> {userMedical[0].family_medical_history}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Details;
