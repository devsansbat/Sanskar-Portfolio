export default function About() {
  return (
    <section id="about" className="section-divider">
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 18 }}>
        <h2 style={{ margin: 0, fontSize: 20, color: "var(--text-primary)" }}>About Me</h2>
      </div>
      <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "min(100%, 260px)" }}>
          <p style={{ color: "var(--muted)" }}>
            I&apos;m Sanskar — a developer focused on building beautiful web experiences with polished
            UI/UX, animations, and modern frontend techniques.
          </p>
          <ul style={{ color: "var(--muted)", marginTop: 12, paddingLeft: 0, listStyle: "none", lineHeight: 1.8 }}>
            <li key="degree" style={{ marginBottom: 4 }}>🎓 Diploma in Information Technology</li>
            <li key="location" style={{ marginBottom: 4 }}>📍 Location: Ghaziabad, India</li>
            <li key="availability">💼 Available for freelance &amp; full-time roles</li>
          </ul>
        </div>
        <div style={{ flex: "1 1 100%", maxWidth: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {/* Experience Box */}
            <div className="hero-card" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", display: "grid", placeItems: "center", color: "var(--accent)", fontSize: 20, flexShrink: 0 }}>
                <i className="fa-solid fa-briefcase" />
              </div>
              <div>
                <div style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", fontWeight: 700, letterSpacing: 0.5 }}>Experience</div>
                <div style={{ fontWeight: 900, fontSize: 22, color: "var(--text-primary)", marginTop: 2 }}>2+ Years</div>
              </div>
            </div>
            
            {/* Focus Box */}
            <div className="hero-card" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)", display: "grid", placeItems: "center", color: "#06b6d4", fontSize: 18, flexShrink: 0 }}>
                <i className="fa-solid fa-laptop-code" />
              </div>
              <div>
                <div style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", fontWeight: 700, letterSpacing: 0.5 }}>Focus</div>
                <div style={{ fontWeight: 800, fontSize: 14, color: "var(--text-primary)", marginTop: 4, lineHeight: 1.4 }}>
                  Frontend, Backend <br /><span style={{ color: "var(--accent)" }}>&amp; AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
