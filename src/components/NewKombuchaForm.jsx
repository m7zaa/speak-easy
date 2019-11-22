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
  return (
    <div>
      <form onSubmit={handleNewKombuchaFormSubmission}>
        <input
          // type='text'
          id='name'
          placeholder='Name'
          ref={(input) => { _name = input; }} />
        <input
          // type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => { _brand = input; }} />
 />
        <input
          // type='text'
          id='Price'
          placeholder='Price'
          ref={(input) => { _price = input; }} />
 />
        <input
          // type='text'
          id='flavor'
          placeholder='Flavor'
          ref={(input) => { _flavor = input; }} />
 />

                
        <button type='submit'>Add Kombucha</button>
      </form>
    </div>
  );
}

NewKombuchaForm.propTypes = {
  onNewKombuchaCreation: PropTypes.func
};


export default NewKombuchaForm;