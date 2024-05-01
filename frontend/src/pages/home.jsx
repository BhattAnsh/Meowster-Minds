import React from 'react'
import Navbar from '../components/navbar'
import image from '../assets/Home_logo.png'
import heroImage from '../assets/hero-image.png'
import '../styles/home.css'
import bedsIcon from '../assets/icons/night_shelter.svg'
import dashBoard from '../assets/icons/Dashboard.svg'
import axios from 'axios'
import GettingLocation from '../components/gettingLocation'

function home() {

  return (
    <>
      <Navbar />
      <GettingLocation></GettingLocation>
      <div className='home-main-container'>
        <div className="home-container">
          <div className="hero-text-container">
            <div className='logo'>
              <img src={image} alt="" />
            </div>
            <div className='button'>
              <button>Find Hospitals</button>
            </div>
          </div>
          <div className="hero-image-container">
            <img className='hero-image' src={heroImage} alt="" />
          </div>
        </div>
        <div className="features-container">
          <div className="feature-container">
            <div className="outer-circle">
              <div className="inner-circle">
                <img className='icon' src={bedsIcon} alt="" />
              </div>
            </div>
            <p>Book Beds</p>
          </div>
          <div className="feature-container">
            <div className="outer-circle">
              <div className="inner-circle">
                <img className='icon' src={dashBoard} alt="" />
              </div>
            </div>
            <p>Your Dashboard</p>
          </div>
          <div className="feature-container">
            <div className="outer-circle">
              <div className="inner-circle">
                <img className='icon' src={bedsIcon} alt="" />
              </div>
            </div>
            <p>Book Beds</p>
          </div>
          <div className="feature-container">
            <div className="outer-circle">
              <div className="inner-circle">
                <img className='icon' src={bedsIcon} alt="" />
              </div>
            </div>
            <p>Book Beds</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default home