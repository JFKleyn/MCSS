import { useEffect, useRef, useState } from "react";
import "./Timeline.css";

export function Timeline() {
  const timelineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const timeline = timelineRef.current;
        if (!timeline) return;

        const rect = timeline.getBoundingClientRect();
        const viewportCenter = window.innerHeight * 0.55;

        const progress = viewportCenter - rect.top;
        const percentage = Math.max(
          0,
          Math.min(progress / timeline.offsetHeight, 1)
        );

        setLineHeight(percentage);
        ticking = false;
      });

      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  useEffect(() => {
  const items = document.querySelectorAll(".timeline-item");

  const isMobile = window.innerWidth < 768;

  const observerOptions = isMobile
    ? {
        threshold: 0.25,
        rootMargin: "0px 0px -280px 0px",
      }
    : {
        threshold: 0.35,
        rootMargin: "0px 0px -430px 0px",
      };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, observerOptions);

  items.forEach((item) => observer.observe(item));

  return () => observer.disconnect();
}, []);

  return (
    <section className="timeline-section" ref={timelineRef}>
      <div className="timeline-line-bg"></div>

      <div
        className="timeline-line-active"
        style={{ transform: `scaleY(${lineHeight})` }}
      ></div>

      <div className="timeline-item left">
        <div className="timeline-dot"></div>

        <div className="timeline-card">
          <span>Early Career</span>

          <h3>Foundation in Engineering</h3>

          <p>
            After completing studies at George Campbell Technical High School, Myles went straight into a 5-year apprenticeship in Fitting & Turning, developing a strong engineering foundation. During this time, he gained practical experience operating CNC lathes, working with early Fanuc controls such as the 5T, 6T, and OT systems.
          </p>
        </div>
      </div>

      <div className="timeline-item right">
        <div className="timeline-dot"></div>

        <div className="timeline-card">
          <span>1991-2008</span>

          <h3>17 Years of Industry Expertise</h3>

          <p>
            Recruited into the machine tool industry, Myles spent 17 years specialising in service, installation, and training, with additional experience in sales. His exposure covered a wide range of equipment—from conventional machines to advanced CNC lathes, milling machines, EDM wire cutting, and spark eroding equipment—across various control platforms tailored to customer requirements.
          </p>
        </div>
      </div>

      <div className="timeline-item left">
        <div className="timeline-dot"></div>

        <div className="timeline-card">
          <span>2008</span>

          <h3>Founded Myles Crosthwaite Sales and Services</h3>

          <p>
            Through years of working closely with customers and understanding their operational challenges, Myles identified an opportunity to offer a more dedicated, service-driven approach. This vision led to the creation of Myles Crosthwaite Sales and Services.
          </p>
        </div>
      </div>

      <div className="timeline-item right">
        <div className="timeline-dot"></div>

        <div className="timeline-card">
          <span>Today</span>

          <h3>Trusted Industry Leader</h3>

          <p>
            The company stands on that same foundation: practical expertise, trusted service, and a commitment to delivering the right solution for every customer. Continuing to serve industries across South Africa with dedication and excellence.
          </p>
        </div>
      </div>
    </section>
  );
}