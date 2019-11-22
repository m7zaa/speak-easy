import React from 'react';
import background from '../Assets/Img/home-background.jpeg';
import { Link } from 'react-router-dom';



function Home() {
  var siteStyle = {
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   
  };

  var imgStyle = {
    // margin: '10% auto',
    // display: 'block',
    // position: 'relative',
    // bottom: '20%',
    // right: '20%',
    // borderRadius: '1%',
    zIndex: '1',
  };

  var titleStyle = {
    zIndex: '2',
    fontFamily: '"Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans - serif',
    fontSize: '92px',
    textTransform: 'uppercase',
    textRendering: 'optimizeLegibility',
    color: '#2c2c2c',
    letterSpacing: '.05em',
    textShadow: '4px 4px 0px #d5d5d5, 7px 7px 0px rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    textAlign: 'center',
    // left: '50%',
    top: '50%'
    // padding: '80px 50px',
    // top: '50%', 
    // left: '50%', 
    // transform: 'translate(-50%, -50%)'
  };
  return (
    <div style={siteStyle} className="container">
      <h1 style={titleStyle}>The Speak Easy</h1>
      <img style={imgStyle} src={background}></img>
    </div>
  );
}

export default Home;