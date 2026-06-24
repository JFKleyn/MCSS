import { Footer } from "../../components/Footer";
import { Services } from "./Services";
import { ServicesHero } from "./ServicesHero";



export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Services />
      <Footer />
    </>
  );
}