"use client";
import Image from "next/image";

const BmcIcon = () => {
  return (
    <Image
      src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
      alt="Buy Me A Coffee"
      className="bmc-icon"
      width={18}
      height={18}
      unoptimized
      style={{ marginLeft: 6, width: 18, height: 18, transition: "transform 0.3s ease" }}
    />
  );
};

const PROJECTS = [
  {
    image: "/project-learna-academy.jpg",
    title: "Learna Academy",
    tech: "React • Tailwind",
    desc: "An online learning platform UI with a clean and modern design, focusing on user experience and accessibility.",
    link: "https://learnaacademy.vercel.app/",
  },
  {
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop",
    title: "Harvestmart",
    tech: "Telegram Bot • Python",
    desc: "A conversational AI bot for Telegram that helps users find and order fresh produce from local farmers.",
    link: "https://harvesmart-sans.vercel.app/",
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    title: "Learna Academy UI",
    tech: "UI/UX • Animation",
    desc: "A design project focusing on creating an intuitive and engaging user interface with smooth animations.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ paddingTop: 60 }}>
      <style>{`
        @keyframes bmcWiggle {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.2) rotate(-8deg); }
          75% { transform: scale(1.2) rotate(8deg); }
        }
        .bmc-btn:hover .bmc-icon {
          animation: bmcWiggle 0.6s ease-in-out infinite;
        }
        .project-card {
          transition: all 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15), 0 0 16px rgba(124,58,237,0.1);
        }
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
        .project-image {
          transition: transform 0.4s ease;
        }
      `}</style>
      <div style={{ marginBottom: 48, textAlign: "center" }}>
        <div style={{ color: "var(--accent)", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Portfolio</div>
        <h2 style={{ margin: "0 0 16px 0", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>Recent Projects</h2>
        <div style={{ color: "var(--muted)", fontSize: 16, maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>A selection of projects that I&apos;m proud of.</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 20 }}>
        {PROJECTS.map((p) => (
          <div 
            key={p.title}
            className="project-card"
            style={{ 
              background: "var(--glass)", 
              border: "1px solid var(--border)", 
              borderRadius: 16, 
              overflow: "hidden",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div style={{ position: "relative", width: "100%", height: 160, overflow: "hidden", borderBottom: "1px solid var(--border)" }}>
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="project-image"
                style={{ objectFit: "cover" }}
                unoptimized={p.image.startsWith('http')}
              />
            </div>
            <div style={{ padding: 20, display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <div style={{ color: "var(--accent)", fontSize: 12, fontWeight: 700, marginBottom: 8, letterSpacing: 0.5, textTransform: "uppercase" }}>{p.tech}</div>
              <h3 style={{ margin: "0 0 8px 0", color: "var(--text-primary)", fontSize: 18, fontWeight: 600 }}>{p.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6, margin: 0, paddingBottom: 20, flexGrow: 1 }}>
                {p.desc}
              </p>
              
              {/* Actions */}
              <div style={{ display: "flex", gap: 10, marginTop: "auto", flexWrap: "wrap" }}>
                <a 
                  className="btn" 
                  href={p.link === "#" ? undefined : p.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ 
                    flex: 1, justifyContent: "center", fontSize: 13, padding: "8px 12px",
                    pointerEvents: p.link === "#" ? "none" : "auto",
                    opacity: p.link === "#" ? 0.5 : 1
                  }}>
                  Live Demo <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: 6, fontSize: 11 }} />
                </a>
                <a className="btn bmc-btn" href="https://www.buymeacoffee.com/sanskarsri" target="_blank" rel="noopener noreferrer" style={{ flex: 1, justifyContent: "center", fontSize: 13, padding: "8px 12px", background: "rgba(255,255,255,0.03)" }}>
                  Buy a Coffee <BmcIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
