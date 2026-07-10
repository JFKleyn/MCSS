import myles from "../../assets/Myles.webp";
import donovan from "../../assets/Donovan.webp";
import brandon from "../../assets/Brandon.webp";
import shawn from "../../assets/Shawn.webp";
import gerdus from "../../assets/Gerdus.webp";
import { FadeIn } from "../../components/FadeIn";
import "./OurTeam.css";

export function OurTeam() {
  return (
    <div className="our-team-section">
      <FadeIn>
        <div className="section-header">
          <h2>Meet Our Team</h2>
          <p>
            Our dedicated professionals bring decades of combined experience in
            precision engineering and machine tools.
          </p>
        </div>
      </FadeIn>
      <div className="team-profile-container">
        <FadeIn>
          <div className="team-profile">
            <div className="profile-photo">
              <img src={myles} alt="" />
            </div>
            <div className="profile-text">
              <h4>Myles Crosthwaite</h4>
              <p>Director</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="team-profile">
            <div className="profile-photo">
              <img src={brandon} alt="" />
            </div>
            <div className="profile-text">
              <h4>Brandon Scott</h4>
              <p>Machine Tool Specialist</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="team-profile">
            <div className="profile-photo">
              <img src={shawn} alt="" />
            </div>
            <div className="profile-text">
              <h4>Shawn Mccabe</h4>
              <p>Technical Sales</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="team-profile">
            <div className="profile-photo">
              <img src={gerdus} alt="" />
            </div>
            <div className="profile-text">
              <h4>Gerdus Beukes</h4>
              <p>Technical Sales</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="team-profile">
            <div className="profile-photo">
              <img src={donovan} alt="" />
            </div>
            <div className="profile-text">
              <h4>Donovan Schmidt</h4>
              <p>Technical Service and Training Expert CNC</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
