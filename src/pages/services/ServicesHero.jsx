import { Header } from "../../components/Header";
import "./ServicesHero.css"


export function ServicesHero(){
  return(
    <>
    <Header />
    <div className="services-hero">
      <div className="service-hero-header">
        <div className="service-hero-header-container">
          <small>OUR SERVICES</small>
          <h1 className="niche-header">
            Driven by Service. <br/> Defined by Commitment
          </h1>
        </div>
        <p>
          With 7 dedicated technicians on the ground in KZN, we deliver fast, reliable support where and when you need it. Backed by our partnerships with WD Hearn Machine Tools and Lead Machine Tools, and their nationwide technical teams, we bring you unmatched resources across South Africa. <br /> <br /> From conventional to CNC, laser, injection moulding, production, toolmaking, and fabrication—we cover it all. Our team is fully equipped to handle all major control systems, including Fanuc, Siemens, Mitsubishi, GSK, and more. <br /> <br /> We don't just supply machines—we deliver complete turnkey solutions, ensuring performance, uptime, and results.
        </p>

        <h4>Whatever the application. <br /> Whatever the challenge. <br />We've got it covered.</h4>

        <div className="service-hero-stats-container">
          <div className="service-hero-stats">
            <h2>80+</h2>
            <p>Years Experience</p>
          </div>
          <div className="service-hero-stats">
            <h2>7</h2>
            <p>Dedicated Technicians</p>
          </div>
          <div className="service-hero-stats">
            <h2>24/7</h2>
            <p>Support Available</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}