
import React from 'react';
import './Header.css'; // Import custom styles

function Header() {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <img src="logo.png" />
      </div>

      {/* Navigation Section */}
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
