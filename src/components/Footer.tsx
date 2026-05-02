function Footer() {
  return (
    <footer className="site-footer">
      <p>
        TuCita es un servicio privado independiente y no pertenece a la
        Administración Pública. El uso del servicio requiere autorización expresa del
        usuario. Los pagos se gestionan mediante Stripe. Contacto:{" "}
        <a href="mailto:hola@tucitabot.es">hola@tucitabot.es</a>
      </p>
      <nav aria-label="Enlaces legales del pie">
        <a id="aviso-legal" href="#aviso-legal">Aviso legal</a>
        <a id="privacidad" href="#privacidad">Política de privacidad</a>
        <a id="terminos" href="#terminos">Términos del servicio</a>
        <a id="reembolso" href="#reembolso">Política de reembolso</a>
      </nav>
    </footer>
  );
}

export default Footer;
