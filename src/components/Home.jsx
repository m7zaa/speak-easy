import React from 'react';
import background from '../Assets/Img/home-background.jpeg';
import { Link } from 'react-router-dom';



function Home() {
  var siteStyle = {
    backgroundColor: 'black',
    display: 'flex',
  };

  var imgStyle = {
    margin: '10% auto',
    display: 'block',
    borderRadius: '1%',
    zIndex: '1',
  };

  var titleStyle = {
    zIndex: '2',
    position: 'absolute',
    left: '28%',
    right: '25%',
    top: '50%',
    bottom: '25%',
    textShadow: '2px 2px white',
    fontFamily: 'Courier, monospace'
  };
  return (
    <div style={siteStyle} className="container">
      <h1 style={titleStyle}>Welcome to the Speak Easy</h1>
      <img style={imgStyle} src={background}></img>
      <Link to="/Add">Add Kombucha</Link>
    </div>
  );
}

export default Home;