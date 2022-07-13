import React from "react";

function Footer() {
   const currentYear = new Date().getFullYear();
   return (
      <footer>
         <p> All rights reserved © {currentYear} STAR WARS</p>
      </footer>

   );
}

export default Footer;