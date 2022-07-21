import React from "react";
import './Header.css';

function Header() {
   return(
      <div>
         <nav className="nav">
            <ul className="menu_items">
               <li>Home</li>
               <li>Sobre mim</li>
               <li>Portfolio</li>
               <li>Contato</li>
            </ul>
         </nav>
      </div>
   )
}
export default Header;
