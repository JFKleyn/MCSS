import { Footer } from "../../components/Footer";
import { Footer4 } from "./Footer4";
import { ToolsCategories } from "./ToolsCategories";
import { Helmet } from "react-helmet-async";
import { ToolsHero } from "./ToolsHero";

export function ToolsPage() {
  return (
    <>
      <Helmet>
        <title>
          Niche Tooling Solutions | Machine Tool Accessories & Support | MCSS
        </title>

        <meta
          name="description"
          content="MCSS supplies niche tooling solutions, machine tool accessories, cutting tools, toolholding, workholding and specialist engineering support for manufacturers throughout KwaZulu-Natal and South Africa."
        />

        <meta
          name="keywords"
          content="niche tooling, machine tooling, cutting tools, toolholding, workholding, machine tool accessories, CNC tooling, engineering tooling, tooling suppliers KZN, tooling South Africa"
        />

        <meta property="og:title" content="Niche Tooling Solutions | MCSS" />

        <meta
          property="og:description"
          content="Specialist tooling, machine tool accessories and engineering support for manufacturers across KwaZulu-Natal and South Africa."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.yourdomain.co.za/niche-tooling"
        />
      </Helmet>
      <ToolsHero />
      <ToolsCategories />
      <Footer4 />
      <Footer />
    </>
  );
}
