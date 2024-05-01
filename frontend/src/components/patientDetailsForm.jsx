import { useState, useEffect, React } from 'react'
import api from '../api'
import Navbar from './navbar'
import '../styles/patientDetails.css'
function DetailsForm(data_lengths) {

    const [fullName, setFullName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [gender, setGender] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [area, setArea] = useState("");
    const [userId, setUserId] = useState("");
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
            const res = await api.post(p_route, {
                fullName: fullName,
                phoneNo: phoneNo,
                gender: gender,
                houseNo: houseNo,
                postalCode: postalCode,
                area: area,
                userId: userId
            });
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
            const res = await api.post(m_route, { allergies: allergies, past_medical_conditions: pastMedicalConditions, surgical_history: surgicalHistory, family_medical_history: familyMedicalHistory, user_id: userId });
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="details-form-container">
                {data_lengths.d_length === 0 ? <div className="form-container normal-details" id='normal-details'>
                    <form onSubmit={handlePatientSubmit}>
                        <label><h1>PATIENT DETAILS</h1></label>
                        <div className="inputs">
                            <label className='lable' htmlFor="genral-details">Genral Details</label>
                            <div name = "genral-details" className="genral-details-container">
                                <input
                                    required
                                    placeholder="Full Name"
                                    className="input"
                                    type="text"
                                    name="fullName"
                                    onChange={(e) => setFullName(e.target.value)}
                                    value={fullName}
                                />
                                <input
                                    required
                                    placeholder="Phone Number"
                                    className="input"
                                    type="tel"
                                    name="phoneNo"
                                    onChange={(e) => setPhoneNo(e.target.value)}
                                    value={phoneNo}
                                />
                                <input
                                    required
                                    placeholder="Gender"
                                    className="input"
                                    type="text"
                                    name="gender"
                                    onChange={(e) => setGender(e.target.value)}
                                    value={gender}
                                />
                            </div>
                            <hr className='hr' color='#d8d8d8'/>
                            <label className='lable' htmlFor="address">Address</label>
                            <div name = "address" className="house-details-container">
                                <input
                                    required
                                    placeholder="House No."
                                    className="input"
                                    type="text"
                                    name="houseNo"
                                    onChange={(e) => setHouseNo(e.target.value)}
                                    value={houseNo}
                                />
                                <input
                                    required
                                    placeholder="Postal Code"
                                    className="input"
                                    type="text"
                                    name="postalCode"
                                    onChange={(e) => setPostalCode(e.target.value)}
                                    value={postalCode}
                                />
                                <input
                                    required
                                    placeholder="Area"
                                    className="input"
                                    type="text"
                                    name="area"
                                    onChange={(e) => setArea(e.target.value)}
                                    value={area}
                                />
                            </div>
                        </div>

                        <button type="submit" id='submit' className='submit-btn'>Submit</button>
                    </form>
                </div> : <div>Already Filled</div>}

                {data_lengths.m_length === 0 ? <div className="form-container medical-details" id='medical-details'>
                    <form onSubmit={handleMedicalSubmit}>
                        <label htmlFor=""><h1><b>MEDICAL DETAILS</b></h1></label>
                        <div className='inputs'>
                            <div>
                                <input required className="input" type="text" name='allergies' id='allergies' onChange={(e) => setAllergies(e.target.value)} value={allergies} placeholder="Allergies" />

                                <input required className="input" type="text" name="pastMedicalConditions" id="pastMedicalConditions" onChange={(e) => setPastMedicalConditions(e.target.value)} value={pastMedicalConditions} placeholder="Past Medical Conditions" />
                            </div>
                            <div>
                                <input required className="input" type="text" name="surgicalHistory" id="surgicalHistory" onChange={(e) => setSurgicalHistory(e.target.value)} value={surgicalHistory} placeholder="Surgical History" />

                                <input required className="input" type="text" name="familyMedicalHistory" id="familyMedicalHistory" onChange={(e) => setFamilyMedicalHistory(e.target.value)} value={familyMedicalHistory} placeholder="Family Medical History" />
                            </div>
                        </div>

                        <button type="submit" id='submit' className='submit-btn'>Submit</button>
                    </form>
                </div> : <div>Allready Filled</div>}
            </div>

        </>
    )
}

export default DetailsForm;