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
    top: '35%',
    bottom: '25%',
    fontFamily: '"Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans - serif',
    fontSize: '92px',
    padding: '80px 50px',
    textAlign: 'center',
    textTransform: 'uppercase',
    textRendering: 'optimizeLegibility',
    color: '#2c2c2c',
    letterSpacing: '.05em',
    textShadow: '4px 4px 0px #d5d5d5, 7px 7px 0px rgba(0, 0, 0, 0.2)'
    };
  return (
    <div style={siteStyle} className="container">
      <h1 style={titleStyle}>The Speak Easy</h1>
      <img style={imgStyle} src={background}></img>
      <Link to="/Add">Add Kombucha</Link>
    </div>
  );
}

export default Home;