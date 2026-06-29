import placeholder from "../../assets/placeholder.webp";
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
              <img src={placeholder} alt="" />
            </div>
            <div className="profile-text">
              <h4>Myles Crosthwaite</h4>
              <p>Branch Manager</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="team-profile">
            <div className="profile-photo">
              <img src={placeholder} alt="" />
            </div>
            <div className="profile-text">
              <h4>Brandon Scott</h4>
              <p>Executive Sales Engineer</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="team-profile">
            <div className="profile-photo">
              <img src={placeholder} alt="" />
            </div>
            <div className="profile-text">
              <h4>Shawn Mccabe</h4>
              <p>Executive Sales Engineer</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="team-profile">
            <div className="profile-photo">
              <img src={placeholder} alt="" />
            </div>
            <div className="profile-text">
              <h4>Vicky Angles</h4>
              <p>Key Administrator</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="team-profile">
            <div className="profile-photo">
              <img src={placeholder} alt="" />
            </div>
            <div className="profile-text">
              <h4>Gerdus Beukes</h4>
              <p>Service Team Manager</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="team-profile">
            <div className="profile-photo">
              <img src={placeholder} alt="" />
            </div>
            <div className="profile-text">
              <h4>Kyle Crosthwaite</h4>
              <p>Laser Expert Sales & Services</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
