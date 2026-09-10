"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#qualifications", label: "Qualifications" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="header-nav">
      <div className="nav-container">
        {/* Brand */}
        <div className="nav-brand" style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "var(--grad1)",
              display: "grid",
              placeItems: "center",
              fontWeight: 800,
              color: "white",
              boxShadow: "0 4px 12px rgba(124,58,237,0.15)",
              flexShrink: 0,
            }}
          >
            SS
          </div>
          <div className="nav-brand-details">
            <div style={{ fontWeight: 800, fontSize: 16 }}>Sanskar Srivastava</div>
            <div style={{ fontSize: 11, color: "var(--muted)" }}>Developer • Programmer</div>
          </div>
        </div>

        {/* Nav links */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Buttons */}
        <div className="nav-actions" style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button
            onClick={toggleTheme}
            className="btn"
            title="Toggle theme"
            style={{ width: 40, height: 40, padding: 0, justifyContent: "center" }}
          >
            <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`} />
          </button>
          <a className="btn" href="#contact" style={{ padding: "8px 12px", fontSize: 13 }}>
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
