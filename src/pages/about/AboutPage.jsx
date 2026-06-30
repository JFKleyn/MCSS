import { Footer } from "../../components/Footer";
import { AboutHero } from "./AboutHero";
import { OurStory } from "./OurStory";
import { OurTeam } from "./OurTeam";
import { OurCommitment } from "./OurCommitment";
import { Footer2 } from "./Footer2";
import { Helmet } from "react-helmet-async";

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About MCSS | Machine Tool Specialists in KwaZulu-Natal</title>

        <meta
          name="description"
          content="Learn about MCSS, a trusted provider of machine tools, CNC machinery, tooling, servicing, training and turnkey engineering solutions throughout KwaZulu-Natal and South Africa."
        />

        <meta
          name="keywords"
          content="about MCSS, machine tool specialists, CNC specialists, engineering solutions, machine tooling experts, machine servicing, CNC support, KZN machine tools, South Africa engineering"
        />

        <meta
          property="og:title"
          content="About MCSS | Machine Tool Specialists in KwaZulu-Natal"
        />

        <meta
          property="og:description"
          content="MCSS provides machine tool solutions, CNC machinery, servicing, training and engineering support to businesses across South Africa."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://www.yourdomain.co.za/about" />
      </Helmet>
      <AboutHero />
      <OurStory />
      <OurTeam />
      <OurCommitment />
      <Footer2 />
      <Footer />
    </>
  );
}
