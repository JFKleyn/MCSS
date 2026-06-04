import { useState } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.png";
import "./Header.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const [machinesOpen, setMachinesOpen] = useState(false);

  function toggleMachines() {
    setMachinesOpen(!machinesOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
    setMachinesOpen(false);
  }

  return (
    <>
      <div className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/machines">Machines</Link>
          <Link to="/tools">Niche Tooling</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="header-buttons">
          <Link to="/contact">
            <button>GET A QUOTE</button>
          </Link>
          <Link to="/admin">
            <button className="admin-button">ADMIN LOGIN</button>
          </Link>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="FontawesomeIcon"
          id="bar"
          onClick={toggleMenu}
        />
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <FontAwesomeIcon icon={faXmark} onClick={closeMenu} id="xmark" />

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <div>
          <div
            className="mobile-dropdown-title"
            onClick={toggleMachines}
          >
            Machines▾
          </div>

          <div className={`mobile-submenu ${machinesOpen ? "open" : ""}`}>
            <div className="submenu-spacer"></div>
            <Link to="/machines/new">New Machines</Link>
            <Link to="/machines/used">Used Machines</Link>
          </div>
        </div>
        <Link to="/tools">Niche Tooling</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin Login</Link>
      </div>
    </>
  );
}
