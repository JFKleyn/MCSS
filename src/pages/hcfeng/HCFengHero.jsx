import { Header } from "../../components/Header";
import { Link } from "react-router";
import { FadeIn } from "../../components/FadeIn";
import heroImage from "../../assets/hcfeng/hcfeng.webp";
import "./HCFengHero.css";

export function HCFengHero() {
  return (
    <>
      <Header />

      <section
        className="hcfeng-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hcfeng-hero-overlay"></div>

        <FadeIn>
          <div className="hcfeng-hero-content">
            <span>ADVANCED COOLANT MANAGEMENT</span>

            <h1>
              HC FENG
              <br />
              <strong>COOLANT SOLUTIONS</strong>
            </h1>

            <p>
              Smarter filtration, purification and coolant management
              solutions for modern machining environments.
            </p>

            <div className="hcfeng-hero-buttons">
              <a href="#hcfeng-products">
                <button>EXPLORE PRODUCTS</button>
              </a>

              <Link to="/contact">
                <button className="hcfeng-outline-button">
                  TALK TO OUR TEAM
                </button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}