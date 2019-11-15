import React from 'react';
import Kombucha from './Kombucha';

var MasterKombuchaList = [
  {
    name: 'Red Dragon',
    brand: 'Soma',
    price: '3',
    flavor: 'boysenberry',
    quantity: '84'
  },
  {
    name: 'Red Dragon',
    brand: 'Soma',
    price: '3',
    flavor: 'boysenberry',
    quantity: '84'

  },
  {
    name: 'Red Dragon',
    brand: 'Soma',
    price: '3',
    flavor: 'boysenberry',
    quantity: '84'

  },
  {
    name: 'Red Dragon',
    brand: 'Soma',
    price: '3',
    flavor: 'boysenberry',
    quantity: '84'

  },
  {
    name: 'Red Dragon',
    brand: 'Soma',
    price: '3',
    flavor: 'boysenberry',
    quantity: '84'

  },
  {
    name: 'Red Dragon',
    brand: 'Soma',
    price: '3',
    flavor: 'boysenberry',
    quantity: '84'

  },
  {
    name: 'Red Dragon',
    brand: 'Soma',
    price: '3',
    flavor: 'boysenberry',
    quantity: '84'

  },
  {
    name: 'Red Dragon',
    brand: 'Soma',
    price: '3',
    flavor: 'boysenberry',
    quantity: '84'

  },

];


function KombuchaList() {

  return (
    <div>
      <hr />
      {MasterKombuchaList.map((kombucha, index) =>
        <Kombucha name={kombucha.name}
          brand={kombucha.brand}
          price={kombucha.price}
          flavor={kombucha.flavor}
          quantity={kombucha.quantity}
          key={index} />
      )}
    </div>
  );
}
export default KombuchaList;