import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", "G-MTGVC218D1", {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null;
}