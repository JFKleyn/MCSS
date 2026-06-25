import { ArrowIcon } from "../../components/SVGIcons";
import cnc from "../../assets/CNC.png"
import fabrication from "../../assets/Fabrication.png"
import conventional from "../../assets/Conventional.png"
import specialized from "../../assets/Specialized.png"
import "./MachineCategories.css";
import { Link } from "react-router-dom";

export function MachineCategories(){
  return(
    <div className="machine-section">
      <div className="machine-category">
        <div className="category-images">
          <img src={cnc} alt="" className="category-image" />
        </div>
        <div className="category-info">
          <div className="category-header">
            <small>——— PRECISION AUTOMATION</small>
            <h2>CNC MACHINES</h2>
          </div>
          <div className="category-text">
            <p><span>•</span> CNC Lathes</p>
            <p><span>•</span> CNC Milling Machines</p>
            <p><span>•</span> Machining Centres</p>
            <p><span>•</span> CNC Grinding Machines</p>
          </div>
          <Link to={"/machine-listing"}>
            <button>
              <p>VIEW AVAILABLE MACHINES</p>
              <ArrowIcon />
            </button>
          </Link>
        </div>
      </div>
      <div className="machine-category">
        <div className="category-images">
          <img src={fabrication} alt="" className="category-image" />
        </div>
        <div className="category-info">
          <div className="category-header">
            <small>——— METAL FORMING & CUTTING</small>
            <h2>FABRICATION</h2>
          </div>
          <div className="category-text">
            <p><span>•</span> Press Brakes</p>
            <p><span>•</span> Laser Cutting Machines</p>
            <p><span>•</span> Plasma & Waterjet Cutting</p>
          </div>
          <Link to={"/machine-listing"}>
            <button>
              <p>VIEW AVAILABLE MACHINES</p>
              <ArrowIcon />
            </button>
          </Link>
        </div>
      </div>
      <div className="machine-category">
        <div className="category-images">
          <img src={conventional} alt="" className="category-image" />
        </div>
        <div className="category-info">
          <div className="category-header">
            <small>——— TRADITIONAL MACHINING</small>
            <h2>CONVENTIONAL MACHINES</h2>
          </div>
          <div className="category-text">
            <p><span>•</span> Drilling Machines</p>
            <p><span>•</span> Saws & Cutting Machines</p>
            <p><span>•</span> Conventional Lathese</p>
            <p><span>•</span> Conventional Milling Machines</p>
          </div>
          <Link to={"/machine-listing"}>
            <button>
              <p>VIEW AVAILABLE MACHINES</p>
              <ArrowIcon />
            </button>
          </Link>
        </div>
      </div>
      <div className="machine-category">
        <div className="category-images">
          <img src={specialized} alt="" className="category-image" />
        </div>
        <div className="category-info">
          <div className="category-header">
            <small>——— ADVANCED PROCESSES</small>
            <h2>SPECIALIZED MACHINES</h2>
          </div>
          <div className="category-text">
            <p><span>•</span> EDM & Wire EDM</p>
            <p><span>•</span> Boring Mills</p>
            <p><span>•</span> Injection Moulding Machines</p>
            <p><span>•</span> CNC Grinding Machines</p>
          </div>
          <Link to={"/machine-listing"}>
            <button>
              <p>VIEW AVAILABLE MACHINES</p>
              <ArrowIcon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}