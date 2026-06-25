import { Header } from "../../components/Header";
import hero from "../../assets/AboutBackround.png";
import { FadeIn } from "../../components/FadeIn";
import "./AboutHero.css";

export function AboutHero() {
  return (
    <>
      <Header />
      <div
        className="about-hero"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <FadeIn>
          <div className="about-hero-headline">
            <p>Precision Engineering since 1994</p>
          </div>
          <h1>ABOUT US</h1>
        </FadeIn>
      </div>
    </>
  );
}
