import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavItem = ({ to, label }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(to); // Navigate to the specified URL
  };



  // Check if the current location matches the 'to' prop
  const isActive = location.pathname === to;
  console.log('Location Path:', location.pathname);
  console.log('To:', to);
  console.log('isActive:', isActive);

  // Define dynamic styles for active, hover, and normal states
  const activeStyles = {
    background: isActive ? '#fff' : 'transparent',
    color: isActive ? 'rgb(125, 120, 219)':'#fff',
    cursor: 'pointer', 
    borderRadius: '0.6rem',
    padding:'0.3rem',
    width: '8vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <li className="nav__items">
      <div
        className="nav__link"
        style={{ ...activeStyles }}
        onClick={handleClick}
      >
        {label}
      </div>
    </li>
  );
};

export default NavItem;
