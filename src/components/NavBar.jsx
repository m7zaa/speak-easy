import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  var navStyle = {
    paddingLeft: '2%',
    paddingRight: '2%',
    backgroundColor: 'blue',
    fontFamily: 'Tomorrow, sans-serif',
    fontWeight: 'bold',
    borderRadius: '10px'

  };

  return (
    <nav style={navStyle}>
      <div className="nav-wrapper">
        <span><Link to="/"><i className="fas fa-beer fa-4x"></i></Link></span>
        <ul id="nav-mobile" className="right">
          <li><Link to="/Kombucha">Drafts</Link></li>
        </ul>
      </div>
    </nav>

  );
}
export default NavBar;