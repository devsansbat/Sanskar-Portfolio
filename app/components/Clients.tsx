"use client";

// You can replace these with actual client logos if you have them.
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
      <style>{`
        .marquee-container {
          overflow: hidden;
          position: relative;
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          padding: 8px 0; /* Added padding to prevent clipping on hover */
        }
        .marquee-content {
          display: flex;
          animation: marquee 50s linear infinite;
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .client-item {
          flex-shrink: 0;
          width: 200px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 0 12px;
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 12px;
          color: var(--muted);
          transition: all 0.3s ease;
        }
        .client-item:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: scale(1.05);
          box-shadow: 0 0 15px -2px var(--accent-glow);
          background: rgba(124, 58, 237, 0.05);
        }
      `}</style>
      <div style={{ marginBottom: 24, textAlign: "center" }}>
        <h2 style={{ margin: 0, fontSize: 20, color: "var(--text-primary)" }}>Trusted By</h2>
        <div style={{ color: "var(--muted)", fontSize: 14, marginTop: 4 }}>A few of the clients and companies I've worked with.</div>
      </div>
      <div className="marquee-container">
        <div className="marquee-content">
          {[...CLIENTS, ...CLIENTS].map((c, index) => (
            <div
              key={`${c.name}-${index}`}
              className="client-item"
              title={c.desc}
            >
              <i className={`fas ${c.icon}`} style={{ fontSize: 22, color: "currentColor" }} />
              <span style={{ fontWeight: 600, fontSize: 15 }}>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
