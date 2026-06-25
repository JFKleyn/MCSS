import { Header } from "../../components/Header";
import { FadeIn } from "../../components/FadeIn";

import "./ListingHero.css";

export function ListingHero() {
  return (
    <>
      <Header />
      <div className="machine-hero">
        <FadeIn>
          <div className="machine-hero-container">
            <p>PRECISION INVENTORY</p>
            <h1>MACHINE TOOL CATEGORIES</h1>
            <p>
              Explore our comprehensive range of industrial machinery. Each
              category features meticulously inspected pre-owned equipment,
              ready for immediate deployment.
            </p>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
