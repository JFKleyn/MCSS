import { Header } from "../../components/Header";
import cAndM from "../../assets/CuttingAndMachining.png";
import nicheLogo from "../../assets/NicheSA.png";
import { FadeIn } from "../../components/FadeIn";
import "./ToolsHero.css";

export function ToolsHero() {
  return (
    <>
      <Header />
      <div
        className="hero niche"
        style={{
          backgroundImage: `url(${cAndM})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <FadeIn>
          <div className="hero-header">
            <small>ENGINEERED FOR PRECISION</small>
            <h1 className="niche-header">NICHE TOOLING</h1>
            <p>
              Professional-grade industrial tooling solutions from South
              Africa's leading precision equipment supplier
            </p>
          </div>
        </FadeIn>

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
  );
}
