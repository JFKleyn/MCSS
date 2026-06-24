import { Footer } from "../../components/Footer";
import { Footer5 } from "./Footer5";
import { Services } from "./Services";
import { ServicesHero } from "./ServicesHero";



export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Services />
      <Footer5 />
      <Footer />
    </>
  );
}