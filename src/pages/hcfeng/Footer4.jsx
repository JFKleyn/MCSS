import { Link } from "react-router-dom";

export function Footer4(){
  return(
    <div className="footer2-section">
      <h2>INTERESTED IN An HCFENG PRODUCT?</h2>
      <p>Speak to our team about your machines, coolant system and current challenges. We'll help identify the HC FENG solution suited to your application.</p>
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