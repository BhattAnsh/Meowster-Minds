import React, { useEffect, useState } from 'react';
import api from '../api';
import "../styles/navbar.css"

function Navbar() {
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const[showMenu, setShowMenu] = useState(true)
  const[showCross, setShowCross] = useState(false)

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

  const handleOpenMenu = () =>{
    setShowCross(true)
    setShowMenu(false)
  }
  const handleCloseMenu = () =>{
    setShowCross(false)
    setShowMenu(true)
  }
  const handleSearchSubmit = (event) =>{
    event.preventDefault();
  }

  return (
    <>
      <nav className={showMenu?"nav-container":"nav-container blue-nav"}>
        <div className="logo-container">
          <a href="/" className='href'><h2>Sehat Saathi</h2></a>
        </div>
        <form>
          <input className='search-bar' type="search" name="search" id="search" placeholder='Search here' />
        </form>
        <div className="menu-container">
          <a href="/" className='href'><div>Home</div></a>
          <a href="/dashboard/" className='href'><div>Dashboard</div></a>
          <div>Nearby Hospitals</div>
        </div>
        <div className="user-icon" >
          <a href="/dashboard/" id='userName'>{userName}</a>
          <a href='#' id='userId'>{userId}</a>
        </div>
        <div className="phone-icons">
          {showMenu?<i className='material-icons' onClick={handleOpenMenu}>menu</i>:<i className='material-icons hidden'>menu</i>}
          {showCross?<i className='material-icons' onClick={handleCloseMenu}>close</i>:<i className='material-icons hidden'>close</i>}
        </div>
      </nav>
      <nav className={showMenu?"":"blue-nav"}>
        <div className={showMenu?"hidden":"phone-menu"}>
          <form>
            <input className='phone-search-bar' type="search" name="search" id="phone-search" placeholder='Search here' />
            <button className='material-icons search-button'>search</button>
          </form>
          <a href="/" className='href'><div className='hr'>Home</div></a>
          <a href="/dashboard/" className='href'><div className='hr'>Dashboard</div></a>
          <div>Nearby Hospitals</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
