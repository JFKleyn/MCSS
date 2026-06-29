import training from "../../assets/Training.webp";
import servicing from "../../assets/Servicing.webp";
import turnkey from "../../assets/Turnkey.webp";
import design from "../../assets/Design.webp";
import { FadeIn } from "../../components/FadeIn";
import { TeachIcon, DesignIcon2, WrenchIcon } from "../../components/SVGIcons";
import "./Services.css";

export function Services() {
  return (
    <div className="service-page-section">
      <FadeIn>
        <div className="section-header">
          <p>PRECISION SUPPORT</p>
          <h2>OUR SERVICES</h2>
        </div>
      </FadeIn>

      <div className="service-page-containers">
        <FadeIn>
          <div className="service-page-container">
            <img src={training} alt="Lead" className="service-page-image" />
            <div className="service-page-container-text">
              <div className="svg-containers">
                <TeachIcon />
              </div>
              <small>EXPERT TRAINING PROGRAMS</small>
              <div className="service-page-container-text-text">
                <h3>Comprehensive Machine Tool Training</h3>
                <p>
                  Empower your team with expert knowledge and hands-on training
                  from our seasoned professionals. We specialize in
                  comprehensive training programs covering machine setup,
                  advanced programming, and control systems for Siemens, Fanuc,
                  Mitsubishi and GSK controllers upon installation
                </p>
              </div>
              <div className="category-text">
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Personalized training programs tailored to your team's skill
                    level and specific machine requirements
                  </p>
                </div>
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Hands-on instruction covering CNC programming, G-code
                    optimization, and advanced machining techniques
                  </p>
                </div>
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Safety protocols and best practices for operating
                    high-precision industrial equipment
                  </p>
                </div>
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Ongoing support and refresher courses to keep your team
                    updated with the latest technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="service-page-container">
            <img src={servicing} alt="Lead" className="service-page-image" />
            <div className="service-page-container-text">
              <div className="svg-containers">
                <WrenchIcon />
              </div>
              <small>MAINTENANCE & REPAIR SERVICES</small>
              <div className="service-page-container-text-text">
                <h3>Expert Servicing & Repairs</h3>
                <p>
                  With over 80 years of combined experience, our team of 7
                  dedicated technicians provides unparalleled servicing and
                  maintenance for both CNC and conventional machine tools. We
                  understand that machine downtime directly impacts your bottom
                  line, which is why we prioritize rapid response times and
                  preventive maintenance strategies.
                </p>
              </div>
              <div className="category-text">
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Preventive maintenance programs designed to minimize
                    unexpected downtime and extend equipment lifespan
                  </p>
                </div>
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Emergency repair services with rapid response times across
                    KZN and nationwide through strategic partnerships
                  </p>
                </div>
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Complete diagnostic services using advanced testing
                    equipment to identify issues before they become critical
                  </p>
                </div>
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Genuine parts sourcing and inventory management to ensure
                    quick repairs with quality components
                  </p>
                </div>
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Detailed service reports and maintenance logs to track
                    equipment health and predict future service needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="service-page-container">
            <img src={turnkey} alt="Lead" className="service-page-image" />
            <div className="service-page-container-text">
              <div className="svg-containers">
                <DesignIcon2 />
              </div>
              <small>COMPLETE INSTALLATION SERVICES</small>
              <div className="service-page-container-text-text">
                <h3>Full Turnkey Solutions</h3>
                <p>
                  Experience hassle-free machine integration with our
                  comprehensive turnkey solutions. From initial site assessment
                  and foundation preparation to final commissioning and operator
                  training, our engineers and senior technicians manage every
                  aspect of your machine installation project.
                </p>
              </div>
              <div className="category-text">
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Complete project management from initial consultation
                    through final commissioning and validation
                  </p>
                </div>
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Site preparation guidance including foundation
                    specifications, power requirements, and environmental
                    controls
                  </p>
                </div>
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Professional rigging and installation services ensuring
                    precise leveling and alignment
                  </p>
                </div>
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Full electrical integration and control system setup with
                    thorough testing and calibration
                  </p>
                </div>
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Post-installation support including performance optimization
                    and production trial runs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="service-page-container">
            <img src={design} alt="Lead" className="service-page-image" />
            <div className="service-page-container-text">
              <div className="svg-containers">
                <DesignIcon2 />
              </div>
              <small>ENGINEERING SUPPORT</small>
              <div className="service-page-container-text-text">
                <h3>Custom Design & Engineering</h3>
                <p>
                  Leverage our engineering expertise to overcome manufacturing
                  challenges and optimize your production processes. Our team of
                  experienced engineers and senior technicians collaborate with
                  you from initial concept through final implementation,
                  delivering custom solutions precisely engineered for your
                  unique requirements.
                </p>
              </div>
              <div className="category-text">
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Custom fixturing and tooling design to maximize efficiency
                    and accuracy for your specific applications
                  </p>
                </div>
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Process optimization consulting to reduce cycle times,
                    improve quality, and minimize waste
                  </p>
                </div>
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    3D modeling and simulation services to validate designs
                    before manufacturing commitments
                  </p>
                </div>
                <div className="category-text-item">
                  <span>•</span>
                  <p>
                    Technical documentation and training materials to ensure
                    successful implementation and knowledge transfer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
