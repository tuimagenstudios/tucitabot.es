function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-info-card" aria-labelledby="footer-info-title">
        <span className="card-kicker">Servicio privado</span>
        <h2 id="footer-info-title">Información importante sobre TuCita</h2>
        <p>
          TuCita es un servicio privado e independiente y no pertenece a la Administración
          Pública. El uso del servicio requiere autorización aceptada por el propio titular.
          Los pagos se gestionan mediante Stripe y las dudas se resuelven de forma guiada con
          la IA dentro del bot.
        </p>
        <p>
          Por seguridad, no se reciben documentos ni datos sensibles fuera del flujo autorizado
          del bot. Los planes son personales e intransferibles: las citas incluidas solo pueden
          usarse por el titular que completó el registro y la autorización dentro del bot.
        </p>
        <p>
          TuCita trabaja con procesos guiados, registro interno y autorización expresa del propio
          usuario. No ayudamos a falsificar datos, saltarse requisitos legales ni gestionar
          trámites para terceros.
        </p>
      </section>
      <nav aria-label="Enlaces legales del pie">
        <a href="/legal/aviso-legal.html">Aviso legal</a>
        <a href="/legal/politica-privacidad.html">Política de privacidad</a>
        <a href="/legal/terminos-servicio.html">Términos del servicio</a>
        <a href="/legal/politica-reembolso.html">Política de reembolso</a>
      </nav>
    </footer>
  );
}

export default Footer;
