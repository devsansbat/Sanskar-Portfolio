"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar"));
const Hero = dynamic(() => import("./components/Hero"));
const Footer = dynamic(() => import("./components/Footer"));
const About = dynamic(() => import("./components/About"));
const Qualifications = dynamic(() => import("./components/Qualifications"));
const WhatImDoing = dynamic(() => import("./components/WhatImDoing"));
const Skills = dynamic(() => import("./components/Skills"));
const Projects = dynamic(() => import("./components/Projects"));
const Certificates = dynamic(() => import("./components/Certificates"));
const Testimonials = dynamic(() => import("./components/Testimonials"));
const Clients = dynamic(() => import("./components/Clients"));
const Contact = dynamic(() => import("./components/Contact"));
const NoInternet = dynamic(() => import("./components/NoInternet"), { ssr: false }); 

function AppointmentSection() {
  return (
    <section id="appointment" className="section-divider" style={{ padding: "40px 0 20px" }}>
      <style>{`
        .appointment-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.2fr;
          gap: 24px;
          align-items: stretch;
        }
        @media (max-width: 900px) {
          .appointment-grid {
            grid-template-columns: 1fr;
          }
        }
        .appointment-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 18px;
          border-radius: 12px;
          border: 1px solid transparent;
          font-family: inherit;
          font-size: 14px;
          font-weight: 700;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .appointment-btn.primary {
          background: linear-gradient(135deg, var(--accent), #3b82f6);
          color: white;
          box-shadow: 0 12px 28px rgba(124, 58, 237, 0.25);
        }
        .appointment-btn.secondary {
          background: rgba(255,255,255,0.02);
          color: var(--text-primary);
          border-color: var(--border);
        }
        .appointment-btn:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <div style={{ marginBottom: 30 }}> 
        <div style={{ color: "var(--accent)", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Book a Call</div>
        <h2 style={{ margin: "0 0 12px 0", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>Schedule a quick consultation</h2>
        <div style={{ color: "var(--muted)", fontSize: 15, maxWidth: 520, lineHeight: 1.6 }}>
          Available for project discussions, technical consulting, UI feedback, and product planning sessions.
        </div>
      </div>

      <div className="appointment-grid">
        <div className="hero-card" style={{ padding: 26, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(59, 130, 246, 0.12)", display: "grid", placeItems: "center", color: "var(--accent)", border: "1px solid rgba(59,130,246,0.2)" }}>
              <i className="fa-solid fa-calendar-check" />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 16 }}>30-minute consultation</div>
              <div style={{ color: "var(--muted)", fontSize: 13 }}>Tue - Sat · 10:00 AM - 6:00 PM IST</div>
            </div>
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            {[
              "Project scoping and feasibility discussion",
              "Frontend architecture and UI improvement feedback",
              "Freelance collaboration and product planning",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--muted)", fontSize: 14 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 10px rgba(124,58,237,0.5)" }} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-card" style={{ padding: 26, display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 }}>
          <div style={{ fontSize: 15, lineHeight: 1.7, color: "var(--muted)" }}>
            Need help with a dashboard, landing page, portfolio, or product frontend? Book a quick call and we can discuss goals, timeline, and execution.
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href="https://calendly.com" target="_blank" rel="noreferrer" className="appointment-btn primary">
              <i className="fa-solid fa-video" />
              Schedule a call
            </a>
            <a href="mailto:sanskarsri168@gmail.com" className="appointment-btn secondary">
              <i className="fa-solid fa-envelope" />
              Email me
            </a>
          </div>

          <div style={{ color: "var(--muted)", fontSize: 12, borderTop: "1px solid var(--border)", paddingTop: 12 }}>
            Response time: usually within 12 hours.
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px", minHeight: "calc(100vh - 200px)" }}>
        <Hero />
        <About />
        <Qualifications />
        <WhatImDoing />
        <Skills />
        <Projects />
        <Certificates />
        <Testimonials />
        <AppointmentSection />
        <Clients />
        <Contact />
        <Footer />
      </main>
      <NoInternet /> 
    </>
  );
}
