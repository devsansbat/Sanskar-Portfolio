const TESTIMONIALS = [
  {
    text: "Sanskar delivered our website with beautiful animations and excellent performance. His attention to detail is remarkable.",
    initials: "RK",
    name: "Rahul Kumar",
    role: "CEO, ExampleCo",
  },
  {
    text: "Fast, communicative, and great design sense. Sanskar transformed our web app with modern UI/UX principles.",
    initials: "PS",
    name: "Priya Sharma",
    role: "Product Manager",
  },
  {
    text: "Great attention to detail and micro-interactions. The chatbot Sanskar built for us increased user engagement by 40%.",
    initials: "AS",
    name: "Amit Singh",
    role: "Designer",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-divider">
      <div style={{ marginBottom: 12 }}>
        <h2 style={{ margin: 0, fontSize: 20, color: "var(--text-primary)" }}>Testimonials</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="testimonial-card">
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ color: "#FFD700", margin: "8px 0", fontSize: 14 }}>
                {"★★★★★"}
              </div>
              <p style={{ color: "var(--muted)", fontStyle: "italic", margin: 0 }}>&ldquo;{t.text}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 16 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "var(--grad1)",
                    display: "grid",
                    placeItems: "center",
                    color: "white",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>{t.name}</div>
                  <div style={{ margin: 0, fontSize: 13, color: "var(--muted)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
