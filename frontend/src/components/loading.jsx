import React from 'react';
import '../styles/loading.css';
import Navbar from './navbar';
function Loading() {
  return (
    <>
        <Navbar></Navbar>
        <div className="loading-container">
            <div className='loading-animation'><iframe src="https://lottie.host/embed/f92e23c4-2028-4f9c-8b4a-d7732fe01d6a/NcWqce044d.json"></iframe></div>
        </div>
    </>
  )
}

export default Loading;