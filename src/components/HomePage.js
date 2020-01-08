import React from 'react';
import UserInput from "./UserInput";
import NavigationBar from "./NavigationBar";

const HomePage = () => {

    return (
        <div>
            <NavigationBar/>
            <h1>Hello</h1>
            <UserInput/>
        </div>
    )
};

export default HomePage;