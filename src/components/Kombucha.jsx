import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import box from '../Assets/Img/box.jpg';

class Kombucha extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
    
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
  }
  edit(){
    this.setState({editing: true});
  }

  save() {
    var val1 = this.refs.newText1.value;
    var val2 = this.refs.newText2.value;
    var val3 = this.refs.newText3.value;
    var val4 = this.refs.newText4.value;


    this.props.updatedKombucha(val1, val2, val3, val4, this.props.index);
    this.setState({ editing:false });
  }
  


  handleTapKegClick() {
    this.props.tapKeg(this.props.index);
  }

  handleSellPintClick() {
    this.props.sellPint(this.props.index);
  }

  renderNormal() {

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
      backgroundColor: '#1D0846',
      //   backgroundImage: `url(${box})`
      color: 'white',
      borderStyle: 'solid',
      borderWidth: '5px'
    };
    var almostOutStyle = {
      backgroundColor: 'White',
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
  
    return (
      <div style={pageStyle}>
        <div style={menuStyle} className="card">
          {this.props.quantity < 20 &&
          <div style={almostOutStyle}>
            <div style={itemStyle}>
              <h3>{this.props.name}</h3>
              <h6><strong>by {this.props.brand}</strong></h6>
              <p><em>{this.props.flavor}</em></p>
              <div style={itemFooterTextStyle}>
                {this.props.price <= 2 &&
                <p style={discountStyle}>${this.props.price}</p>
                }
                {this.props.price > 2 && this.props.price <= 4 &&
                <p style={midShelfStyle}>${this.props.price}</p>
                }
                {this.props.price > 4 &&
                <p style={topShelfStyle}>${this.props.price}</p>
                }
                <p>{this.props.quantity} pints available</p>
                <p><button onClick={this.handleSellPintClick} >Sell</button> | <button onClick={this.handleTapKegClick} >Tap Keg</button></p>
                <hr />
                {/* <Link to="/editkombuchaform">Edit</Link> */}
              </div>
            </div>
          </div>
          }
          {this.props.quantity >= 20 &&
          <div style={menuStyle}>
            <div style={itemStyle}>
              <h3>{this.props.name}</h3>
              <h6><strong>by {this.props.brand}</strong></h6>
              <p><em>{this.props.flavor}</em></p>
              <div style={itemFooterTextStyle}>
                {this.props.price <= 2 &&
                <p style={discountStyle}>${this.props.price}</p>
                }
                {this.props.price > 2 && this.props.price <= 4 &&
                <p style={midShelfStyle}>${this.props.price}</p>
                }
                {this.props.price > 4 &&
                <p style={topShelfStyle}>${this.props.price}</p>
                }
  
                <p>{this.props.quantity} pints available</p>
                <p><button onClick={this.handleSellPintClick}>Sell</button> | <button onClick={this.handleTapKegClick}>Tap Keg</button></p>
                <hr />
                <button onClick={this.edit}>Edit</button>
              </div>
            </div>
  
          </div>
          }
  
        </div>
      </div>
    );


  }

  renderForm() {
    return(

      <div >
        <textarea ref="newText1" defaultValue={this.props.name}></textarea>
        <textarea ref="newText2" defaultValue={this.props.brand}></textarea>
        <textarea ref="newText3" defaultValue={this.props.price}></textarea>
        <textarea ref="newText4" defaultValue={this.props.flavor}></textarea>



        <button onClick={this.save}>Update</button>
      </div >
    );
  }

  render() {

    if (this.state.editing) {
      console.log(this.state.editing + 'got here');
      return this.renderForm();
    } else {
      return this.renderNormal();
    }

  }
}

Kombucha.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  quantity: PropTypes.number,
  tapKeg: PropTypes.func,
  sellPint: PropTypes.func,
  updatedKombucha: PropTypes.func,
  index: PropTypes.number,
};

export default Kombucha;