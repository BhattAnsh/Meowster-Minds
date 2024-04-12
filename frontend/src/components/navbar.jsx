import React, { useEffect, useState } from 'react';
import api from '../api';
import "../styles/navbar.css"
import { Navigate } from 'react-router-dom';

function Navbar() {
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  const getUser = () => {
    api.get("patient/get-User")
      .then((res) => res.data)
      .then((data) => {
        setUserData(data);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    // Check if userData has any elements before accessing it
    if (userData.length > 0) {
      const user = userData[0];
      setUserName(user.username);
      setUserId(user.id)
    }
  }, [userData]);
  

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <h2>Sehat Saathi</h2>
      </div>
      <form>
        <input className='search-bar' type="search" name="search" id="search" placeholder='Search here' />
      </form>
      <div className="menu-container">
        <div>Home</div>
        <div>Dashboard</div>
        <div>Nearby Hospitals</div>
      </div>
      <div className="user-icon" >
        <a href="/dashboard/" id='userName'>{userName}</a>
        <a href='#' id='userId'>{userId}</a>
      </div>
    </nav>
  );
}

export default Navbar;
