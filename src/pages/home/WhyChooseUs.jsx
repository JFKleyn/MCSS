import { GridIcon, DesignIcon, ClockIcon } from "../../components/SVGIcons";
import leadLogo from "../../assets/Lead2.png";
import wdhearnLogo from "../../assets/WDHearn.png";
import sandvikLogo from "../../assets/Sandvik.png";
import tooltempLogo from "../../assets/ToolTemp.png";
import nicheLogo from "../../assets/Niche.png";
import hcfengLogo from "../../assets/HCFeng.png";
import "./WhyChooseUs.css";

export function WhyChooseUs() {
  return (
    <div className="why-container">
      <div className="section-header">
        <p>KZN EXPERTS</p>
        <h2>WHY CHOOSE US</h2>
      </div>
      <div className="why-stats">
        <div className="why-stats-item">
          <div className="svg-container">
            <GridIcon />
          </div>
          <h2>6</h2>
          <small>
            Machine Tool
            <br /> Sales Specialists
          </small>
        </div>
        <div className="why-stats-item">
          <div className="svg-container">
            <DesignIcon />
          </div>
          <h2>7</h2>
          <small>
            Highly Experiences
            <br /> Technicians
          </small>
        </div>
        <div className="why-stats-item">
          <div className="svg-container">
            <ClockIcon />
          </div>
          <h2>80+</h2>
          <small>
            Years of Technical
            <br /> Excellence
          </small>
        </div>
      </div>

      <div className="why-description">
        <h4>Unmatched Expertise in KZN</h4>
        <p>
          <br />
          We bring unmatched expertise and capability to the KwaZulu-Natal
          region. Our team is skilled across the full spectrum — from
          conventional machine tools to advanced{" "}
          <span className="red">7-axis and multi-axis CNC systems.</span>Through
          strategic partnerships with industry leaders, we offer access to some
          of the best machine tool solutions in the country, covering all
          sectors.This combination of technical expertise, premium partnerships,
          and cutting-edge product offerings ensures that we deliver reliable,
          high-performance solutions tailored to your needs.
        </p>
      </div>

      <div className="partner-section">
        <div className="leading-partners">
          <div className="leading-partners-header">
            <h4>Industry Leading Partners</h4>
            <p>Strategic partnerships with the best</p>
          </div>
          <div className="leading-partners-body">
            <a href="https://www.wdhearn.co.za">
              <img src={wdhearnLogo} alt="Lead" className="partner-logo" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={leadLogo} alt="WD Hearn" className="partner-logo" />
            </a>
            <a href="https://www.wdhearn.co.za">
              <img src={sandvikLogo} alt="Lead" className="partner-logo" />
            </a>
          </div>
        </div>

        <div className="official-agents">
          <div className="official-agents-header">
            <h4>Official SA Agents</h4>
            <p>Exclusive representation</p>
          </div>
          <div className="official-agents-body">
            <img src={nicheLogo} alt="WD Hearn" className="partner-logo" />
            <img src={hcfengLogo} alt="Lead" className="partner-logo" />
            <a href="https://www.wdhearn.co.za">
              <img src={tooltempLogo} alt="Lead" className="partner-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
