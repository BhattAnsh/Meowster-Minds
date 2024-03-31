import { useEffect, useState, React } from "react";
import api from "../api";
import EmptyDetails from "../components/emptyDetails";
import Details from "../components/details";
import DetailsForm from "../components/patientDetailsForm";

function Dashboard() {
    const [details, setDetails] = useState([])
    const [mdetails, setMDetails] = useState([])
    const getDetails = () => {
        api.get("patient/details")
          .then((res) => res.data)
          .then((data) => {
            setDetails(data);
        });
    };
    useEffect(() => {
        getDetails();
    }, []);
    const getMedicalDetails = () => {
        api.get("patient/medical-details")
          .then((res) => res.data)
          .then((data) => {
            setMDetails(data);
        });
    };
    useEffect(() => {
        getMedicalDetails();
    }, []);

    useEffect(() => {
        if (details.length > 0) {
          const user = details[0];
          setDetails(user);
        }
      }, []);
  return (
    <>
        {details.length === 0 && mdetails.length === 0 ? <DetailsForm></DetailsForm> : <Details></Details>}
    </>
  )
}

export default Dashboard