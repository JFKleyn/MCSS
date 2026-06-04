import { Link } from 'react-router';
import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export function Header() {
  return (
    <>
      <img src={Logo} alt="Logo" className="logo" />
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/machines">Machines</Link>
        <Link to="/tools">Niche Tooling</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
        <Link to="/contact">
          <button>GET A QUOTE</button>
        </Link>
        <Link to="/admin">
          <button>ADMIN LOGIN</button>
        </Link>
        <FontAwesomeIcon icon={faBars} className="FontawesomeIcon" />
    </>
  );
}