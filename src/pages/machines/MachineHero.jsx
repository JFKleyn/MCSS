import { Header } from "../../components/Header";
import "./MachineHero.css";

export function MachineHero(){
  return(
    <>
    <Header />
    <div className="machine-hero">
      <div className="machine-hero-container">
        <p>PRECISION INVENTORY</p>
        <h1>MACHINE TOOL CATEGORIES</h1>
        <p>Explore our comprehensive range of industrial machinery. Each category features meticulously inspected pre-owned equipment, ready for immediate deployment.</p>
      </div>
    </div>
    </>
  )
}