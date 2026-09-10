export default function Footer() {
  return (
    <footer style={{ padding: "28px 0", color: "var(--muted)", fontSize: 14, textAlign: "center" }}>
      <div style={{ borderTop: "1px solid var(--border)", paddingTop: 18, marginTop: 18 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 8 }}>
          <a href="https://github.com/sanskarsri168" target="_blank" rel="noopener noreferrer" title="GitHub" className="social-link" key="github-footer"><i className="fa-brands fa-github" /></a>
          <a href="https://www.linkedin.com/in/sanskarksrivastav/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-link" key="linkedin-footer"><i className="fa-brands fa-linkedin" /></a>
          <a href="https://t.me/mr_sanskar_168" target="_blank" rel="noopener noreferrer" title="Telegram" className="social-link" key="telegram-footer"><i className="fa-brands fa-telegram" /></a>
        </div>
        <div>
          © <strong>Sanskar Srivastava</strong>
        </div>
      </div>
    </footer>
  );
}
