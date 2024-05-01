import axios from 'axios';
import React, { useEffect, useState } from 'react';

function GettingLocation() {
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [q, setQ] = useState("");
    const url = 'https://us1.locationiq.com/v1/reverse';
    const key = 'pk.44d83090b012acf771e91fd012202d47';

    useEffect(() => {
        const getLocation = async () => {
            try {
                const position = await getCurrentPosition();
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            } catch (error) {
                console.error("Error getting location:", error);
            }
        };

        getLocation();
    }, []);

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const response = await axios.get(`${url}?key=${key}&lat=${lat}&lon=${long}&format=json`);
                console.log(response.data);
            } catch (error) {
                console.error("Error making request:", error);
            }
        };

        if (lat && long) {
            makeRequest();
        }
    }, [lat, long]);

    const getCurrentPosition = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

    return (
        <></>
    );
}

export default GettingLocation;
