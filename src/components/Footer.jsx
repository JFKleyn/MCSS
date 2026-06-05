import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import Logo from "../assets/logo-black.png";

export function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <img src={Logo} alt="Logo" className="logo" />
            <p>KZN’s leading solution provider for precision manufacturing.</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a
                href="https://wa.me/27821234567"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
          <div className="footer-content">
            <h4>NEW MACHINES</h4>
            <a href="https://www.wdhearn.co.za">CNC Machines</a>
            <a href="https://www.wdhearn.co.za">Fabrication</a>
            <a href="https://www.wdhearn.co.za">Conventional Machines</a>
            <a href="https://www.wdhearn.co.za">Specialized Machines</a>
          </div>
          <div className="footer-content">
            <h4>NEW MACHINES</h4>
            <Link to={"/machines"}>CNC Machines</Link>
            <Link to={"/machines"}>Fabrication</Link>
            <Link to={"/machines"}>Conventional Machines</Link>
            <Link to={"/machines"}>Specialized Machines</Link>
          </div>
          <div className="footer-content">
            <h4>NICHE TOOLING</h4>
            <Link to={"/tools"}>Cutting & Machining</Link>
            <Link to={"/tools"}>Tool & Work Holding</Link>
            <Link to={"/tools"}>Measuring & Inspection</Link>
            <Link to={"/tools"}>Grinding & Finishing</Link>
            <Link to={"/tools"}>CNC Support</Link>
          </div>
          <div className="footer-content">
            <h4>CONTACT</h4>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>+27 82 123 4567</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>myles@usedmachinetools.co.za</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>4 Reed Place, Marlmead, Pinetown, 3610</span>
            </div>
          </div>
        </div>
        <div class="copy">
          <div class="company">
            <p>
              © 2026 Myles Crosthwaite Sales and Services CC | All right
              reserved
            </p>
          </div>
          <div class="companydocs">
            <p>
              Powered by
              <a
                href="https://venturetechnologies.co"
                target="_blank"
                rel="noreferrer"
              >
                Venture
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
