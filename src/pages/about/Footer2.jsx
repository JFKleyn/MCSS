import { PhoneIcon, EmailIcon } from "../../components/SVGIcons";
import "./Footer2.css";

export function Footer2(){
  return(
    <div className="footer2-section">
      <h2>PRECISION SOLUTIONS START HERE</h2>
      <p>From precision tooling to expert support, our team is ready to deliver reliable solutions tailored to your operational needs.</p>
      <div className="footer2-buttons">
        <button className="footer2-btn1">
          <h5>CONTACT US NOW</h5>
        </button>
        <button className="footer2-btn2">
          <h5>REQUEST A QUOTE</h5>
        </button>
      </div>
      <div className="footer2-contact">
        <div className="footer2-contact-item">
          <PhoneIcon />
          <p>+27 83 268 4232</p>
        </div>
        <div className="footer2-contact-item">
          <EmailIcon />
          <p>myles@usedmachinetools.co.za</p>
        </div>
      </div>
    </div>
  )
}