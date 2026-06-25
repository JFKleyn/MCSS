import { useState, useEffect } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.png";
import "./Header.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className={`header ${scrolled ? "scrolled" : ""}`}>
        <img src={Logo} alt="Logo" className="logo" />
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <div className="desktop-dropdown">
            <button type="button" className="desktop-dropdown-title">Machines▾</button>

            <div className="desktop-submenu">
              <a href="https://www.wdhearn.co.za" target="_blank">
                New Machines
              </a>
              <Link to="/machines">Used Machines</Link>
            </div>
          </div>
          <Link to="/tools">Niche Tooling</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="header-buttons">
          <Link to="/contact">
            <button>GET A QUOTE</button>
          </Link>
          <Link to="/login">
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
          <div className="mobile-dropdown-title" onClick={toggleMachines}>
            Machines▾
          </div>

          <div className={`mobile-submenu ${machinesOpen ? "open" : ""}`}>
            <div className="submenu-spacer"></div>
            <a href="https://www.wdhearn.co.za">New Machines</a>
            <Link to="/machines">Used Machines</Link>
          </div>
        </div>
        <Link to="/tools">Niche Tooling</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Admin Login</Link>
      </div>
    </>
  );
}
