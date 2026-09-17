import coolantPurification from "../../assets/hcfeng/coolant-purification.webp";
import chipsSludgeRemoval from "../../assets/hcfeng/chips-sludge-removal.webp";
import automaticCoolantMixing from "../../assets/hcfeng/automatic-coolant-mixing.webp";
import centrifugalMagneticFilter from "../../assets/hcfeng/centrifugal-magnetic-filter.webp";
import miniOilSkimmer from "../../assets/hcfeng/mini-oil-skimmer.webp";

export const HCFengProductData = [
  {
    id: "coolant-purification-system",
    name: "CUTTING COOLANT PURIFICATION EQUIPMENT",
    shortName: "Coolant Purification System",
    image: coolantPurification,
    description:
      "An advanced coolant management solution designed to remove contaminants and unwanted oil from cutting fluids, helping maintain cleaner coolant and more consistent machining conditions.",
    features: [
      "Coolant purification",
      "Oil-water separation",
      "Coolant life management",
    ],
  },

  {
    id: "chips-sludge-removal-machine",
    name: "CHIPS & SLUDGE REMOVAL MACHINE",
    shortName: "Chips & Sludge Removal Machine",
    image: chipsSludgeRemoval,
    description:
      "A dedicated cleaning solution for removing metal chips, fine particles and sludge from machine coolant tanks while recovering reusable cutting fluid.",
    features: [
      "Chip and sludge removal",
      "Coolant recovery",
      "Tank cleaning",
    ],
  },

  {
    id: "automatic-coolant-mixing-refill",
    name: "AUTOMATIC COOLANT MIXING & REFILL SYSTEM",
    shortName: "Automatic Coolant Mixing & Refill System",
    image: automaticCoolantMixing,
    description:
      "Automates coolant mixing and replenishment to help maintain consistent coolant concentration and reduce the need for manual machine top-ups.",
    features: [
      "Automatic coolant mixing",
      "Automatic replenishment",
      "Consistent concentration",
    ],
  },

  {
    id: "centrifugal-magnetic-filter",
    name: "CENTRIFUGAL MAGNETIC FILTER",
    shortName: "Centrifugal Magnetic Filter",
    image: centrifugalMagneticFilter,
    description:
      "A specialised filtration solution designed to separate fine magnetic particles and grinding contamination from cutting and grinding fluids.",
    features: [
      "Fine particle filtration",
      "Magnetic separation",
      "Grinding fluid management",
    ],
  },

  {
    id: "mini-oil-skimmer",
    name: "MINI OIL SKIMMER",
    shortName: "Mini Oil Skimmer",
    image: miniOilSkimmer,
    description:
      "A compact solution for removing unwanted tramp oil from machine coolant, ideal for applications where space is limited or a smaller filtration system is required.",
    features: [
      "Tramp oil removal",
      "Compact installation",
      "Coolant maintenance",
    ],
  },
];