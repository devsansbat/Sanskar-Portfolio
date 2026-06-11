"use client";
import { useEffect, useState } from "react";

export default function CopyProtection() {
  const [toast, setToast] = useState<{ msg: string; visible: boolean }>({ msg: "", visible: false });

  function showToast(msg: string) {
    setToast({ msg, visible: true });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 1800);
  }

  useEffect(() => {
    const handleContext = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return;
      e.preventDefault();
      showToast("Right-click is disabled on this site.");
    };

    const handleCopy = (e: ClipboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return;
      e.preventDefault();
      showToast("Copying content is restricted.");
    };

    const handleDrag = (e: DragEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === "INPUT" || t.tagName === "TEXTAREA") return;
      e.preventDefault();
      showToast("Drag is disabled.");
    };

    window.addEventListener("contextmenu", handleContext);
    document.addEventListener("copy", handleCopy as EventListener);
    document.addEventListener("cut", handleCopy as EventListener);
    document.addEventListener("dragstart", handleDrag as EventListener);

    return () => {
      window.removeEventListener("contextmenu", handleContext);
      document.removeEventListener("copy", handleCopy as EventListener);
      document.removeEventListener("cut", handleCopy as EventListener);
      document.removeEventListener("dragstart", handleDrag as EventListener);
    };
  }, []);

  return (
    <>
      <div className="cf-watermark" aria-hidden="true" />
      <div
        className="cf-toast"
        role="status"
        aria-live="polite"
        style={{ opacity: toast.visible ? 1 : 0 }}
      >
        {toast.msg}
      </div>
    </>
  );
}
