import React from 'react';
import { Link } from 'react-router-dom';



function NavBar() {
  var navBarWidth = {
    // width: '100%',
    borderRadius: '1%'
  };
  var navBar = {
    // whiteSpace: "normal",
    // textAlign: "center",
    // wordBreak: "break-all",
    margin: '0 50px 0 50px'
  };
  var navLink = {
    color: 'black',
  };
  return (
    <nav style= {navBarWidth} className="navbar navbar-expand-lg navbar-light bg-white box-shadow mb-3">
      <div className="container">
        <a className="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index" href="\">Speak Easy</a>

                    
        <div className="navbar-collapse collapse d-lg-inline-flex flex-lg-row">
          <ul className="navbar-nav flex-grow-1 mr-auto">
            <li className="nav-item">
            
            </li>
            <li>
              <span style={navBar} className="nav-link text-light" ><Link style={navLink} to="/Kombucha">Drafts</Link></span>

            </li>
          </ul>
        </div>   
      </div>
    </nav>
     

  );
}
export default NavBar;