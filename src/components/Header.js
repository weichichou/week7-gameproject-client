import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="header-container">
      <h1 className="title">MEMORY</h1>
      <img
        className="image"
        alt=""
        src="http://jaxenter.com/wp-content/uploads/2013/04/octocats-2.png"
      />
      <Link className="home-button" to={"/"}>
        {" "}
        Home
      </Link>
    </div>
  );
}
