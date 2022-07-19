import React from "react";


function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer>

                <p> All rights reserved © {currentYear} STAR WARS privacy | Term  English</p>


            </footer>
        </div>
    );
}

export default Footer;