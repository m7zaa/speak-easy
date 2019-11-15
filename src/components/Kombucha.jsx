import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Kombucha(props) {
  var pageStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1% 1%',
  };
  var menuStyle = {
    margin: '0 auto 0 auto',
    backgroundColor: 'brown'
  };
  var itemStyle = {
    width: '250px',
    height: '250px',
    textAlign: 'center',
    padding: '15',
  };
  var cheapStyle = {
    color: 'red',
  };
  var topShelfStyle = {
    color: 'blue',
  };




  return (
    <div style={pageStyle}>
      <div style={menuStyle} className="card">
        <div style={itemStyle} className="flex-item">
          <h3>{props.name}</h3>
          <h6>{props.brand}</h6>

          {props.price <= 3 &&
              <p style={cheapStyle}>${props.price}</p>
          }
          {props.price > 3 &&
              <p style={topShelfStyle}>${props.price}</p>
          }

          <p>flavor: {props.flavor}</p>
          <p>capcacity: {props.quantity} pints</p>
          <hr />
          <Link to="/editkombuchaform">Edit</Link>
        </div>
      </div>
    </div>
  );
}

Kombucha.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  quantity: PropTypes.number,
};

export default Kombucha;