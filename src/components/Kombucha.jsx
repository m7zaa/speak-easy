import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import box from '../Assets/Img/box.jpg';

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
    marginBottom: '10px'

  };
  var menuStyle = {
    // margin: '5 5 5 5',
    backgroundColor: '#e25822',
    //   backgroundImage: `url(${box})`
    color: '#ececeb',
    borderStyle: 'solid',
    borderWidth: '2px'
  };
  var almostOutStyle = {
    // backgroundColor: 'White',
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: '10px',
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
    color: '#FE0000',
    
    fontWeight: 'bold'
  };
  var midShelfStyle = {
    color: '#E5D2D2',
    fontWeight: 'bold'

  };
  var topShelfStyle = {
    color: 'gold',
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
              
                {/* <Link to="/editkombuchaform">Edit</Link> */}
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