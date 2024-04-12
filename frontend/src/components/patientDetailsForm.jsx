import { useState, useEffect, React } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'
import Navbar from './navbar'
import "../styles/details.css"
function DetailsForm() {

    // for normal details
    const [fullName, setFullName] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [gender, setGender] = useState("")
    const [address, setAddress] = useState("")
    const [route, setRoute] = useState("")
    const [userId, setUserId] = useState("")
    const [pSubmission, setPSubmission] = useState(false)
    const [mSubmission, setMSubmission] = useState(false)

    const navigate = useNavigate()
    const gettingUserId = () => {
        let id = document.getElementById('userId').innerHTML;
        setUserId(id);
    }
    
    useEffect(() => {
        gettingUserId();
    }, []);
    
    const handlePatientSubmit = async (e) => {
        e.preventDefault();
        try {
            setRoute('patient/details/');
            // Ensure userId is updated before making the API call
            gettingUserId(); // Update userId state
            const res = await api.post(route, { fullName: fullName, phoneNo: phoneNo, Gender: gender, Address: address, id: userId });
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/dashboard")
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
            setRoute('patient/medical-details/');
            gettingUserId(); 
            const res = await api.post(route, { allergies: allergies, past_medical_conditions: pastMedicalConditions, surgical_history: surgicalHistory, family_medical_history: familyMedicalHistory, user_id:userId});
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>  
            <Navbar></Navbar>
            {pSubmission === true ? <div>submission done</div> :<div className="form-container normal-details">
                <form onSubmit={handlePatientSubmit}>
                    <input placeholder='Full Name' className="input" type="text" name='fullName' id='fullName' onChange={(e) => { setFullName(e.target.value) }} value={fullName} />
                    <input placeholder='Phone Number' className="input" type="tel" name="phoneNo" id="phoneNo" onChange={(e) => { setPhoneNo(e.target.value) }} value={phoneNo} />
                    <input placeholder='Gender' className="input" type="text" name="gender" id="gender" onChange={(e) => { setGender(e.target.value) }} value={gender} />
                    <input placeholder='Address' className="input" type="text" name="address" id="address" onChange={(e) => {setAddress(e.target.value)}} value={address}/>

                    <button type="submit" id='submit' className='submit-btn'>Submit</button>
                </form>
            </div>}

            {mSubmission === true ? <div>Submission Completed</div>:<div className="form-container medical-details">
                <form onSubmit={handleMedicalSubmit}>
                    <input className="input" type="text" name='allergies' id='allergies' onChange={(e) => setAllergies(e.target.value)} value={allergies} placeholder="Allergies" />

                    <input className="input" type="text" name="pastMedicalConditions" id="pastMedicalConditions" onChange={(e) => setPastMedicalConditions(e.target.value)} value={pastMedicalConditions} placeholder="Past Medical Conditions" />
                    
                    <input className="input" type="text" name="surgicalHistory" id="surgicalHistory" onChange={(e) => setSurgicalHistory(e.target.value)} value={surgicalHistory} placeholder="Surgical History" />
                    
                    <input className="input" type="text" name="familyMedicalHistory" id="familyMedicalHistory" onChange={(e) => setFamilyMedicalHistory(e.target.value)} value={familyMedicalHistory} placeholder="Family Medical History" />
                    
                    <button type="submit" id='submit' className='submit-btn'>Submit</button>
                </form>
            </div>}
        </>
    )
}

export default DetailsForm;