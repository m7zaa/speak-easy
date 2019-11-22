import React from 'react';
import Kombucha from './Kombucha';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// var MasterKombuchaList = [
//   {
//     name: 'Mad Monkey',
//     brand: 'Rainbow Obsidian Co.',
//     price: '3',
//     flavor: 'banana pineapple',
//     quantity: '84'
//   },
//   {
//     name: 'Rose of Summer',
//     brand: 'Rainbow Obsidian Co.',
//     price: '2',
//     flavor: 'strawberry ginger',
//     quantity: '99'

//   },
//   {
//     name: 'Five Venoms',
//     brand: 'Rainbow Obsidian Co.',
//     price: '3',
//     flavor: 'orange thyme fennel rosehips raspberry',
//     quantity: '121'

//   },
//   {
//     name: 'Twilight Hour',
//     brand: 'Rainbow Obsidian Co.',
//     price: '4',
//     flavor: 'blackberry lavender',
//     quantity: '44'

//   },
//   {
//     name: 'Lady In Distress',
//     brand: 'Thunderbird',
//     price: '3',
//     flavor: 'mint lemon verbena',
//     quantity: '66'

//   },
//   {
//     name: 'Red Lantern',
//     brand: 'Thunderbird',
//     price: '5',
//     flavor: 'pink lady pomegranate',
//     quantity: '6'

//   },
//   {
//     name: 'Roar Of The Lion',
//     brand: 'Thunderbird',
//     price: '5',
//     flavor: 'cayenne lemon ginger',
//     quantity: '70'

//   },
//   {
//     name: 'Lucky Star',
//     brand: 'Thunderbird',
//     price: '2',
//     flavor: 'starfruit lime',
//     quantity: '22'

//   },
//   {
//     name: 'Jade Tiger',
//     brand: 'Sapphire Brewers',
//     price: '3',
//     flavor: 'kiwi lime',
//     quantity: '128'
//   },
//   {
//     name: 'Double Bliss',
//     brand: 'Sapphire Brewers',
//     price: '3',
//     flavor: 'strawberry pineapple',
//     quantity: '106'

//   },
//   {
//     name: 'Silent Love',
//     brand: 'Sapphire Brewers',
//     price: '6',
//     flavor: 'strawberry rose mint',
//     quantity: '29'

//   },
//   {
//     name: 'Ambush',
//     brand: 'Sapphire Brewers',
//     price: '3',
//     flavor: 'ginger tumeric black-pepper',
//     quantity: '114'

//   },
//   {
//     name: 'Delinquent',
//     brand: 'Triumph Fermenters',
//     price: '3',
//     flavor: 'blueberry basil',
//     quantity: '40'

//   },
//   {
//     name: 'River of Fury',
//     brand: 'Triumph Fermenters',
//     price: '5',
//     flavor: 'boysenberry',
//     quantity: '4'

//   },
//   {
//     name: 'The Savage Five',
//     brand: 'Triumph Fermenters',
//     price: '2',
//     flavor: 'hibiscus mango orange rosehips mint',
//     quantity: '118'

//   },
//   {
//     name: 'Happy Trio',
//     brand: 'Triumph Fermenters',
//     price: '5',
//     flavor: 'cranberry orange lime',
//     quantity: '42'

//   },

// ];

function KombuchaList(props) {
  //sorts kegs with < 15 pints to the top of the list
  props.kombuchaList.sort((a, b) => (a.quantity - 15) ? 1 : -1);
  var headerStyle = {
    textAlign: 'center',
    position: 'relative',
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    fontSize: '100px',
    color: 'white'
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
      <Link to="/Add">Add Kombucha</Link>
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