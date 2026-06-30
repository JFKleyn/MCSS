import { Footer } from "../../components/Footer";
import { Footer5 } from "./Footer5";
import { Services } from "./Services";
import { ServicesHero } from "./ServicesHero";
import { Helmet } from "react-helmet-async";

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>
          Machine Tool Services | Servicing, Training & Turnkey Solutions | MCSS
        </title>

        <meta
          name="description"
          content="MCSS provides machine tool servicing, operator training, turnkey engineering solutions, machine integration and technical support for manufacturers throughout KwaZulu-Natal and South Africa."
        />

        <meta
          name="keywords"
          content="
      machine tool servicing,
      CNC machine servicing,
      machine tool training,
      turnkey engineering solutions,
      machine integration,
      engineering support,
      CNC support,
      machine maintenance,
      industrial servicing,
      machine tools South Africa
    "
        />

        <meta property="og:title" content="Machine Tool Services | MCSS" />

        <meta
          property="og:description"
          content="Professional machine tool servicing, training, turnkey engineering solutions and technical support throughout South Africa."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.yourdomain.co.za/services"
        />
      </Helmet>
      <ServicesHero />
      <Services />
      <Footer5 />
      <Footer />
    </>
  );
}
