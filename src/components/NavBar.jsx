import React from 'react';
import { Link } from 'react-router-dom';
import bottle from '../Assets/Img/bottle.png';

function NavBar() {
  var navStyle = {
    paddingLeft: '2%',
    paddingRight: '2%',
    backgroundColor: '#10316b',
    fontFamily: 'Ropa Sans, sans - serif',
    fontWeight: 'bold',
    borderRadius: '5px',
    width: '100%',
    height: '100px',
    marginBottom: '30px',
    color: '#ececeb'
  };

  var bottleStyle = {
    height: '75px'
  };

  var textStyle = {
    fontSize: '30px',
    color: '#ececeb'
  };

  return (
    <nav style={navStyle}>
      <div className="nav-wrapper">
        <span><Link to="/"><img src={bottle} style={bottleStyle}/></Link></span>
        <ul id="nav-mobile" className="right">
          <li><Link style={textStyle} to="/Kombucha">On Tap</Link></li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;