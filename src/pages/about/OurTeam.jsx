import placeholder from "../../assets/placeholder.png"
import "./OurTeam.css";

export function OurTeam(){
  return(
    <div className="our-team-section">
      <div className="section-header">
          <h2>Meet Our Team</h2>
          <p>Our dedicated professionals bring decades of combined experience in precision engineering and machine tools.</p>
      </div>
      <div className="team-profile-container">
        <div className="team-profile">
          <div className="profile-photo">
            <img src={placeholder} alt="" />
          </div>
          <div className="profile-text">
            <h4>Myles Crosthwaite</h4>
            <p>Branch Manager</p>
          </div>
        </div>
        <div className="team-profile">
          <div className="profile-photo">
            <img src={placeholder} alt="" />
          </div>
          <div className="profile-text">
            <h4>Brandon Scott</h4>
            <p>Executive Sales Engineer</p>
          </div>
        </div>
        <div className="team-profile">
          <div className="profile-photo">
            <img src={placeholder} alt="" />
          </div>
          <div className="profile-text">
            <h4>Shawn Mccabe</h4>
            <p>Executive Sales Engineer</p>
          </div>
        </div>
        <div className="team-profile">
          <div className="profile-photo">
            <img src={placeholder} alt="" />
          </div>
          <div className="profile-text">
            <h4>Vicky Angles</h4>
            <p>Key Administrator</p>
          </div>
        </div>
        <div className="team-profile">
          <div className="profile-photo">
            <img src={placeholder} alt="" />
          </div>
          <div className="profile-text">
            <h4>Gerdus Beukes</h4>
            <p>Service Team Manager</p>
          </div>
        </div>
        <div className="team-profile">
          <div className="profile-photo">
            <img src={placeholder} alt="" />
          </div>
          <div className="profile-text">
            <h4>Kyle Crosthwaite</h4>
            <p>Laser Expert Sales & Services</p>
          </div>
        </div>
      </div>
    </div>
  )
}