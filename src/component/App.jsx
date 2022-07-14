import React from "react";
import LogIn from "./LogIn";
import Footer from "./Footer";


function App() {
    return (
        <div>

            <h2> Sign in to continue to <p>your account.</p> </h2>
            {/* <img className="star war"
                src="undraw_To_the_stars_qhyy.pdf" alt="start_war" />
            <img className="Astronaut"
                src="undraw_Astronaut_xko2.png" alt="Astronaut" /> */}
            <LogIn />
            <Footer />
        </div>
    );
}
export default App;