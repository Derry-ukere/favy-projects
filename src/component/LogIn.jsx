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
        console.log(fulldetail);

        setFulldetail({
            email: "",
            password: ""
        });
    }
    return (
            <div>
                <h2> Sign in to continue to <p className="para">your account. </p></h2>
                <form className="login">
                    <label>
                        <p className="info">email address</p>
                        <input className="email"
                            onChange={handleChange}
                            name="email"
                            value={fulldetail.email}
                            placeholder="Email address" />
                    </label>
                    <label>
                        <p className="info2">password</p>
                        <input className="password"
                            onChange={handleChange}
                            name="password"
                            value={fulldetail.password}
                            placeholder="Enter strong password" />
                    </label>

                    <Button onClick={handleClick}>Sign in</Button>


                </form>
            </div>
        
    );
}


export default LogIn;