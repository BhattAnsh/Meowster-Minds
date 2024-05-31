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
          </a>
          <a href="">
            <div className="feature-container">
              <div className="outer-circle">
                <div className="inner-circle">
                  <img className='icon' src={blodd} alt="" />
                </div>
              </div>
              <p>Blood Bank</p>
            </div>

          </a>
          <a href="">
            <div className="feature-container">
              <div className="outer-circle">
                <div className="inner-circle">
                  <img className='icon' src={doc} alt="" />
                </div>
              </div>
              <p>Appointment</p>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default home