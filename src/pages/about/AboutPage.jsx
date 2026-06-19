import { Footer } from "../../components/Footer";
import { AboutHero } from "./AboutHero";
import { OurStory } from "./OurStory";
import { OurTeam } from "./OurTeam"
import { OurCommitment } from "./OurCommitment"
import "./AboutPage.css";

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurTeam />
      <OurCommitment />
      <Footer />
    </>
  );
}