import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import { CustomCard } from './components/customCard';
import HospitalsData from '../../../database/hospitals.json';

function HospitalsList() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    setHospitals(HospitalsData);
  }, []); // Add dependency array to ensure this runs only once

  return (
    <>
      <Navbar />
        <center><h1 className='text-6xl p-10'>Hospitals Near You</h1></center>
      <div className='p-10 flex flex-col gap-10'>
        {hospitals.map((hospital, index) => ( // Use => instead of =
          <CustomCard 
            key={index} 
            name={hospital.hospital.name} 
            location={hospital.hospital.location.address} 
            phone={hospital.hospital.contact_information.phone_number}
            email={hospital.hospital.contact_information.email}
            website={hospital.hospital.contact_information.website}
          />
        ))}
      </div>
    </>
  );
}

export default HospitalsList;
