import { ShieldIcon, RibbonIcon, TickIcon, UptrendIcon } from "../../components/SVGIcons";
import { FadeIn } from "../../components/FadeIn";
import "./OurCommitment.css";

export function OurCommitment(){
  return(
    <div className="our-commitment-section">
      <FadeIn>
      <div className="section-header">
          <h2>Our Commitment</h2>
          <p>Partnered with WD HEARN MACHINE TOOLS since 2008, delivering excellence across all industries</p>
      </div>
      </FadeIn>
      <div className="our-commitment-container">
        <FadeIn>
        <div className="commitment">
          <div className="commitment-svg">
            <ShieldIcon />
          </div>
          <h4>Quality Assured</h4>
          <p>All equipment undergoes rigorous inspection and testing</p>
        </div>
        </FadeIn>
        <FadeIn>
        <div className="commitment">
          <div className="commitment-svg">
            <RibbonIcon />
          </div>
          <h4>Industry Certified</h4>
          <p>Certified service engineers with proven expertise</p>
        </div>
        </FadeIn>
        <FadeIn>
        <div className="commitment">
          <div className="commitment-svg">
            <TickIcon />
          </div>
          <h4>Warranty Protected</h4>
          <p>Comprehensive warranty coverage on all equipment</p>
        </div>
        </FadeIn>
        <FadeIn>
        <div className="commitment">
          <div className="commitment-svg">
            <UptrendIcon />
          </div>
          <h4>Continuous Innovation</h4>
          <p>Staying ahead with the latest technology and methods</p>
        </div>
        </FadeIn>
      </div>
    </div>
  )
}