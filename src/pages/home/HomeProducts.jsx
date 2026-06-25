import { Link } from "react-router";
import usedMachine from "../../assets/Product-UsedMachine.png";
import newMachine from "../../assets/Product-NewMachine.png";
import { FadeIn } from "../../components/FadeIn";
import niche from "../../assets/Product-Niche.png";
import "./HomeProducts.css";
import { ArrowIcon } from "../../components/SVGIcons";

export function HomeProducts() {
  return (
    <div className="product-section">
      <FadeIn>
        <div className="section-header">
          <p>ENGINEERED INVENTORY</p>
          <h2>OUR PRODUCTS</h2>
        </div>
      </FadeIn>
      <div className="product-containers">
        <FadeIn>
          <div className="product-container">
            <img src={usedMachine} alt="Lead" className="product-image" />
            <div className="product-container-text">
              <h4>Used Machine Tools</h4>
              <p>
                Fully inspected pre-owned inventory. Meticulously maintained
                industrial hardware for immediate deployment and cost-efficient
                scaling.
              </p>
              <div className="view-button-container">
                <Link to="/machine-listing">
                  <button>
                    <p>VIEW USED</p>
                    <ArrowIcon />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="product-container">
            <img src={newMachine} alt="Lead" className="product-image" />
            <div className="product-container-text">
              <h4>New Machine Tools</h4>
              <p>
                Next-generation CNC and manual tooling. Featuring the latest
                advancements in digital precision, automation, and industrial
                durability.
              </p>
              <div className="view-button-container">
                <Link to="/machines">
                  <button>
                    <p>VIEW NEW</p>
                    <ArrowIcon />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="product-container">
            <img src={niche} alt="Lead" className="product-image" />
            <div className="product-container-text">
              <h4>NICHE Africa Tools</h4>
              <p>
                Specialized tooling solutions. Precision instruments for
                industrial applications and artisan tooling. Provided by Niche
                Tooling.
              </p>
              <div className="view-button-container">
                <Link to="/machines">
                  <button>
                    <p>VIEW TOOLS</p>
                    <ArrowIcon />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
