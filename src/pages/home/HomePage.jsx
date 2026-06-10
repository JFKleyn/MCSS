import { Footer } from "../../components/Footer";
import { HeroSection } from "./Hero"
import { WhyChooseUs } from "./WhyChooseUs";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <Footer />
    </>
  );
}