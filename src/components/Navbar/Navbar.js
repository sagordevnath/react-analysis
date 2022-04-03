import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        HOME
      </Link>
      <Link className="link" to="/reviews">
        REVIEWS
      </Link>
      <Link className="link" to="/dashboard">
        DASHBOARD
      </Link>
      <Link className="link" to="/blogs">
        BLOGS
      </Link>
      <Link className="link" to="/about">
        ABOUT
      </Link>
    </div>
  );
};

export default Navbar;
