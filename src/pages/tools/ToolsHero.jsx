import { Header } from "../../components/Header";
import { Link } from "react-router";
import cAndM from "../../assets/CuttingAndMachining.png"
import nicheLogo from "../../assets/NicheSA.png"
import "./ToolsHero.css"


export function ToolsHero(){
  return(
    <>
    <Header />
    <div className="hero niche" style={{ backgroundImage: `url(${cAndM})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"}}>
      <div className="hero-header">
        <small>ENGINEERED FOR PRECISION</small>
        <h1 className="niche-header">
          NICHE TOOLING
        </h1>
        <p>
          Professional-grade industrial tooling solutions from South Africa's leading precision equipment supplier
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
        <div className="slider">
          <div className="slide-track">
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="WD Hearn" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="Lead" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={nicheLogo} alt="WD Hearn" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}