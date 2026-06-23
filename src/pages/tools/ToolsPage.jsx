import { Footer } from "../../components/Footer";
import { Footer4 } from "./Footer4";
import { ToolsCategories } from "./ToolsCategories";
import { ToolsHero } from "./ToolsHero";


export function ToolsPage() {
  return (
    <>
      <ToolsHero />
      <ToolsCategories />
      <Footer4 />
      <Footer />
    </>
  );
}