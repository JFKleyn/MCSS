import { Header } from "../../components/Header";
import hero from "../../assets/AboutBackround.png"
import "./AboutHero.css";

export function AboutHero(){
  return(
    <>
    <Header />
    <div className="about-hero" style={{ backgroundImage: `url(${hero})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat" }}>
      <div className="about-hero-headline">
        <p>Precision Engineering since 1994</p>
      </div>
      <h1>ABOUT US</h1>
    </div>
    </>
  )
}