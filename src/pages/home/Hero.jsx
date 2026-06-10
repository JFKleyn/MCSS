import { Header } from "../../components/Header";
import { Link } from "react-router";
import Hero from "../../assets/hero-back.png"
import leadLogo from "../../assets/Lead.png"
import wdhearnLogo from "../../assets/WDHearn.png"
import './Hero.css'

export function HeroSection(){
  return(
    <>
    <Header />
    <div className="hero" style={{ backgroundImage: `url(${Hero})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat" }}>
      <div className="hero-header">
        <h1>
          KZN MACHINE <br /><span> TOOL SOLUTION CENTRE
          </span>
        </h1>
        <p>
          Industry-Leading Machine Tool Solutions You Can Trust
        </p>
        <div className="hero-buttons">
            <Link to="/contact">
              <button>CONTACT US</button>
            </Link>
            <Link to="/admin">
              <button className="product-button">OUR PRODUCTS</button>
            </Link>
        </div>
      </div>
      
      <div className="partners-banner">
        <h4>PARTNERS WITH</h4>
        <div className="slider">
          <div className="slide-track">
            <a href="https://www.wdhearn.co.za">
              <img src={leadLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={wdhearnLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={leadLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={wdhearnLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={leadLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={wdhearnLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={leadLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={wdhearnLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={leadLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={wdhearnLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={leadLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={wdhearnLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={leadLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={wdhearnLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={leadLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={wdhearnLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={leadLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={wdhearnLogo} alt="WD Hearn" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}