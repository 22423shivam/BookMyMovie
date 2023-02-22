import React, { useState } from 'react';
import logo from 'C:/Users/22423/Downloads/BookMovieApp/BookMovieApp/src/assets/logo.svg';
import 'C:/Users/22423/Downloads/BookMovieApp/BookMovieApp/src/common/header/Header.css';
import Button from '@material-ui/core/Button';
import { Route } from 'react-router-dom';

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    setShowModal(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleBookShow = () => {
    
  };

  return (
    <header className="Header">
      <img src={logo} alt="Movie Booking Logo" className="Header__logo" />
      <div>
        <Button variant="contained" color="primary" onClick={handleBookShow}>
          Book Show
        </Button>

        {loggedIn ? (
          <Button variant="contained" color="default" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button variant="contained" color="default" onClick={handleLogin}>
            Login
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;