"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const texts = ["Developer / Programmer", "UI/UX Enthusiast", "AI Chatbot Builder", "Frontend Developer"];
    let i = 0, j = 0, forward = true;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      if (!typedRef.current) return;
      const full = texts[i];
      if (forward) {
        j++;
        typedRef.current.textContent = " — " + full.slice(0, j);
        if (j === full.length) {
          forward = false;
          timer = setTimeout(tick, 1000);
          return;
        }
      } else {
        j--;
        typedRef.current.textContent = " — " + full.slice(0, j);
        if (j === 0) {
          forward = true;
          i = (i + 1) % texts.length;
        }
      }
      timer = setTimeout(tick, forward ? 90 : 40);
    }
    tick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero-section">
      <style>{`
        .hero-section {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 28px;
          align-items: center;
          padding: 48px 0;
        }
        @media (max-width: 900px) {
          .hero-section {
            grid-template-columns: 1fr;
            padding: 24px 0;
          }
          .hero-image-aside {
            order: -1;
            max-width: 380px;
            margin: 0 auto;
          }
        }
      `}</style>
      {/* Left card */}
      <div className="hero-card">
        <div
          style={{
            display: "inline-block",
            padding: "6px 10px",
            borderRadius: 999,
            fontWeight: 700,
            fontSize: 13,
            background: "linear-gradient(90deg, rgba(124,58,237,0.16), rgba(6,182,212,0.06))",
            border: "1px solid var(--border)",
            marginBottom: 12,
          }}
        >
          Hi — I&apos;m Sanskar
        </div>

        <h1
          style={{
            fontSize: "clamp(28px, 4.8vw, 44px)",
            lineHeight: 1.02,
            marginBottom: 10,
            minHeight: 60,
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          Sanskar Srivastava
          <span ref={typedRef} className="grad-text" style={{ fontWeight: 700, display: "inline-block", minWidth: 200 }}>
            {" — Developer / Programmer"}
          </span>
        </h1>

        <p style={{ color: "var(--muted)", lineHeight: 1.6, marginBottom: 18 }}>
          I&apos;m a developer building modern web &amp; AI experiences. I design interfaces, craft animations,
          and build responsive apps that people love to use.
        </p>

        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <a className="btn" href="#projects">
            <i className="fa-solid fa-diagram-project" /> Projects
          </a>
          <a className="btn" href="#contact">
            <i className="fa-solid fa-envelope" /> Contact
          </a>
        </div>

        <div style={{ marginTop: 18, display: "flex", gap: 8, flexWrap: "wrap" }}>
          <a href="https://github.com/sanskarsri168" target="_blank" rel="noopener noreferrer" title="GitHub" className="social-link"><i className="fa-brands fa-github" /></a>
          <a href="https://www.linkedin.com/in/sanskarksrivastav/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-link">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="https://t.me/mr_sanskar_168" target="_blank" rel="noopener noreferrer" title="Telegram" className="social-link"><i className="fa-brands fa-telegram" /></a>
          <a href="https://www.instagram.com/mr_sanskar_168/" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-link">
            <i className="fa-brands fa-instagram" />
          </a>
        </div>

        <div style={{ marginTop: 18, color: "var(--muted)", fontSize: 13 }}>
          <strong>What I do:</strong> Web Apps • AI Chatbots • Mobile Interfaces • Automation
        </div>
      </div>

      {/* Right profile card */}
      <aside className="hero-image-aside">
        <div className="hero-card">
          <Image
            src="/photo_6264672623056850347_y.jpg"
            alt="Sanskar Srivastava"
            width={380}
            height={380}
            style={{ width: "100%", height: "auto", borderRadius: 12, display: "block", marginBottom: 12, objectFit: "cover" }}
            priority
          />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 700 }}>Sanskar Srivastava</div>
              <div style={{ fontSize: 13, color: "var(--muted)" }}>Computer Science • India</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 800, fontSize: 18 }}>B.Tech</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>CSE • 2026</div>
            </div>
          </div>
          <div style={{ marginTop: 12, color: "var(--muted)", fontSize: 13 }}>
            Quick facts:{" "}
            <span style={{ color: "var(--accent)", fontWeight: 700 }}>Alpha GamerX</span> •{" "}
            <span style={{ color: "var(--accent)", fontWeight: 700 }}>ReelFusionX</span>
          </div>
        </div>
      </aside>
    </section>
  );
}
