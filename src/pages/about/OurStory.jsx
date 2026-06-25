import { Timeline } from "../../components/Timeline";
import teamPhoto from "../../assets/TeamPhoto.png";
import { FadeIn } from "../../components/FadeIn";
import "./OurStory.css";

export function OurStory() {
  return (
    <div className="our-story-section">
      <FadeIn>
        <div className="section-header">
          <h2>Our Story</h2>
          <p>
            Built on a foundation of hands-on experience, technical expertise,
            and a deep understanding of the machine tool industry
          </p>
        </div>
      </FadeIn>
      <Timeline />
      <FadeIn>
        <div className="team-photo-container">
          <img src={teamPhoto} alt="TeamPhoto" className="team-photo" />
        </div>
      </FadeIn>
    </div>
  );
}
