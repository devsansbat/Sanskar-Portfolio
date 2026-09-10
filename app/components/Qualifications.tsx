"use client";
import { useState } from "react";

const TABS = [
  { id: "education", label: "Education", icon: "fa-user-graduate" },
  { id: "achievements", label: "Achievements", icon: "fa-trophy" },
  { id: "training", label: "Training", icon: "fa-laptop-code" },
];

const EDUCATION = [
  {
    title: "Diploma in Information Technology",
    subtitle: "Computer Science & Engineering",
    desc: "Pursuing degree in Computer Science with specialization in Web Development and Artificial Intelligence.",
    meta: [
      { icon: "fa-coll", text: "BTEUP" },
      { icon: "fa-map-marker-alt", text: "Ghaziabad, India" },
      { icon: "fa-calendar", text: "2025 - 2028" },
    ],
  },
  {
    title: "Senior Secondary (XII)",
    subtitle: "Science Stream (PCM)",
    desc: "Completed 12th grade with focus on Physics, Chemistry, and Mathematics along with Computer Science.",
    meta: [
      { icon: "fa-graduation-cap", text: "CBSE Board" },
      { icon: "fa-map-marker-alt", text: "Ballia , UttarPradesh, India" },
      { icon: "fa-calendar", text: "2020 - 2022" },
    ],
  },
  {
    title: "Secondary (X)",
    subtitle: "General Education",
    desc: "Completed 10th grade with excellent academic record and early interest in computer science.",
    meta: [
      { icon: "fa-graduation-cap", text: "CBSE Board" },
      { icon: "fa-map-marker-alt", text: "Ballia , UttarPradesh, India" },
      { icon: "fa-calendar", text: "2019 - 2020" },
    ],
  },
];

const ACHIEVEMENTS = [
  {
    title: "Hackathon Winner",
    subtitle: "CodeFest 2023 - 1st Prize",
    desc: "Won first prize in national level hackathon for developing an AI-powered educational platform.",
    meta: [
      { icon: "fa-trophy", text: "National Level" },
      { icon: "fa-calendar", text: "December 2023" },
    ],
  },
  {
    title: "Coding Competition",
    subtitle: "CodeChef (3-Star Rating)",
    desc: "Achieved 3-star rating on CodeChef with strong problem-solving skills in data structures and algorithms.",
    meta: [
      { icon: "fa-code", text: "Competitive Programming" },
      { icon: "fa-calendar", text: "Ongoing" },
    ],
  },
  {
    title: "Academic Excellence",
    subtitle: "University Topper (Semester 3)",
    desc: "Secured top position in university semester examinations with exceptional performance in programming subjects.",
    meta: [
      { icon: "fa-award", text: "University Level" },
      { icon: "fa-calendar", text: "2023" },
    ],
  },
];

const TRAINING = [
  {
    title: "Full-Stack Web Development",
    subtitle: "Intensive Training Program",
    desc: "Completed 6-month intensive training in MERN stack development, covering React, Node.js, MongoDB, and Express.",
    meta: [
      { icon: "fa-clock", text: "180 Hours" },
      { icon: "fa-calendar", text: "Jan - Jun 2023" },
    ],
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Specialized Training",
    desc: "Advanced training in Python, TensorFlow, and neural networks for developing AI applications and chatbots.",
    meta: [
      { icon: "fa-clock", text: "120 Hours" },
      { icon: "fa-calendar", text: "Jul - Sep 2023" },
    ],
  },
  {
    title: "UI/UX Design",
    subtitle: "Design Thinking Workshop",
    desc: "Hands-on workshop covering user research, wireframing, prototyping, and design systems for modern web applications.",
    meta: [
      { icon: "fa-clock", text: "60 Hours" },
      { icon: "fa-calendar", text: "October 2023" },
    ],
  },
];

type QualificationData = typeof EDUCATION | typeof ACHIEVEMENTS | typeof TRAINING;

const DATA: Record<string, QualificationData> = {
  education: EDUCATION,
  achievements: ACHIEVEMENTS,
  training: TRAINING,
};

type QualItemType = (typeof EDUCATION)[0] | (typeof ACHIEVEMENTS)[0] | (typeof TRAINING)[0];

function QualItem({ item }: { item: QualItemType }) {
  // Date ko top-right badge mein dikhane ke liye extract kar rahe hain
  const dateMeta = item.meta.find(m => m.icon.includes('calendar'));
  const otherMeta = item.meta.filter(m => !m.icon.includes('calendar'));

  return (
    <div
      className="qual-item-card"
      style={{ 
        background: "var(--glass)", 
        border: "1px solid var(--border)", 
        borderRadius: 16, 
        padding: 20, 
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}
    >
      {/* Top Row: Subtitle & Date Badge */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div style={{ color: "var(--accent)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>
          {item.subtitle}
        </div>
        {dateMeta && (
          <div style={{ 
            fontSize: 11, 
            color: "var(--muted)", 
            background: "rgba(255,255,255,0.03)", 
            padding: "4px 8px", 
            borderRadius: 6, 
            border: "1px solid var(--border)",
            whiteSpace: "nowrap",
            fontWeight: 500
          }}>
            {dateMeta.text}
          </div>
        )}
      </div>

      {/* Title & Desc */}
      <div>
        <h3 style={{ margin: "0 0 6px 0", color: "var(--text-primary)", fontSize: 16, fontWeight: 600 }}>{item.title}</h3>
        <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
      </div>
      
      {/* Bottom Meta */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", marginTop: "auto", paddingTop: 6 }}>
        {otherMeta.map((m) => (
          <span key={m.text} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--muted)" }}>
            <i className={`fas ${m.icon}`} style={{ opacity: 0.7, fontSize: 11 }} />
            {m.text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Qualifications() {
  const [active, setActive] = useState("education");

  return (
    <section id="qualifications" className="section-divider">
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .qual-content {
          animation: fadeInScale 0.3s ease-out forwards;
        }
        .qual-item-card {
          transition: all 0.3s ease;
        }
        .qual-item-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 8px 24px rgba(124,58,237,0.1);
        }
      `}</style>
      
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 16, 
        marginBottom: 24,
        flexWrap: "wrap"
      }}>
        {/* Header */}
        <div>
          <h2 style={{ margin: 0, fontSize: 20, color: "var(--text-primary)" }}>Qualifications</h2>
          <div style={{ color: "var(--muted)", fontSize: 14, marginTop: 4 }}>My journey & achievements</div>
        </div>

        {/* Compact Tabs */}
        <div style={{ 
          display: "flex", 
          background: "var(--glass)", 
          border: "1px solid var(--border)", 
          borderRadius: 10, 
          padding: 4,
          gap: 4,
          overflowX: "auto",
          scrollbarWidth: "none"
        }}>
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                style={{
                  padding: "6px 14px",
                  background: isActive ? "var(--accent)" : "transparent",
                  color: isActive ? "#fff" : "var(--muted)",
                  border: "none",
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "inherit",
                  whiteSpace: "nowrap"
                }}
              >
                <i className={`fas ${tab.icon}`} style={{ fontSize: 12, opacity: isActive ? 1 : 0.7 }} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Content */}
      <div key={active} className="qual-content" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 16 }}>
        {DATA[active].map((item) => (
          <QualItem key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
