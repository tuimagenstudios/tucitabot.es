const HELP_CTA = "https://t.me/TuCitaMadrid_bot?start=web_ayuda";

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        TuCita es un servicio privado independiente y no pertenece a la
        Administración Pública. El uso del servicio requiere autorización aceptada
        por el propio titular. Los pagos se gestionan mediante Stripe.{" "}
        <a href={HELP_CTA} target="_blank" rel="noreferrer">Resolver dudas con la IA</a>.
        Por seguridad, no se reciben documentos ni datos sensibles fuera del flujo
        autorizado del bot.
      </p>
      <p>
        Los planes son personales e intransferibles. Las citas incluidas solo pueden
        usarse por el titular que completó el flujo dentro del bot. TuCita trabaja
        con procesos guiados, registro dentro del bot y autorización aceptada por el
        propio titular. No ayudamos a falsificar datos, saltarse requisitos legales
        ni gestionar trámites para terceros.
      </p>
      <nav aria-label="Enlaces legales del pie">
        <a href="/tie-toma-huellas-madrid/">Guía TIE huellas Madrid</a>
        <a href="/legal/aviso-legal.html">Aviso legal</a>
        <a href="/legal/politica-privacidad.html">Política de privacidad</a>
        <a href="/legal/terminos-servicio.html">Términos del servicio</a>
        <a href="/legal/politica-reembolso.html">Política de reembolso</a>
      </nav>
    </footer>
  );
}

export default Footer;
