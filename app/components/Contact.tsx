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
      <div style={{ marginBottom: 12 }}>
        <h2 style={{ margin: 0, fontSize: 20, color: "var(--text-primary)" }}>Contact</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 18 }}>
        {/* Form */}
        <div className="hero-card">
          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <input
                placeholder="Your name"
                required
                style={{
                  width: "100%",
                  padding: 12,
                  borderRadius: 10,
                  border: "1px solid var(--border)",
                  background: "transparent",
                  color: "var(--text-primary)",
                  fontFamily: "inherit",
                  fontSize: 14,
                  outline: "none",
                }}
              />
              <input
                placeholder="Email"
                type="email"
                required
                style={{
                  width: "100%",
                  padding: 12,
                  borderRadius: 10,
                  border: "1px solid var(--border)",
                  background: "transparent",
                  color: "var(--text-primary)",
                  fontFamily: "inherit",
                  fontSize: 14,
                  outline: "none",
                }}
              />
            </div>
            <textarea
              placeholder="Message"
              rows={6}
              required
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 10,
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--text-primary)",
                resize: "none",
                fontFamily: "inherit",
                fontSize: 14,
                marginTop: 12,
                outline: "none",
              }}
            />
            <button className="btn" type="submit" style={{ marginTop: 10, width: "100%", justifyContent: "center" }}>
              {submitted ? "✅ Sent!" : "Send Message"}
            </button>
          </form>
        </div>

        {/* Info card */}
        <div className="hero-card">
          <div style={{ fontWeight: 800 }}>Get in touch</div>
          <div style={{ color: "var(--muted)", marginTop: 8 }}>
            You can reach me on social platforms or send a message through this form.
          </div>
          <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
            <a href="#" title="GitHub" className="social-link"><i className="fa-brands fa-github" /></a>
            <a href="#" title="LinkedIn" className="social-link"><i className="fa-brands fa-linkedin" /></a>
            <a href="#" title="Telegram" className="social-link"><i className="fa-brands fa-telegram" /></a>
          </div>
          <div style={{ marginTop: 12, color: "var(--muted)", fontSize: 13 }}>
            <strong>Email:</strong>{" "}
            <span style={{ color: "var(--accent)" }}>youremail@example.com</span>
            <br />
            <strong>Location:</strong> India
          </div>
        </div>
      </div>
    </section>
  );
}
