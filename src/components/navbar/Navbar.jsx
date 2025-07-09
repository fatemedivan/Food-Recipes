import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from "../searchbar/Searchbar";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { color } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to={"/"} className="brand">
          Food Recipes
        </Link>
        <Searchbar />
        <Link to={"/create"}>Create</Link>
      </nav>
    </div>
  );
}
