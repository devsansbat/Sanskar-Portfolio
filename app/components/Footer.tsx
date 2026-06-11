export default function Footer() {
  return (
    <footer style={{ padding: "28px 0", color: "var(--muted)", fontSize: 14, textAlign: "center" }}>
      <div style={{ borderTop: "1px solid var(--border)", paddingTop: 18, marginTop: 18 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 8 }}>
          <a href="#" className="social-link"><i className="fa-brands fa-github" /></a>
          <a href="#" className="social-link"><i className="fa-brands fa-linkedin" /></a>
          <a href="#" className="social-link"><i className="fa-brands fa-telegram" /></a>
        </div>
        <div>
          © <strong>Sanskar Srivastava</strong> — Built with ❤️ • Next.js • Dark/Light mode
        </div>
      </div>
    </footer>
  );
}
