const HELP_CTA = "https://t.me/TuCitaMadrid_bot?start=web_ayuda";

function Header() {
  return (
    <header className="site-header" aria-label="Cabecera principal">
      <a className="brand" href="/" aria-label="TuCita inicio">
        <span className="brand-mark" aria-hidden="true">TC</span>
        <span>TuCita</span>
      </a>
      <div className="header-meta">
        <span>Madrid · Extranjería</span>
        <span>Servicio privado</span>
      </div>
      <nav className="header-links" aria-label="Enlaces principales">
        <a href="/#como-funciona">Cómo funciona</a>
        <a href="/#precio">Precio</a>
        <a href={HELP_CTA} target="_blank" rel="noreferrer">Ayuda y consultas</a>
      </nav>
    </header>
  );
}

export default Header;
