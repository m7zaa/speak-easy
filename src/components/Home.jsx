import React from 'react';
import background from '../Assets/Img/home-background.jpg';


function Home() {
  var siteStyle = {
    backgroundColor: 'black',
    display: 'flex',
  };

  var imgStyle = {
    margin: '10% auto',
    display: 'block',
    borderRadius: '5%',
    zIndex: '1',
  };

  var titleStyle = {
    zIndex: '2',
    position: 'absolute',
    left: '35%',
    right: '25%',
    top: '20%',
    bottom: '25%',
    textShadow: '2px 2px white',
    fontFamily: 'Courier, monospace'
  };
  return (
    <div style={siteStyle} className="container">
      <h1 style={titleStyle}>Welcome to the Speak Easy</h1>
      <img style={imgStyle} src={background}></img>

    </div>
  );
}

export default Home;