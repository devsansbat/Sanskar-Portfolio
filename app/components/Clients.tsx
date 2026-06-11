"use client";

const CLIENTS = [
  { icon: "fa-building", name: "TechNova Inc", desc: "Web Development" },
  { icon: "fa-shopping-cart", name: "ShopEase", desc: "E-commerce Platform" },
  { icon: "fa-graduation-cap", name: "EduLearn", desc: "Educational Portal" },
  { icon: "fa-robot", name: "AI Solutions", desc: "Chatbot Development" },
  { icon: "fa-mobile-alt", name: "AppCraft", desc: "Mobile Interface" },
  { icon: "fa-paint-brush", name: "DesignHub", desc: "UI/UX Design" },
];

export default function Clients() {
  return (
    <section id="clients" className="section-divider">
      <div style={{ marginBottom: 12 }}>
        <h2 style={{ margin: 0, fontSize: 20, color: "var(--text-primary)" }}>Clients</h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 20,
        }}
      >
        {CLIENTS.map((c) => (
          <div
            key={c.name}
            style={{
              background: "var(--glass)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              transition: "all 0.3s ease",
              height: 120,
              cursor: "default",
              color: "var(--text-primary)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            }}
          >
            <i className={`fas ${c.icon}`} style={{ fontSize: 28, color: "var(--accent)" }} />
            <div style={{ fontWeight: 700, fontSize: 14, textAlign: "center" }}>{c.name}</div>
            <div style={{ fontSize: 12, color: "var(--muted)", textAlign: "center" }}>{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
