import { useEffect, useState } from "react";
import api from "../api";
import Details from "../components/details";
import DetailsForm from "../components/patientDetailsForm";
import Loading from "../components/loading";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const [mdetails, setMDetails] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () =>{
    try{
      const [basicDetails, medicalDetails] = await Promise.all([
        api.get("patient/details"),
        api.get("patient/medical-details")
      ]);
      setDetails(basicDetails.data);
      setMDetails(medicalDetails.data);
    }catch(error){
      console.log("hello")
      navigate('/error')
    }
    finally{
      setLoading(false);
    }
  };
  
  useEffect(() =>{
    fetchData();
  }, []);

  return (
    <>
      {loading ? <Loading /> : 
        (details.length === 0 || mdetails.length === 0 ? 
          <DetailsForm d_length={details.length} m_length={mdetails.length} /> : 
          <Details />
        )
      }
    </>
  );
}

export default Dashboard;
