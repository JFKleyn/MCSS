import { useEffect, useState } from "react";
import { getMachines } from "../../services/machines";
import { MachineCategory } from "../../components/MachineCategory/MachineCategory";
import "./MachineListing.css";
import { ListingHero } from "./ListingHero";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>
          Used Machine Tools for Sale | CNC & Engineering Machinery | MCSS
        </title>

        <meta
          name="description"
          content="Browse our range of quality used machine tools, CNC machines, lathes, milling machines and engineering equipment available for sale throughout KwaZulu-Natal and South Africa."
        />

        <meta
          name="keywords"
          content="
      used machine tools,
      used machine tools South Africa,
      used CNC machines,
      used lathes,
      used milling machines,
      second hand machine tools,
      engineering machinery,
      used engineering equipment,
      CNC machines for sale,
      machine tools KZN
    "
        />

        <meta
          property="og:title"
          content="Used Machine Tools for Sale | MCSS"
        />

        <meta
          property="og:description"
          content="Browse our range of used machine tools, CNC machinery, lathes, milling machines and engineering equipment available throughout South Africa."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.yourdomain.co.za/used-machines"
        />
      </Helmet>
      <ListingHero />
      <main className="machine-listing-page">
        {categories.map((category) => (
          <MachineCategory
            key={category}
            title={category}
            machines={machines.filter(
              (machine) => machine.category === category,
            )}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
