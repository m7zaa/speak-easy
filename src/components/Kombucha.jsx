import React from 'react';
import PropTypes from 'prop-types';

function Kombucha(props) {

  function handleTapKegClick() {
    props.tapKeg(props.index);
  }
  function handleSellPintClick() {
    props.sellPint(props.index);
  }
  var pageStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '40px',
    marginRight: '10px',
    marginBottom: '10px',
    fontFamily: 'Ropa Sans, sans - serif',
  };
  var menuStyle = {
    // margin: '5 5 5 5',
    backgroundColor: '#ececeb',
    color: '#e25822',
    borderStyle: 'solid',
    borderWidth: '2px'
  };
  var almostOutStyle = {
    backgroundColor: '#e25822',
    color: 'black'
  };
  var itemStyle = {
    width: '300px',
    height: '300px',
    textAlign: 'center',
    padding: '15px',
    position: 'relative',
    fontFamily: 'Century Gothic',
  };
  var itemFooterTextStyle = {
    position: 'absolute',
    bottom: '8px',
    left: '20px',
    right: '20px'
  };
  var discountStyle = {
    color: 'black',
    fontWeight: 'bold'
  };
  var midShelfStyle = {
    color: 'black',
    fontWeight: 'bold'
  };
  var topShelfStyle = {
    color: '#10316b',
    fontWeight: 'bold'
  };
  var btnStyle = {
    backgroundColor: '#10316b',
    color: '#ececeb'
  }

  return (
    <div style={pageStyle}>
      <div style={menuStyle} className="card">
        {props.quantity < 20 &&
          <div style={almostOutStyle}>
            <div style={itemStyle}>
              <h3>{props.name}</h3>
              <h6><strong>by {props.brand}</strong></h6>
              <p><em>{props.flavor}</em></p>
              <div style={itemFooterTextStyle}>
                {props.price <= 2 &&
                  <p style={discountStyle}>${props.price}</p>
                }
                {props.price > 2 && props.price <= 4 &&
                  <p style={midShelfStyle}>${props.price}</p>
                }
                {props.price > 4 &&
                  <p style={topShelfStyle}>${props.price}</p>
                }
                <p>{props.quantity} pints available</p>
              <a onClick={handleSellPintClick} style={btnStyle} className="waves-effect btn-small">Sell Pint</a> <a onClick={handleTapKegClick} style={btnStyle} className="waves-effect btn-small">New Keg</a>                
                {/* <Link to="/editkombuchaform">Edit</Link> */}
              </div>
            </div>
          </div>
        }
        {props.quantity >= 20 &&
          <div style={menuStyle}>
            <div style={itemStyle}>
              <h3>{props.name}</h3>
              <h6><strong>by {props.brand}</strong></h6>
              <p><em>{props.flavor}</em></p>
              <div style={itemFooterTextStyle}>
                {props.price <= 2 &&
                  <p style={discountStyle}>${props.price}</p>
                }
                {props.price > 2 && props.price <= 4 &&
                  <p style={midShelfStyle}>${props.price}</p>
                }
                {props.price > 4 &&
                  <p style={topShelfStyle}>${props.price}</p>
                }
                <p>{props.quantity} pints available</p>
              <a onClick={handleSellPintClick} style={btnStyle} className="waves-effect btn-small">Sell Pint</a> <a onClick={handleTapKegClick} style={btnStyle} className="waves-effect btn-small">New Keg</a>
              </div>
            </div>
          </div>
        }
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
  tapKeg: PropTypes.func,
  sellPint: PropTypes.func,
  index: PropTypes.number,
};

export default Kombucha;