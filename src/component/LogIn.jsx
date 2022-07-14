import React, { useState } from "react";

import Button from '@material-ui/core/Button';


function LogIn() {

    const [fulldetail, setFulldetail] = useState({
        email: "",
        password: ""
    });

    function handleChange(event) {

        const { value, name } = event.target;

        setFulldetail(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };

        });
    }
    function handleClick(event) {

        event.preventDefault();
        setFulldetail({
            email: "",
            password: ""
        });
    }
    return (

        <div>

            <form className="login">
                <label> email adress
                    <input
                        onChange={handleChange}
                        name="email"
                        value={fulldetail.email}
                        placeholder="Email address" />
                </label>
                <label> password
                    <input
                        onChange={handleChange}
                        name="password"
                        value={fulldetail.password}

                        placeholder="Enter strong password" />
                </label>
                <Button onClick={handleClick}>Sign in</Button>;

            </form>
        </div>
    );
}


export default LogIn;