import React from 'react';
import './Header.css';
import logo from './dreams.jpg';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo"></img>
      <h1 className="header__title">Wishlist</h1>
    </div>
  );
}

export default Header;
