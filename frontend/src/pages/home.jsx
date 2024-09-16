<<<<<<< HEAD
import React from 'react';
import Navbar from '../components/navbar';
import image from '../assets/Home_logo.png';
import heroImage from '../assets/hero-image.png';
import '../styles/home.css';
import bedsIcon from '../assets/icons/night_shelter.svg';
import dashBoard from '../assets/icons/Dashboard.svg';
import axios from 'axios';
import GettingLocation from '../components/gettingLocation';
import bmi from '../assets/icons/body_system.svg';
import lab from '../assets/icons/article.svg';
=======
import React from 'react'
import Navbar from '../components/navbar'
import image from '../assets/Home_logo.png'
import heroImage from '../assets/hero-image.png'
import '../styles/home.css'
import bedsIcon from '../assets/icons/night_shelter.svg'
import dashBoard from '../assets/icons/Dashboard.svg'
import axios from 'axios'
import GettingLocation from '../components/gettingLocation'
import blodd from '../assets/icons/blood.svg'
import doc from '../assets/icons/doc.svg'
>>>>>>> 1cab2dbceadf02b4797faa8c029cb5f348f02dde

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
            <a href="/hlist">
                <button>Find Hospitals</button>
            </a>
              </div>
          </div>
          <div className="hero-image-container">
            <img className='hero-image' src={heroImage} alt="" />
          </div>
        </div>
        <div className="features-container">
          <a href="">
            <div className="feature-container">
              <div className="outer-circle">
                <div className="inner-circle">
                  <img className='icon' src={bedsIcon} alt="" />
                </div>
              </div>
              <p>Book Beds</p>
            </div>
          </a>
          <a href="/dashboard">
          <div className="feature-container">
            <div className="outer-circle">
              <div className="inner-circle">
                <img className='icon' src={dashBoard} alt="" />
              </div>
            </div>
            <p>Your Dashboard</p>
          </div>
<<<<<<< HEAD
          <div className="feature-container">
            <div className="outer-circle">
              <div className="inner-circle">
                <img className='icon' src={bmi} alt="" />
=======
          </a>
          <a href="">
            <div className="feature-container">
              <div className="outer-circle">
                <div className="inner-circle">
                  <img className='icon' src={blodd} alt="" />
                </div>
>>>>>>> 1cab2dbceadf02b4797faa8c029cb5f348f02dde
              </div>
              <p>Blood Bank</p>
            </div>
<<<<<<< HEAD
            <p>BMI Calculation</p>
          </div>
          <div className="feature-container">
            <div className="outer-circle">
              <div className="inner-circle">
                <img className='icon' src={lab} alt="" />
=======

          </a>
          <a href="">
            <div className="feature-container">
              <div className="outer-circle">
                <div className="inner-circle">
                  <img className='icon' src={doc} alt="" />
                </div>
>>>>>>> 1cab2dbceadf02b4797faa8c029cb5f348f02dde
              </div>
              <p>Appointment</p>
            </div>
<<<<<<< HEAD
            <p>Lab Reports</p>
          </div>
=======
          </a>
>>>>>>> 1cab2dbceadf02b4797faa8c029cb5f348f02dde
        </div>
      </div>
    </>
  )
}

export default home