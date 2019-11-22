import React from 'react';
import Kombucha from './Kombucha';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function KombuchaList(props) {
  //sorts kegs with < 15 pints to the top of the list
  props.kombuchaList.sort((a, b) => (a.quantity - 15) ? 1 : -1);
  var headerStyle = {
    textAlign: 'center',
    position: 'relative',
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    fontSize: '100px',
    color: '#ececeb'
  };

  return (
    <div>
      <h1 style={headerStyle}>Drafts</h1>
      <hr />
      {props.kombuchaList.map((kombucha, index) =>
        <Kombucha
          name={kombucha.name}
          brand={kombucha.brand}
          price={kombucha.price}
          flavor={kombucha.flavor}
          quantity={kombucha.quantity}
          tapKeg={props.tapKeg}
          sellPint={props.sellPint}
          index={index}
          key={kombucha.id} />
      )}
      <div>
        <Link to="/Add"><a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a></Link>

      </div>


    </div>
  );
}

KombuchaList.propTypes = {
  kombuchaList: PropTypes.array,
  sellPint: PropTypes.func,
  tapKeg: PropTypes.func,
  index: PropTypes.number
};



export default KombuchaList;