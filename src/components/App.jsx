import React from 'react';
import KombuchaList from './KombuchaList';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Error404 from './Error404';
import NewKombuchaForm from './NewKombuchaForm';
import EditKombuchaForm from './EditKombuchaForm';

function App() {
  var siteStyle = {
    backgroundColor: 'black',
  };
  return (
    <div style={siteStyle} className="container">


      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Kombucha" component={KombuchaList} />
        <Route exact path="/Edit" component={EditKombuchaForm} />
        <Route exact path="/Add" component={NewKombuchaForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;