import React, { useState } from "react";

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

            <form>
                <label> email adress
                    <input
                        onChange={handleChange}
                        name="email"
                        value={fulldetail.email}
                        placeholder="email address" />
                </label>
                <label> password
                    <input
                        onChange={handleChange}
                        name="password"
                        value={fulldetail.password}

                        placeholder="Enter strong password" />
                </label>
                <button onClick={handleClick}>Sign in</button>;

            </form>
        </div>
    );
}


export default LogIn;