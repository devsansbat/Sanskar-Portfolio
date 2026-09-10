"use client";
import { useState } from "react";

const CATEGORIES = ["All", "Frontend", "Backend", "Tools"];

const SKILLS = [
  { icon: "fab fa-html5", color: "#E34F26", name: "HTML", category: "Frontend" },
  { icon: "fab fa-css3-alt", color: "#1572B6", name: "CSS", category: "Frontend" },
  { icon: "fab fa-js", color: "#F7DF1E", name: "JavaScript", category: "Frontend" },
  { icon: "fab fa-react", color: "#61DAFB", name: "React", category: "Frontend" },
  { icon: "fab fa-python", color: "#3776AB", name: "Python", category: "Backend" },
  { icon: "fab fa-node-js", color: "#339933", name: "Node.js", category: "Backend" },
  { icon: "fas fa-database", color: "#00618A", name: "MongoDB", category: "Backend" },
  { icon: "fab fa-git-alt", color: "#F05032", name: "Git", category: "Tools" },
  { icon: "fab fa-figma", color: "#F24E1E", name: "Figma", category: "Tools" },
  { icon: "fab fa-github", color: "#888888", name: "GitHub", category: "Tools" },
];

export default function Skills() {
  const [activeCat, setActiveCat] = useState("All");

  const filteredSkills = activeCat === "All" ? SKILLS : SKILLS.filter(s => s.category === activeCat);

  return (
    <section id="skills" style={{ paddingTop: 60 }}>
      <style>{`
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .anim-wrapper {
          display: inline-block;
          animation: iconFloat 3.5s ease-in-out infinite;
        }
        /* Har icon ka timing thoda alag karne ke liye delay lagaya hai */
        .skill-item:nth-child(even) .anim-wrapper { animation-delay: -1.2s; }
        .skill-item:nth-child(3n) .anim-wrapper { animation-delay: -2.4s; }
        
        .skill-item {
          padding: 12px;
          cursor: default;
          position: relative; /* Tooltip positioning ke liye zaroori */
        }
        .skill-name {
          position: absolute;
          bottom: -18px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--card);
          color: var(--text-primary);
          padding: 3px 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          border: 1px solid var(--border);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .skill-item i {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .skill-item:hover i {
          transform: scale(1.25) translateY(-4px);
          filter: drop-shadow(0 8px 16px var(--brand-color));
          animation-play-state: paused; /* Floating animation ko hover par rokne ke liye */
        }
        .skill-item:hover .skill-name {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(8px);
        }
      `}</style>

      <div style={{ marginBottom: 12 }}>
        <h2 style={{ margin: 0, fontSize: 20, color: "var(--text-primary)" }}>Skills</h2>
        <div style={{ color: "var(--muted)", fontSize: 14, marginTop: 6 }}>Tools &amp; technologies I use</div>
      </div>

      {/* Category Buttons */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            style={{
              padding: "6px 16px",
              borderRadius: 20,
              background: activeCat === cat ? "var(--accent)" : "transparent",
              color: activeCat === cat ? "#fff" : "var(--muted)",
              border: `1px solid ${activeCat === cat ? "var(--accent)" : "var(--border)"}`,
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 500,
              transition: "all 0.3s ease",
              fontFamily: "inherit"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px 24px",
        }}
      >
        {filteredSkills.map((s) => (
          <div key={s.name} className="skill-item" style={{ "--brand-color": s.color } as React.CSSProperties}>
            <div className="anim-wrapper" style={{ animationPlayState: 'running' }}>
              <i className={s.icon} style={{ fontSize: 36, color: s.color }} />
            </div>
            <span className="skill-name">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
 