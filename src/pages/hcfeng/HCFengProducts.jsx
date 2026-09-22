import { Link } from "react-router";
import { FadeIn } from "../../components/FadeIn";
import { ArrowIcon } from "../../components/SVGIcons";
import { HCFengProductData } from "./HCFengProductData";
import "./HCFengProducts.css";

export function HCFengProducts() {
  return (
    <section className="hcfeng-products-section" id="hcfeng-products">
      <FadeIn>
        <div className="hcfeng-products-heading">
          <span className="hcfeng-eyebrow">HC FENG PRODUCTS</span>

          <h2>
            COMPLETE COOLANT
            <br />
            MANAGEMENT SOLUTIONS
          </h2>

          <p>
            Explore specialised solutions designed to keep cutting fluids
            cleaner, improve coolant management and support more efficient
            machining operations.
          </p>
        </div>
      </FadeIn>

      <div className="hcfeng-product-grid">
        {HCFengProductData.map((product, index) => (
          <FadeIn key={product.id}>
            <article className="hcfeng-product-card">
              <div className="hcfeng-product-image">
                <img src={product.image} alt={product.shortName} />

                <span className="hcfeng-product-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="hcfeng-product-content">
                <span className="hcfeng-product-brand">
                  HC FENG
                </span>

                <h3>{product.name}</h3>

                <p className="hcfeng-product-description">
                  {product.description}
                </p>

                <div className="hcfeng-feature-list">
                  {product.features.map((feature) => (
                    <div key={feature} className="hcfeng-feature">
                      <span></span>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/contact?product=${encodeURIComponent(product.id)}`}
                  className="hcfeng-enquire-link"
                >
                  <button>
                    <p>ENQUIRE NOW</p>
                    <ArrowIcon />
                  </button>
                </Link>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}