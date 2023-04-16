import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/cip">CIP</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;