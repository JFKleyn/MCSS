import { Link } from "react-router";
import training from "../../assets/Training.png";
import servicing from "../../assets/Servicing.png";
import turnkey from "../../assets/Turnkey.png";
import design from "../../assets/Design.png";
import { TeachIcon, DesignIcon2, WrenchIcon } from "../../components/SVGIcons";
import { ArrowIcon } from "../../components/SVGIcons";
import "./HomeServices.css";

export function HomeServices() {
  return (
    <div className="service-section">
      <div className="section-header">
        <p>PRECISION SUPPORT</p>
        <h2>OUR SERVICES</h2>
      </div>
      <div className="service-containers">
      <div className="service-container">
          <img src={training} alt="Lead" className="service-image" />
        <div className="service-container-text">
          <div className="svg-containers">
            <TeachIcon />
          </div>
          <div className="service-container-text-text">
          <h4>Training</h4>
          <p>
            We provide comprehensive training on machine setup, programming and control for Siemens and Fanuc controllers. Our experienced technicians ensure your team is fully equipped to maximize machine performance and productivity.
          </p>
          </div>
          <div className="find-button-container">
            <Link to="/services">
              <button>
                <p>FIND OUT MORE</p>
                <ArrowIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="service-container">
        <img src={servicing} alt="Lead" className="service-image" />
        <div className="service-container-text">
          <div className="svg-containers">
            <WrenchIcon />
          </div>
          <div className="service-container-text-text">
          <h4>Servicing and Repairs</h4>
          <p>
            Our technicians have 80 years of collective experience in servicing and maintaining both CNC and conventional machine tools. With 7 dedicated technicians across KZN and nationwide support through our partnerships, we ensure minimal downtime and maximum reliability.
          </p>
          </div>
          <div className="find-button-container">
            <Link to="/services">
              <button>
                <p>FIND OUT MORE</p>
                <ArrowIcon />
              </button>
            </Link>
          </div>
          
        </div>
      </div>

      <div className="service-container"> 
        <img src={turnkey} alt="Lead" className="service-image" />
        <div className="service-container-text">
          <div className="svg-containers">
            <DesignIcon2 />
          </div>
          <div className="service-container-text-text">
          <h4>Turnkey Solutions</h4>
          <p>
            As part of our commitment to customer service, we offer complete turnkey solutions from initial enquiry to final commissioning on site. Our engineers and senior technicians handle everything, ensuring your machines are performance-ready from day one.
          </p>
          </div>
          <div className="find-button-container">
            <Link to="/services">
              <button>
                <p>FIND OUT MORE</p>
                <ArrowIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="service-container"> 
        <img src={design} alt="Lead" className="service-image" />
        <div className="service-container-text">
          <div className="svg-containers">
            <DesignIcon2 />
          </div>
          <div className="service-container-text-text">
          <h4>Design Support</h4>
          <p>
            We offer innovative design support through our engineers and senior technicians. From concept to execution, we work with you to create custom solutions tailored to your specific manufacturing needs and challenges.
          </p>
          </div>
          <div className="find-button-container">
            <Link to="/services">
              <button>
                <p>FIND OUT MORE</p>
                <ArrowIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
