import { Timeline } from "../../components/Timeline";
import teamPhoto from "../../assets/TeamPhoto.png"
import "./OurStory.css";

export function OurStory(){
  return(
    <div className="our-story-section">
      <div className="section-header">
          <h2>Our Story</h2>
          <p>Built on a foundation of hands-on experience, technical expertise, and a deep understanding of the machine tool industry</p>
        </div>
      <Timeline />
      <div className="team-photo-container">
        <img src={teamPhoto} alt="TeamPhoto" className="team-photo" />
      </div>
    </div>
  )
}