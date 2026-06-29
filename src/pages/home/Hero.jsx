import { Header } from "../../components/Header";
import { Link, NavLink } from "react-router";
import Hero from "../../assets/hero-back.webp"
import leadLogo from "../../assets/Lead.webp"
import wdhearnLogo from "../../assets/WDHearn.webp"
import niche from "../../assets/Niche.webp"
import tooltemp from "../../assets/TooltempHero.webp"
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
        <h1 className="hero-line">
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
            <Link to="/machine-listing">
              <button className="product-button">OUR PRODUCTS</button>
            </Link>
        </div>
      </div>
      
      <div className="partners-banner">
        <h4>PARTNERS WITH</h4>
        <div className="slider">
          <div className="slide-track">
            <a href="https://www.wdhearn.co.za">
              <img src={wdhearnLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.leadmachinetools.co.za">
              <img src={leadLogo} alt="Lead" />
            </a>
            <a href="https://www.niche-tool.com">
              <img src={niche} alt="WD Hearn" />
            </a>
            <a href="https://www.tooltempsouthafrica.co.za">
              <img src={tooltemp} id="tooltemp" alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={wdhearnLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.leadmachinetools.co.za">
              <img src={leadLogo} alt="Lead" />
            </a>
            <a href="https://www.niche-tool.com">
              <img src={niche} alt="WD Hearn" />
            </a>
            <a href="https://www.tooltempsouthafrica.co.za">
              <img src={tooltemp} id="tooltemp" alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={wdhearnLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.leadmachinetools.co.za">
              <img src={leadLogo} alt="Lead" />
            </a>
            <a href="https://www.niche-tool.com">
              <img src={niche} alt="WD Hearn" />
            </a>
            <a href="https://www.tooltempsouthafrica.co.za">
              <img src={tooltemp} id="tooltemp" alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={wdhearnLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.leadmachinetools.co.za">
              <img src={leadLogo} alt="Lead" />
            </a>
            <a href="https://www.niche-tool.com">
              <img src={niche} alt="WD Hearn" />
            </a>
            <a href="https://www.tooltempsouthafrica.co.za">
              <img src={tooltemp} id="tooltemp" alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={wdhearnLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.leadmachinetools.co.za">
              <img src={leadLogo} alt="Lead" />
            </a>
            <a href="https://www.niche-tool.com">
              <img src={niche} alt="WD Hearn" />
            </a>
            <a href="https://www.tooltempsouthafrica.co.za">
              <img src={tooltemp} id="tooltemp" alt="Lead" />
            </a>
           
          </div>
        </div>
      </div>
    </div>
    </>
  )
}