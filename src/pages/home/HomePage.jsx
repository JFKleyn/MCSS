import { Helmet } from "react-helmet-async";
import { Footer } from "../../components/Footer";
import { HeroSection } from "./Hero";
import { WhyChooseUs } from "./WhyChooseUs";
import { HomeProducts } from "./HomeProducts";
import { HomeServices } from "./HomeServices";
import { HomeContact } from "./HomeContact";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>KZN Machine Tool Solutions | New & Used Machine Tools | MCSS</title>

        <meta
          name="description"
          content="MCSS supplies new and used machine tools, CNC machinery, tooling, servicing, training and turnkey engineering solutions throughout KwaZulu-Natal and South Africa."
        />

        <meta
          name="keywords"
          content="machine tools, CNC machines, used machine tools, machine tooling, CNC lathes, milling machines, engineering equipment, machine servicing, KZN, South Africa"
        />

        <meta
          property="og:title"
          content="KZN Machine Tool Solutions | MCSS"
        />

        <meta
          property="og:description"
          content="Industry-leading machine tool solutions, CNC machinery, servicing and turnkey engineering support throughout South Africa."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jfkleyn.github.io/MCSS/" />
      </Helmet>

      <HeroSection />
      <WhyChooseUs />
      <HomeProducts />
      <HomeServices />
      <HomeContact />
      <Footer />
    </>
  );
}