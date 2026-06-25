import { ContactForm } from "../../components/ContactForm";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PhoneIcon, EmailIcon, ClockIcon2 } from "../../components/SVGIcons";
import { FadeIn } from "../../components/FadeIn";
import "./ContactPage.css"



export function ContactPage() {
  return (
    <>
    <Header />
    <div className="contact-section contact-page">
    <div className="section-header">
      <p>CONTACT US</p>
      <h1>GET IN TOUCH</h1>
    </div>
    <div className="contact-bodyy">
      <ContactForm />
      <FadeIn>
      <div className="contact-details">
        <div className="contact-details-text">
          <div className="contact-details-item">
            <div className="contact-svg">
              <PhoneIcon />
            </div>
            <div className="contact-details-items">
              <p className="notbold">PHONE</p>
              <p className="bold">+27 83 268 4232</p>
            </div>
          </div>
          <div className="contact-details-item">
            <div className="contact-svg">
              <EmailIcon />
            </div>
            <div className="contact-details-items">
              <p className="notbold">EMAIL</p>
              <p className="bold">myles@usedmachinetools.co.za</p>
            </div>
          </div>
          <div className="contact-details-item">
            <div className="contact-svg">
              <ClockIcon2 />
            </div>
            <div className="contact-details-items">
              <p className="notbold">BUSINESS HOURS</p>
              <p className="bold">Mon - Fri: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
        <div className="map-card">
          <iframe
            title="Unit 1, 4 Reed Place, Marlmead"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.0038109030525!2d30.84476307564875!3d-29.80643427028046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef6fe872f1c36a9%3A0x2bb219e7406c6455!2sUsed%20Machine%20Tools!5e0!3m2!1sen!2sus!4v1781770228630!5m2!1sen!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      </FadeIn>
    </div>
    </div>
    <Footer />
    </>
  );
}