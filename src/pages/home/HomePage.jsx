import { Footer } from "../../components/Footer";
import { HeroSection } from "./Hero"
import { WhyChooseUs } from "./WhyChooseUs";
import { HomeProducts } from "./HomeProducts";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <HomeProducts />
      <Footer />
    </>
  );
}