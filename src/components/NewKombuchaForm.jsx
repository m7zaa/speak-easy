import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKombuchaForm(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _flavor = null;
  let _quantity = 128;

  function handleNewKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onNewKombuchaCreation({name: _name.value, brand: _brand.value, price: _price.value, flavor: _flavor.value, quantity: _quantity, id: v4()});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _flavor.value = '';
  }
  var formStyle = {
    color: '#ececeb'
  };
  var btnStyle = {
    color: '#ececeb',
    backgroundColor: '#e25822'
  };
  return (
    <div style={formStyle}>
      <form onSubmit={handleNewKombuchaFormSubmission}>
        <input
          style={{ color: '#ececeb' }}
          id='name'
          placeholder='Name'
          ref={(input) => { _name = input; }} />
        <input
          style={{ color: '#ececeb' }}
          id='brand'
          placeholder='Brand'
          ref={(input) => { _brand = input; }} />
        <input
          style={{ color: '#ececeb' }}
          id='Price'
          placeholder='Price'
          ref={(input) => { _price = input; }} />
        <input
          style={{ color: '#ececeb' }}
          id='flavor'
          placeholder='Flavor'
          ref={(input) => { _flavor = input; }} />
        <button type='submit' style={btnStyle} className="waves-effect  btn-small">Add</button>    
      </form>
    </div>
  );
}

NewKombuchaForm.propTypes = {
  onNewKombuchaCreation: PropTypes.func
};

export default NewKombuchaForm;