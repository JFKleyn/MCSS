import { Footer } from "../../components/Footer";
import { Footer3 } from "./Footer3";
import { MachineCategories } from "./MachineCategories";
import { MachineHero } from "./MachineHero"


export function MachinePage() {
  return (
    <>
      <MachineHero />
      <MachineCategories />
      <Footer3 />
      <Footer />
    </>
  );
}