import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

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
            <h2> Sign in to continue to <br /> your account</h2>
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

                <Button onClick={handleClick}>
                    <nav>
                        <Link to='/films' className="sign-in-link">                           
                            Sign in
                        </Link>
                    </nav>
                </Button>
            </form>
        </div>
    );
}


export default LogIn;