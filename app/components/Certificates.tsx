"use client";
 import { useState } from "react";

const PremiumVerifiedIcon = () => (
   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="verifiedBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    {/* Premium Rosette (Starburst) Background */}
    <path d="M10.5213 2.62368C11.3147 1.75231 12.6853 1.75231 13.4787 2.62368L14.4989 3.74391C14.8998 4.18418 15.4761 4.42288 16.071 4.39508L17.5845 4.32435C18.7614 4.26934 19.7307 5.23857 19.6757 6.41554L19.6049 7.92905C19.5771 8.52388 19.8158 9.10016 20.2561 9.50111L21.3763 10.5213C22.2477 11.3147 22.2477 12.6853 21.3763 13.4787L20.2561 14.4989C19.8158 14.8998 19.5771 15.4761 19.6049 16.071L19.6757 17.5845C19.7307 18.7614 18.7614 19.7307 17.5845 19.6757L16.071 19.6049C15.4761 19.5771 14.8998 19.8158 14.4989 20.2561L13.4787 21.3763C12.6853 22.2477 11.3147 22.2477 10.5213 21.3763L9.50111 20.2561C9.10016 19.8158 8.52388 19.5771 7.92905 19.6049L6.41554 19.6757C5.23857 19.7307 4.26934 18.7614 4.32435 17.5845L4.39508 16.071C4.42288 15.4761 4.18418 14.8998 3.74391 14.4989L2.62368 13.4787C1.75231 12.6853 1.75231 11.3147 2.62368 10.5213L3.74391 9.50111C4.18418 9.10016 4.42288 8.52388 4.39508 7.92905L4.32435 6.41554C4.26934 5.23857 5.23857 4.26934 6.41554 4.32435L7.92905 4.39508C8.52388 4.42288 9.10016 4.18418 9.50111 3.74391L10.5213 2.62368Z" fill="url(#verifiedBlueGrad)"/>
    {/* Crisp White Checkmark */}
    <path d="M10.0303 14.6894L7.30303 11.9621C7.01014 11.6692 7.01014 11.1943 7.30303 10.9014C7.59592 10.6085 8.07079 10.6085 8.36368 10.9014L10.0303 12.568L15.6363 6.96207C15.9292 6.66918 16.4041 6.66918 16.697 6.96207C16.9899 7.25496 16.9899 7.72983 16.697 8.02272L10.0303 14.6894Z" fill="white"/>
  </svg>
);

const CERTS = [
  {
    title: "Full-Stack Web Development",
    desc: "Master modern full-stack development with React, Node.js and databases",
    issuer: "Udemy",
    date: "Jan 2024",
    pdfLink: "#",
    icon: "fa-solid fa-laptop-code",
    color: "#38bdf8",
  },
  {
    title: "Advanced CSS & Animations",
    desc: "Create stunning animations and responsive layouts with modern CSS",
    issuer: "Frontend Simplified",
    date: "Mar 2024",
    pdfLink: "#",
    icon: "fa-brands fa-css3-alt",
    color: "#ec4899",
  },
  {
    title: "Python for AI & ML",
    desc: "Build AI applications and machine learning models with Python",
    issuer: "Coursera",
    date: "Dec 2023",
    pdfLink: "#",
    icon: "fa-solid fa-robot",
    color: "#f59e0b",
  },
];

export default function Certificates() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  return (
    <section id="certificates" style={{ paddingTop: 60 }}>
      <style>{`
        .cert-card { transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); display: flex; flex-direction: column; position: relative; overflow: hidden; }
        .cert-card:hover { transform: translateY(-8px); border-color: var(--c-color); box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.05); }
        .cert-card:hover .cert-glow { opacity: 0.8 !important; transform: scale(1.5) translate(-10px, 10px); }
        .cert-card:hover .cert-icon { transform: scale(1.1) rotate(-8deg) !important; background: var(--c-color) !important; color: #fff !important; border-color: var(--c-color) !important; box-shadow: 0 10px 20px -5px var(--c-color); }
        .pdf-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(12px);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.3s ease;
        }
        .pdf-modal-content {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          width: 100%;
          max-width: 900px;
          height: 85vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .pdf-modal-iframe { width: 100%; height: 100%; border: none; border-radius: 0 0 20px 20px; background: #fff; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
      <div style={{ marginBottom: 48, textAlign: "center" }}>
        <div style={{ color: "var(--accent)", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Achievements</div>
        <h2 style={{ margin: "0 0 16px 0", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>Certifications</h2>
        <div style={{ color: "var(--muted)", fontSize: 16, maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>Official recognitions and completed coursework.</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
        {CERTS.map((c) => (
          <div 
            key={c.title} 
            className="cert-card"
            style={{
              background: "var(--glass)",
              border: "1px solid var(--border)",
              borderRadius: 24,
              padding: 32,
              "--c-color": c.color
            } as React.CSSProperties}
          >
            {/* Card Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: `${c.color}15`, border: `1px solid ${c.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: c.color }}>
                <i className={c.icon} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 600, fontSize: 16, color: "var(--text-primary)" }}>
                  {c.issuer} <PremiumVerifiedIcon />
                </div>
                <div style={{ fontSize: 14, color: "var(--muted)", marginTop: 4 }}>{c.date}</div>
              </div>
            </div>

            {/* Card Body */}
            <div style={{ flexGrow: 1 }}>
              <h3 style={{ margin: "0 0 10px 0", fontSize: 22, fontWeight: 600, color: "var(--text-primary)" }}>{c.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
            </div>

            {/* View PDF Button */}
            <button 
              onClick={() => setSelectedPdf(c.pdfLink)}
              style={{
                marginTop: 32,
                width: "100%",
                padding: 16,
                borderRadius: 14,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
                fontFamily: "inherit"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = c.color;
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = c.color;
                e.currentTarget.style.boxShadow = `0 8px 16px -4px ${c.color}`;
                const icon = e.currentTarget.querySelector('i');
                if (icon) icon.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
                const icon = e.currentTarget.querySelector('i');
                if (icon) icon.style.transform = "translateX(0)";
              }}
            >
              View PDF <i className="fa-solid fa-arrow-right" style={{ transition: "transform 0.3s ease" }} />
            </button>
          </div>
        ))}
      </div>

      {/* In-Built PDF Viewer Modal */}
      {selectedPdf && (
        <div className="pdf-modal-overlay" onClick={() => setSelectedPdf(null)}>
          <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: "1px solid var(--border)", background: "rgba(255,255,255,0.02)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <i className="fa-solid fa-file-pdf" style={{ color: "var(--accent)", fontSize: 18 }} />
                <span style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: 16 }}>Certificate Viewer</span>
              </div>
              <button 
                onClick={() => setSelectedPdf(null)} 
                style={{ background: "transparent", border: "none", color: "var(--muted)", cursor: "pointer", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: 8, transition: "all 0.2s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "var(--text-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--muted)"; }}
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div style={{ flexGrow: 1, background: "var(--card)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              {selectedPdf === "#" ? (
                <div style={{ textAlign: "center", color: "var(--muted)" }}>
                  <i className="fa-regular fa-file-pdf" style={{ fontSize: 48, marginBottom: 16, color: "var(--accent)", opacity: 0.5 }} />
                  <h3 style={{ color: "var(--text-primary)", margin: "0 0 8px 0", fontSize: 20 }}>Document Not Uploaded</h3>
                  <p style={{ margin: 0, fontSize: 15 }}>The PDF for this certificate will be available soon.</p>
                </div>
              ) : (
                <iframe 
                  src={selectedPdf} 
                  className="pdf-modal-iframe"
                  title="Certificate PDF" 
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
