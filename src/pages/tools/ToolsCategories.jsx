import { ArrowIcon, PDFIcon } from "../../components/SVGIcons";
import { Link } from "react-router";
import { FadeIn } from "../../components/FadeIn";
import cAndM from "../../assets/CuttingAndMachining.png";
import toolHolding from "../../assets/ToolHolding.png";
import measuring from "../../assets/Measuring.png";
import grinding from "../../assets/Grinding.png";
import cncSupport from "../../assets/CNCSupport.png";
import "./ToolsCategories.css";

export function ToolsCategories() {
  return (
    <div className="machine-section">
      <FadeIn>
        <div
          className="tool-category"
          style={{
            backgroundImage: `url(${cAndM})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="tool-info">
            <div className="tool-header">
              <h2>CUTTING & MACHINING</h2>
              <div className="line"></div>
              <p>
                Precision cutting solutions for industrial machining.
                Comprehensive range of carbide inserts and specialized cutting
                tooling for CNC and manual operations.
              </p>
            </div>
            <div className="category-text">
              <p>
                <span>•</span> Cutting Tools & Inserts
              </p>
              <p>
                <span>•</span> End Mills & Drills
              </p>
              <p>
                <span>•</span> Turning & Threading Tools
              </p>
            </div>
            <div className="tool-buttons">
              <button className="pdf">
                <PDFIcon />
                <p>DOWNLOAD PDF</p>
              </button>
              <Link to="/contact">
                <button className="product-button">
                  <p>GET A QUOTE</p>
                  <ArrowIcon />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div
          className="tool-category"
          style={{
            backgroundImage: `url(${toolHolding})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="tool-info">
            <div className="tool-header">
              <h2>TOOL HOLDING & WORKHOLDING</h2>
              <div className="line"></div>
              <p>
                Industrial-grade tool holding systems and precision accessories.
                Complete range of holders, chucks, and mounting solutions for
                machining centers.
              </p>
            </div>
            <div className="category-text">
              <p>
                <span>•</span> Tool Holders & Accessories
              </p>
              <p>
                <span>•</span> Chucks, Collets & Vice
              </p>
              <p>
                <span>•</span> Workholding Equipment
              </p>
            </div>
            <div className="tool-buttons">
              <button className="pdf">
                <PDFIcon />
                <p>DOWNLOAD PDF</p>
              </button>
              <Link to="/contact">
                <button className="product-button">
                  <p>GET A QUOTE</p>
                  <ArrowIcon />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div
          className="tool-category"
          style={{
            backgroundImage: `url(${measuring})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="tool-info">
            <div className="tool-header">
              <h2>MEASURING & INSPECTION</h2>
              <div className="line"></div>
              <p>
                Professional metrology and measurement equipment for quality
                control. High-precision instruments for dimensional verification
                and process monitoring.
              </p>
            </div>
            <div className="category-text">
              <p>
                <span>•</span> Measuring Equipment
              </p>
              <p>
                <span>•</span> Metrology Equipment
              </p>
              <p>
                <span>•</span> Gauges & Indicators
              </p>
            </div>
            <div className="tool-buttons">
              <button className="pdf">
                <PDFIcon />
                <p>DOWNLOAD PDF</p>
              </button>
              <Link to="/contact">
                <button className="product-button">
                  <p>GET A QUOTE</p>
                  <ArrowIcon />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div
          className="tool-category"
          style={{
            backgroundImage: `url(${grinding})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="tool-info">
            <div className="tool-header">
              <h2>GRINDING & FINISHING</h2>
              <div className="line"></div>
              <p>
                Complete surface finishing and grinding solutions.
                Professional-grade abrasives and precision grinding equipment
                for superior surface quality.
              </p>
            </div>
            <div className="category-text">
              <p>
                <span>•</span> Grinding & Finishing Tools
              </p>
              <p>
                <span>•</span> Abrasives & Polishing
              </p>
            </div>
            <div className="tool-buttons">
              <button className="pdf">
                <PDFIcon />
                <p>DOWNLOAD PDF</p>
              </button>
              <Link to="/contact">
                <button className="product-button">
                  <p>GET A QUOTE</p>
                  <ArrowIcon />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div
          className="tool-category"
          style={{
            backgroundImage: `url(${cncSupport})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="tool-info">
            <div className="tool-header">
              <h2>CNC SUPPORT</h2>
              <div className="line"></div>
              <p>
                Essential CNC machine accessories and support equipment. Coolant
                systems, machine accessories, and replacement parts for optimal
                machine performance.
              </p>
            </div>
            <div className="category-text">
              <p>
                <span>•</span> CNC Accessories
              </p>
              <p>
                <span>•</span> Machine Accessories
              </p>
              <p>
                <span>•</span> Coolant & Lubrication Systems
              </p>
            </div>
            <div className="tool-buttons">
              <button className="pdf">
                <PDFIcon />
                <p>DOWNLOAD PDF</p>
              </button>
              <Link to="/contact">
                <button className="product-button">
                  <p>GET A QUOTE</p>
                  <ArrowIcon />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
