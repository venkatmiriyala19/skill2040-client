import React, { useState, useEffect } from 'react';

const NavButtons = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('selected-theme');
    setIsDarkTheme(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    // Update the theme when isDarkTheme changes
    document.body.classList.toggle('dark-theme', isDarkTheme);
    localStorage.setItem('selected-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  return (
    <div className="nav__btns">
      <i className="uil uil-moon change-theme" id="theme-button" onClick={toggleTheme}></i>

      <div className="nav__toggle" id="nav-toggle">
        <i className="uil uil-apps"></i>
      </div>
    </div>
  );
};

export default NavButtons;