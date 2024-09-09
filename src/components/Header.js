// src/components/Header.js
import React, { useState } from 'react';
import './Header.css'; // Để thêm kiểu dáng cho Header

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://thumbs.dreamstime.com/b/modern-passionate-disability-people-support-logo-modern-passionate-disability-people-support-wheel-chair-logo-illustration-106046222.jpg"
          alt="Logo"
        />
      </div>
      <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Điểm Đến</a></li>
          <li><a href="#about">Đối Tác</a></li>
          <li><a href="#services">Du lịch tại chỗ</a></li>
          <li><a href="#contact">Liên hệ</a></li>
          <li><a href="#user"><i className="fa-solid fa-user"></i></a></li>
        </ul>
      </nav>
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        <i className="fa-solid fa-bars"></i> 
      </button>
    </header>
  );
};

export default Header;
