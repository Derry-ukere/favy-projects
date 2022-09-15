import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Footer() {

    const currentYear = new Date().getFullYear();

    return (

        <section id="Footer">
            <div>
                <p>All rights reserved © {currentYear} STAR WARS.
                    <span> privacy | Terms  </span>

                    <span>   English  {<ArrowDropDownIcon />} </span>
                </p>
            </div>
        </section>

    );
}

export default Footer;