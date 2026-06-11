"use client";

const WebDevIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))" }}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="currentColor" fillOpacity="0.2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M10 8l-2 2 2 2" />
    <path d="M14 8l2 2-2 2" />
  </svg>
);

const AppIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))" }}>
    <rect x="5" y="2" width="14" height="20" rx="3" ry="3" fill="currentColor" fillOpacity="0.2" />
    <path d="M12 18h.01" strokeWidth="2" />
    <path d="M9 2h6" />
    <path d="M5 6h14" />
    <path d="M5 15h14" />
  </svg>
);

const RobotIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))" }}>
    <rect x="4" y="9" width="16" height="12" rx="3" fill="currentColor" fillOpacity="0.2" />
    <path d="M12 9V5" />
    <circle cx="12" cy="3" r="2" fill="currentColor" fillOpacity="0.4" />
    <path d="M8 14h.01" strokeWidth="2" />
    <path d="M16 14h.01" strokeWidth="2" />
    <path d="M9 19c1.5 1 4.5 1 6 0" />
    <path d="M2 13h2" />
    <path d="M20 13h2" />
  </svg>
);

const SERVICES = [
  {
    icon: <WebDevIcon />,
    title: "Web Development",
    desc: "Responsive websites, animations, and performance-first frontend.",
  },
  {
    icon: <AppIcon />,
    title: "App Interfaces",
    desc: "Mobile-first UI, PWA, and interactive prototypes.",
  },
  {
    icon: <RobotIcon />,
    title: "AI Chatbots",
    desc: "Telegram bots, assistant flows, and conversational UIs.",
  },
];

export default function WhatImDoing() {
  return (
    <section id="doing" className="section-divider">
      <div style={{ marginBottom: 28 }}>
        <h2 style={{ margin: 0, fontSize: 20, color: "var(--text-primary)" }}>What I&apos;m Doing</h2>
        <div style={{ color: "var(--muted)", fontSize: 14, marginTop: 4 }}>Services &amp; expertise</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {SERVICES.map((s) => (
          <div 
            key={s.title} 
            style={{ 
              background: "var(--glass)", 
              border: "1px solid var(--border)", 
              borderRadius: 16, 
              padding: 24, 
              transition: "all 0.3s ease",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 30px rgba(124,58,237,0.15)";
              
              const iconBox = e.currentTarget.querySelector('.icon-box') as HTMLElement;
              if (iconBox) {
                iconBox.style.background = "linear-gradient(135deg, rgba(124,58,237,1) 0%, rgba(124,58,237,0.8) 100%)";
                iconBox.style.color = "#fff";
                iconBox.style.transform = "scale(1.08) translateY(-2px)";
                iconBox.style.boxShadow = "0 10px 20px rgba(124,58,237,0.4), inset 0 2px 4px rgba(255,255,255,0.3)";
              }
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              
              const iconBox = e.currentTarget.querySelector('.icon-box') as HTMLElement;
              if (iconBox) {
                iconBox.style.background = "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0.02) 100%)";
                iconBox.style.color = "var(--accent)";
                iconBox.style.transform = "scale(1) translateY(0)";
                iconBox.style.boxShadow = "inset 0 1px 2px rgba(255,255,255,0.1), 0 8px 16px rgba(0,0,0,0.1)";
              }
            }}
          >
            {/* Realistic 3D Icon Box */}
            <div 
              className="icon-box"
              style={{ 
                width: 56, 
                height: 56, 
                borderRadius: 16, 
                background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0.02) 100%)", 
                border: "1px solid rgba(124,58,237,0.2)",
                boxShadow: "inset 0 1px 2px rgba(255,255,255,0.1), 0 8px 16px rgba(0,0,0,0.1)",
                color: "var(--accent)", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)"
              }}
            >
              {s.icon}
            </div>
            
            {/* Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ margin: "0 0 8px 0", color: "var(--text-primary)", fontSize: 17, fontWeight: 600 }}>{s.title}</h3>
              <p style={{ color: "var(--muted)", margin: 0, fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
