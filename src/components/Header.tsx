function Header() {
  return (
    <header className="site-header" aria-label="Cabecera principal">
      <a className="brand" href="/" aria-label="TuCita inicio">
        TuCita
      </a>
      <div className="header-meta">
        <span>Madrid · Extranjería</span>
        <span>Servicio privado</span>
      </div>
      <nav className="header-links" aria-label="Enlaces legales">
        <a href="#privacidad">Privacidad</a>
        <a href="#terminos">Términos</a>
        <a href="mailto:hola@tucitabot.es">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
