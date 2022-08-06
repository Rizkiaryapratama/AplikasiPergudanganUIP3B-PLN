import React from "react";
import "./topbar.css";
import { Home, Info, ExitToApp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import LogoPLN from "../../assets/img/logo-pln.png"

export default function Topbar() {
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  return (
    <div className="topbar">
      <div className="topbarWrapper">

        <div className="topLeft">
          <div className="logo">
              SISTEM PERGUDANGAN UIP3B
          </div>
          <div className="logoPLN">
            <img src={LogoPLN} alt=""/>
          </div>
        </div>

        <div className="topRight">
          <Link to="/" className="link">
            <div className="Home">
              <Home/>
              Home
            </div>
          </Link>

          <a href="https://lumutdev.com/ui-p3bs/" className="About">
          <div >
            <Info/>
            About
          </div>
          </a>

          <button className="Logout" onClick={handleLogout}>
            <ExitToApp/>
            Logout
          </button>

        </div>
      </div>
    </div>
  );
}
