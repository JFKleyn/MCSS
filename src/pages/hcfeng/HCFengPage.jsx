import { Helmet } from "react-helmet-async";
import { Footer } from "../../components/Footer";
import { HCFengHero } from "./HCFengHero";
import { HCFengProducts } from "./HCFengProducts.jsx";
import "./HCFengPage.css";
import { Footer4 } from "./Footer4.jsx";

export function HCFengPage() {
  return (
    <>
      <Helmet>
        <title>
          HC FENG Coolant Management & Filtration Systems | MCSS
        </title>

        <meta
          name="description"
          content="Explore HC FENG coolant management solutions from MCSS, including coolant purification, chip and sludge removal, automatic coolant mixing, magnetic filtration and oil skimming systems."
        />

        <meta
          name="keywords"
          content="HC FENG South Africa, coolant purification, coolant filtration, coolant management, chip removal, sludge removal, coolant mixing system, magnetic filtration, oil skimmer, CNC coolant, MCSS"
        />

        <meta
          property="og:title"
          content="HC FENG Coolant Management Solutions | MCSS"
        />

        <meta
          property="og:description"
          content="Advanced HC FENG coolant purification, filtration and management solutions supplied by MCSS."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.kznmts.co.za/hcfeng"
        />

        <link
          rel="canonical"
          href="https://www.kznmts.co.za/hcfeng"
        />
      </Helmet>

      <HCFengHero />

      <main className="hcfeng-page">
        <HCFengProducts />

        <section className="hcfeng-process">
          <div className="hcfeng-process-inner">
            <span className="hcfeng-eyebrow">
              COMPLETE COOLANT MANAGEMENT
            </span>

            <h2>
              A CLEANER, SMARTER APPROACH TO COOLANT MANAGEMENT
            </h2>

            <p className="hcfeng-process-intro">
              HC FENG solutions address different stages of coolant
              maintenance — from removing chips and sludge to filtration,
              purification, mixing and ongoing coolant management.
            </p>

            <div className="hcfeng-process-flow">
              <div className="process-item">
                <span>01</span>
                <h3>REMOVE</h3>
                <p>Remove chips, sludge and solid contamination.</p>
              </div>

              <div className="process-arrow">→</div>

              <div className="process-item">
                <span>02</span>
                <h3>FILTER</h3>
                <p>Separate unwanted oils and fine particles.</p>
              </div>

              <div className="process-arrow">→</div>

              <div className="process-item">
                <span>03</span>
                <h3>PURIFY</h3>
                <p>Maintain cleaner cutting fluid for continued use.</p>
              </div>

              <div className="process-arrow">→</div>

              <div className="process-item">
                <span>04</span>
                <h3>MAINTAIN</h3>
                <p>Manage coolant concentration and replenishment.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="hcfeng-benefits">
          <div className="hcfeng-benefits-header">
            <span className="hcfeng-eyebrow">WHY HC FENG?</span>

            <h2>
              BUILT AROUND MORE EFFICIENT MACHINING
            </h2>
          </div>

          <div className="hcfeng-benefit-grid">
            <div className="hcfeng-benefit">
              <span>01</span>
              <h3>REDUCE DOWNTIME</h3>
              <p>
                Simplify coolant maintenance and reduce unnecessary
                interruptions to production.
              </p>
            </div>

            <div className="hcfeng-benefit">
              <span>02</span>
              <h3>EXTEND COOLANT LIFE</h3>
              <p>
                Remove contaminants and unwanted oils that negatively
                affect coolant condition.
              </p>
            </div>

            <div className="hcfeng-benefit">
              <span>03</span>
              <h3>REDUCE WASTE</h3>
              <p>
                Recover and maintain usable coolant instead of replacing
                it unnecessarily.
              </p>
            </div>
          </div>
        </section>

        <Footer4 />
      </main>

      <Footer />
    </>
  );
}