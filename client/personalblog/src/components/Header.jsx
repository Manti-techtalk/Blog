import React from 'react';
import image from '../assets/pic.png';
import { Link } from 'react-router-dom';

function Header() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black'
  };

  return (
    <div style={{ borderBottom: '1px solid black' }} className="container p-3">
      <div className="row">
        <div className="col-6">
          <div>
            <img style={{ height: '50px', width: '50px' }} src={image} alt="the logo" />
          </div>
        </div>
        <div className="col-6">
          <ul className="nav justify-content-end text-dark">
            <li className="m-1">
              <Link to="/" style={linkStyle}>Home</Link>
            </li>
            <li className="m-1">
              <Link to="/articles" style={linkStyle}>Articles</Link>
            </li>
            <li className="m-1">
              <Link to="/about" style={linkStyle}>About</Link>
            </li>
            <li className="m-1">
              <Link to="/projects" style={linkStyle}>Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
