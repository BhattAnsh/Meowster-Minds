// Error.jsx

import React from 'react';
import '../styles/error.css'
import Navbar from '../components/navbar';
function Error() {
    return (
        <>
        <Navbar></Navbar>
        <div className="error-container">
            <svg className="error-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2v-2zm0-8h2v6h-2V9z"/>
            </svg>
            <h1 className="error-heading">Server Error</h1>
            <p className="error-message">An unexpected error occurred on the server. Please try again later.</p>
        </div>
        </>
    );
}

export default Error;
