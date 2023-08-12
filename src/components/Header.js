import React from 'react';
import '../styles/Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header-buttons">
        <button className="header-single-button">Button 1</button>
        <button className="header-single-button">Button 2</button>
        <button className="header-single-button">Button 3</button>
      </div>
      <div className="dropdown">
        <button className="dropdown-button">Dropdown</button>
        <div className="dropdown-content">
          <button className="dropdown-item">Item 1</button>
          <button className="dropdown-item">Item 2</button>
          <button className="dropdown-item">Item 3</button>
          <button className="dropdown-item">Item 4</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
