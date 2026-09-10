"use client";
import { useState, useEffect } from "react";

export default function SplashScreen() {
  const [isMounted, setIsMounted] = useState(false);
  const [isFinishing, setIsFinishing] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Component mount hone ke turant baad animation shuru karein
    setIsMounted(true);

    // Fade-out animation shuru karne ka timer
    const fadeOutTimer = setTimeout(() => {
      setIsFinishing(true);
    }, 1800); // Aap is time ko badal sakte hain

    // Component ko DOM se hatane ka timer
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
    }, 2300); // Yeh fadeOutTimer + animation ki avadhi (0.5s) hai

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  // Agar animation poora ho gaya hai, to component ko render na karein
  if (isFinished) {
    return null;
  }

  return (
    <>
      <style>{`
        @keyframes logo-entry {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .splash-logo {
          animation: logo-entry 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
      `}</style>
      <div
        className="splash-screen"
        style={{
          position: "fixed",
          inset: 0,
          background: "var(--bg)",
          zIndex: 99999,
          display: "grid",
          placeItems: "center",
          opacity: isFinishing ? 0 : 1,
          transition: "opacity 0.5s ease-out",
          pointerEvents: "none", // Click-through ke liye
        }}
      >
        <div
          className={isMounted ? "splash-logo" : ""}
          style={{
            width: 60,
            height: 60,
            borderRadius: 14,
            background: "var(--grad1)",
            display: "grid",
            placeItems: "center",
            fontWeight: 800,
            fontSize: 24,
            color: "white",
            boxShadow: "0 4px 20px rgba(124,58,237,0.25)",
          }}
        >
          SS
        </div>
      </div>
    </>
  );
}