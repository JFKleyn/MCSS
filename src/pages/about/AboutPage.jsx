import { Footer } from "../../components/Footer";
import { AboutHero } from "./AboutHero";
import { OurStory } from "./OurStory";
import { OurTeam } from "./OurTeam"
import { OurCommitment } from "./OurCommitment"
import { Footer2 } from "./Footer2"
import "./AboutPage.css";

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurTeam />
      <OurCommitment />
      <Footer2 />
      <Footer />
    </>
  );
}