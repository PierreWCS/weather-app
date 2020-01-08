import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './UserInput.css'

const UserInput = () => {
    const [userCity, setUserCity] = useState(null);
    const handleChange = (event) => {
        console.log(event.target.value);
        setUserCity(event.target.value)
    };

    return(
        <div className="userInputContainer">
            <form className="userInputForm">
                <label>
                    Your city:
                    <input className="inputCity" type="text" name="city" onChange={handleChange} />
                </label>
                <Link className="inputLink" to={
                    {
                        pathname: `/search`,
                        userCity
                    }
                }><p className="validateButton">Validate</p></Link>
            </form>
        </div>
    )

};

export default UserInput;