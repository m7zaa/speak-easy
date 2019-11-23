import React from 'react';
import KombuchaList from './KombuchaList';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Error404 from './Error404';
import NewKombuchaForm from './NewKombuchaForm';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKombuchaList: [],
    };
    this.handleAddingNewKombuchaToList = this.handleAddingNewKombuchaToList.bind(this);
    this.handleTapKegClick = this.handleTapKegClick.bind(this);
    this.handleSellPintClick = this.handleSellPintClick.bind(this);
  }
  handleTapKegClick(index) {
    var newMasterKombuchaList = this.state.masterKombuchaList;
    newMasterKombuchaList[index].quantity = 128;
    this.setState({ masterKombuchaList: newMasterKombuchaList });
  }
  handleSellPintClick(index) {
    var newMasterKombuchaList = this.state.masterKombuchaList;
    newMasterKombuchaList[index].quantity--;
    this.setState({ masterKombuchaList: newMasterKombuchaList });
  }
  handleAddingNewKombuchaToList(newKombucha) {
    var newMasterKombuchaList = this.state.masterKombuchaList.slice();
    newMasterKombuchaList.push(newKombucha);
    this.setState({ masterKombuchaList: newMasterKombuchaList });
  }

  render() {
    var siteStyle = {
      backgroundColor: 'black',
    };
    return (
      <div style={siteStyle} className="container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Kombucha" render={() => <KombuchaList kombuchaList={this.state.masterKombuchaList} tapKeg={this.handleTapKegClick} sellPint={this.handleSellPintClick} />} />
          <Route exact path="/Add" render={() => <NewKombuchaForm onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}
export default App;