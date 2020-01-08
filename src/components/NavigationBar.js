import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div className="navBarContainer">
            <NavLink activeClassName="selected" to="/" className="itemNavBar" >Home</NavLink>
            <NavLink activeClassName="selected" to="/search" className="itemNavBar" >My weather</NavLink>
        </div>
    )
};

export default NavigationBar;