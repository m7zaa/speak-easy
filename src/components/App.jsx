import React from "react";
import KombuchaList from "./KombuchaList";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Error404 from "./Error404";

function App() {
    var siteStyle = {
        backgroundColor: "beige",
    };
    return (
        <div style={siteStyle} className="container">


            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Kombucha" component={KombuchaList} />
                <Route component={Error404} />
            </Switch>
        </div>
    );
}

export default App;