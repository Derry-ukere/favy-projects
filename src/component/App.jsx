import React from "react";
import LogIn from "./LogIn";
import Image from "./Image";
import Footer from "./Footer";
import Header from "./Header";
import BottomNavbar from "./BottomNavbar";



function App() {
    return (
        <div className="desktop">
            <Header />
            <Image />
            <LogIn />
            <Footer />
            <BottomNavbar />
        </div>

    );

}
export default App;