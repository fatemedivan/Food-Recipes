import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from "../searchbar/Searchbar";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to={'/'} className="brand">Food Recipes</Link>
        <Searchbar/>
        <Link to={'/create'}>Create</Link>
      </nav>
    </div>
  );
}
