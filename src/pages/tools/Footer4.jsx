import { Link } from "react-router-dom";

export function Footer4(){
  return(
    <div className="footer2-section">
      <h2>CAN'T FIND WHAT YOU'RE LOOKING FOR?</h2>
      <p>Our team of specialists can help you source the exact tooling you need. Contact us for custom orders, bulk pricing, or technical consultation.</p>
      <div className="footer2-buttons">
        <Link to={"/contact"}>
          <button className="footer2-btn1">
            <h5>CONTACT US NOW</h5>
          </button>
        </Link>
        <Link to={"/contact"}>
          <button className="footer2-btn2">
            <h5>REQUEST A QUOTE</h5>
          </button>
        </Link>
      </div>
    </div>
  )
}