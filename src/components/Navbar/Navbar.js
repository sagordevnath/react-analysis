import React from "react";

import CustomActiveLink from "../CustomActiveLink/CustomActiveLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <CustomActiveLink className="link" to="/">
        HOME
      </CustomActiveLink>
      <CustomActiveLink className="link" to="/reviews">
        REVIEWS
      </CustomActiveLink>
      <CustomActiveLink className="link" to="/dashboard">
        DASHBOARD
      </CustomActiveLink>
      <CustomActiveLink className="link" to="/blogs">
        BLOGS
      </CustomActiveLink>
      <CustomActiveLink className="link" to="/about">
        ABOUT
      </CustomActiveLink>
    </div>
  );
};

export default Navbar;
