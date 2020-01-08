import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import ApiCall from "./components/ApiCall";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/search" component={ApiCall}/>
            </Switch>
        </div>
    );
}

export default App;
