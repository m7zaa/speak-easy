import React from "react";
import { Link } from "react-router-dom";




function NavBar() {
    // var navBarButton = {
    //   margin: "0 50px 0 50px",
    //   display: "inline-block",
    //   padding: "14px 16px",
    //   backgroundColor: "blanchedalmond",
    //   border: "solid 2px burlywood",
    // };
    var navBar = {
        // whiteSpace: "normal",
        // textAlign: "center",
        // wordBreak: "break-all",
        margin: "0 50px 0 50px"
    };
    var navLink = {
        color: "black",
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-toggleable-lg navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container">
                <a className="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index" href="\">Speak Easy</a>

                <button style={navBar} className="btn btn-light nav-link text-light" ><Link style={navLink} to="/Kombucha">Kombuchas</Link></button>
                    
                <div className="navbar-collapse collapse d-lg-inline-flex flex-lg-row">
                    <ul className="navbar-nav flex-grow-1 mr-auto">
                        <li className="nav-item">
                        <button style={navBar} className="btn btn-light nav-link text-light" ><Link style={navLink} to="/NewKombuchaForm">Add Kombucha</Link></button>  
                        </li>

                        

                    </ul>
                </div>   
            </div>
        </nav>
    );
}
export default NavBar;