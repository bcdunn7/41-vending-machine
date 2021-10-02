import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar({snacks}) {
return (
    <nav className="NavBar">
      <NavLink className="NavBar-NavLink" exact to="/">
        Home
      </NavLink>
      {snacks.map(s => {
          return (
            <NavLink className="NavBar-NavLink" exact to={`/${s}`}>
                {s}
            </NavLink>
          )
      })}
    </nav>
  );
}

export default NavBar;