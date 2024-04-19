import axios from 'axios';
import {React, useEffect, useState } from 'react';

function GettingLocation() {
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const key = "pk.034d283b29e0d1773b7ebadaba84ab59";

    const gettingLocation = async () =>{
        try{
            const res = await axios.get("https://us1.locationiq.com/v1/reverse?key=pk.034d283b29e0d1773b7ebadaba84ab59&lat=28.634861&lon=77.206169&format=json&")
            const { lat, lon } = res.data; // Extract latitude and longitude from response data
            setLat(lat);
            setLon(lon);
            setTimeout(()=>{
                getNearbyLocations(lat, lon);
            },[2000])// Call getNearbyLocations with latitude and longitude
        } catch(error){
            console.log(error)
        }
    };

    const getNearbyLocations = async (lat, lon) => {
        try {
            const response = await axios.get(`https://us1.locationiq.com/v1/nearby?key=${key}&lat=${lat}&lon=${lon}&tag=restaurant&radius=100&format=json`);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching nearby locations:', error);
        }
    };

    useEffect(() =>{
        gettingLocation();
    }, []);

    return (
        <></>
    )
}

export default GettingLocation;
