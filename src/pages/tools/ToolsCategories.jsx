import { ArrowIcon, PDFIcon } from "../../components/SVGIcons";
import { Link } from "react-router";
import { FadeIn } from "../../components/FadeIn";
import cAndM from "../../assets/CuttingAndMachining.webp";
import toolHolding from "../../assets/ToolHolding.webp";
import nicheTooling from "../../assets/pdfs/NICHE_tooling.pdf";
import nicheToolHolders from "../../assets/pdfs/NICHE_Tool_Holders.pdf";
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
              <a href={nicheTooling} download className="pdf">
                <button>
                  <PDFIcon />
                  <p>DOWNLOAD PDF</p>
                </button>
              </a>
              <Link to="/bev-contact">
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
              <a href={nicheToolHolders} download className="pdf">
                <button>
                  <PDFIcon />
                  <p>DOWNLOAD PDF</p>
                </button>
              </a>
              <Link to="/bev-contact">
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
