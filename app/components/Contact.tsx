"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-divider">
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 24px;
        }
        @media (max-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
        .contact-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 14;
          outline: none;
          transition: all 0.2s ease;
        }
        .contact-input:focus {
          border-color: var(--accent);
          background: rgba(124,58,237,0.05);
          box-shadow: 0 0 0 3px rgba(124,58,237,0.15);
        }
        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .contact-info-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: var(--glass);
          border: 1px solid var(--border);
          color: var(--accent);
          font-size: 16px;
        }
      `}</style>
      <div style={{ marginBottom: 48, textAlign: "center" }}>
        <div style={{ color: "var(--accent)", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Get in Touch</div>
        <h2 style={{ margin: "0 0 16px 0", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>Let&apos;s Connect</h2>
        <div style={{ color: "var(--muted)", fontSize: 16, maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>Have a project in mind or just want to say hi? Feel free to reach out.</div>
      </div>

      <div className="contact-grid">
        {/* Left Info card */}
        <div className="hero-card" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="contact-info-item">
            <div className="contact-info-icon"><i className="fa-solid fa-envelope" /></div>
            <div>
              <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: 15 }}>Email</div>
              <a href="mailto:sanskarsri168@gmail.com" style={{ color: "var(--accent)", textDecoration: 'none', fontSize: 14, wordBreak: "break-all" }}>sanskarsri168@gmail.com</a>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon"><i className="fa-solid fa-map-marker-alt" /></div>
            <div>
              <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: 15 }}>Location</div>
              <div style={{ color: "var(--muted)", fontSize: 14 }}>Ghaziabad, India</div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 20, marginTop: "auto" }}>
            <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: 15, marginBottom: 12 }}>Follow Me</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="https://github.com/sanskarsri168" target="_blank" rel="noopener noreferrer" title="GitHub" className="social-link" key="github"><i className="fa-brands fa-github" /></a>
            <a href="https://www.linkedin.com/in/sanskarksrivastav/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-link" key="linkedin"><i className="fa-brands fa-linkedin" /></a>
            <a href="https://t.me/mr_sanskar_168" target="_blank" rel="noopener noreferrer" title="Telegram" className="social-link" key="telegram"><i className="fa-brands fa-telegram" /></a>
            <a href="https://www.instagram.com/mr_sanskar_168/" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-link" key="instagram"><i className="fa-brands fa-instagram" /></a>
          </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="hero-card">
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <input
                className="contact-input"
                placeholder="Your name"
                name="name"
                required
              />
              <input
                className="contact-input"
                placeholder="Email address"
                type="email"
                name="email"
                required
              />
            </div>
            <textarea
              className="contact-input"
              placeholder="Your message..."
              name="message"
              rows={5}
              required
              style={{ resize: "vertical" }}
            />
            <button 
              className="btn" 
              type="submit" 
              style={{ 
                marginTop: 8, 
                width: "100%", 
                justifyContent: "center", 
                padding: "12px 0",
                fontSize: 15,
                fontWeight: 600
              }}
            >
              {submitted ? (
                <>
                  <i className="fa-solid fa-check" /> Message Sent!
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
