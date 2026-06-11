export default function About() {
  return (
    <section id="about" className="section-divider">
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 18 }}>
        <h2 style={{ margin: 0, fontSize: 20, color: "var(--text-primary)" }}>About Me</h2>
      </div>
      <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 260 }}>
          <p style={{ color: "var(--muted)" }}>
            I&apos;m Sanskar — a developer focused on building beautiful web experiences with polished
            UI/UX, animations, and modern frontend techniques.
          </p>
          <ul style={{ color: "var(--muted)", marginTop: 12, paddingLeft: 20 }}>
            <li>🎓 Diploma in Information Technology &amp; </li>
            <li>📍 Location: Ghaziabad, India</li>
            <li>💼 Available for freelance &amp; full-time roles</li>
          </ul>
        </div>
        <div style={{ width: 320 }}>
          <div className="hero-card" style={{ padding: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>Experience</div>
                <div style={{ fontWeight: 800, fontSize: 20 }}>2+ Years</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>Focus</div>
                <div style={{ fontWeight: 800, fontSize: 20 }}>Frontend, Backend &amp; AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
