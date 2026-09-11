"use client";
import { useEffect, useState } from "react";

export default function NoInternet() {
  const [offline, setOffline] = useState(() => (
    typeof navigator !== "undefined" ? !navigator.onLine : false
  ));

  useEffect(() => {
    const handleOffline = () => setOffline(true);
    const handleOnline = () => setOffline(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (!offline) return null;

  return (
    <div className="no-internet-overlay">
      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 25,
          textAlign: "center",
          padding: "40px 50px",
          color: "var(--text-primary)",
          boxShadow: "0 8px 50px rgba(0,0,0,0.5)",
        }}
      >
        <div style={{ fontSize: 45, marginBottom: 12 }}>😢</div>
        <h2 style={{ fontSize: 22, margin: "15px 0 5px", fontWeight: 600 }}>No Internet Connection</h2>
        <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 25 }}>
          Oops! You&apos;re offline. Please check your connection.
        </p>
        <button
          onClick={() => { if (navigator.onLine) setOffline(false); else alert("Still offline! 😔"); }}
          style={{
            background: "var(--grad1)",
            border: "none",
            padding: "10px 25px",
            borderRadius: 12,
            color: "white",
            fontSize: 15,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          🔄 Try Again
        </button>
      </div>
    </div>
  );
}
