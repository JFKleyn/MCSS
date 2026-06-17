import { Footer } from "../../components/Footer";
import { HeroSection } from "./Hero"
import { WhyChooseUs } from "./WhyChooseUs";
import { HomeProducts } from "./HomeProducts";
import { HomeServices } from "./HomeServices";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <HomeProducts />
      <HomeServices />
      <Footer />
    </>
  );
}