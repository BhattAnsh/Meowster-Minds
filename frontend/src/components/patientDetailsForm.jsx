import { useState, useEffect, React } from 'react'
import api from '../api'
import Navbar from './navbar'
import '../styles/patientDetails.css'
function DetailsForm(data_lengths) {

    // for normal details
    const [fullName, setFullName] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [gender, setGender] = useState("")
    const [address, setAddress] = useState("")
    const [userId, setUserId] = useState("")
    const p_route = 'patient/details/';
    const m_route = 'patient/medical-details/';
    const gettingUserId = () => {
        let id = document.getElementById('userId').innerHTML;
        setUserId(id);
    }
    console.log(data_lengths)
    console.log(data_lengths.d_length)
    useEffect(() => {
        gettingUserId();
    }, []);
    
    const handlePatientSubmit = async (e) => {
        e.preventDefault();
        try {

            // Ensure userId is updated before making the API call
            gettingUserId(); // Update userId state
            const res = await api.post(p_route, { fullName: fullName, phoneNo: phoneNo, Gender: gender, Address: address, id: userId });
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    // for medical history
    const [allergies, setAllergies] = useState("")
    const [pastMedicalConditions, setPastMedicalConditions] = useState("")
    const [surgicalHistory, setSurgicalHistory] = useState("")
    const [familyMedicalHistory, setFamilyMedicalHistory] = useState("")

    const handleMedicalSubmit = async (e) => {

        e.preventDefault();
        console.log(userId)
        try {
            gettingUserId(); 
            const res = await api.post(m_route, { allergies: allergies, past_medical_conditions: pastMedicalConditions, surgical_history: surgicalHistory, family_medical_history: familyMedicalHistory, user_id:userId});
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>  
            <Navbar></Navbar>
            {data_lengths.d_length === 0?<div className="form-container normal-details" id='normal-details'>
                <form onSubmit={handlePatientSubmit}>
                    <input required placeholder='Full Name' className="input" type="text" name='fullName' id='fullName' onChange={(e) => { setFullName(e.target.value) }} value={fullName} />
                    <input required  placeholder='Phone Number' className="input" type="tel" name="phoneNo" id="phoneNo" onChange={(e) => { setPhoneNo(e.target.value) }} value={phoneNo} />
                    <input required  placeholder='Gender' className="input" type="text" name="gender" id="gender" onChange={(e) => { setGender(e.target.value) }} value={gender} />
                    <input required  placeholder='Address' className="input" type="text" name="address" id="address" onChange={(e) => {setAddress(e.target.value)}} value={address}/>

                    <button type="submit" id='submit' className='submit-btn'>Submit</button>
                </form>
            </div>:<div>Already Filled</div>}

            {data_lengths.m_length === 0 ? <div className="form-container medical-details" id='medical-details'>
                <form onSubmit={handleMedicalSubmit}>
                    <input  required className="input" type="text" name='allergies' id='allergies' onChange={(e) => setAllergies(e.target.value)} value={allergies} placeholder="Allergies" />

                    <input  required className="input" type="text" name="pastMedicalConditions" id="pastMedicalConditions" onChange={(e) => setPastMedicalConditions(e.target.value)} value={pastMedicalConditions} placeholder="Past Medical Conditions" />
                    
                    <input  required className="input" type="text" name="surgicalHistory" id="surgicalHistory" onChange={(e) => setSurgicalHistory(e.target.value)} value={surgicalHistory} placeholder="Surgical History" />
                    
                    <input required  className="input" type="text" name="familyMedicalHistory" id="familyMedicalHistory" onChange={(e) => setFamilyMedicalHistory(e.target.value)} value={familyMedicalHistory} placeholder="Family Medical History" />
                    
                    <button type="submit" id='submit' className='submit-btn'>Submit</button>
                </form>
            </div> : <div>Allready Filled</div>}
            
        </>
    )
}

export default DetailsForm;