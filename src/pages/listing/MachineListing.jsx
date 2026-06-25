import { useEffect, useState } from "react";
import { getMachines } from "../../services/machines";
import { MachineCategory } from "../../components/MachineCategory/MachineCategory";
import "./MachineListing.css";
import { ListingHero } from "./ListingHero";
import { Footer } from "../../components/Footer";

const categories = [
  "CNC Machines",
  "Fabrication",
  "Conventional Machines",
  "Specialized Machines",
];

export function MachineListing() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    async function loadMachines() {
      try {
        const data = await getMachines();
        setMachines(data);
      } catch (error) {
        console.error("Error loading machines:", error);
      }
    }

    loadMachines();
  }, []);

  return (
    <>
    <ListingHero />
    <main className="machine-listing-page">
      {categories.map((category) => (
        <MachineCategory
          key={category}
          title={category}
          machines={machines.filter((machine) => machine.category === category)}
        />
      ))}
    </main>
    <Footer />
    </>
  );
}