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
        <a id="aviso-legal" href="#aviso-legal">Aviso legal</a>
        <a id="privacidad" href="#privacidad">Política de privacidad</a>
        <a id="terminos" href="#terminos">Términos del servicio</a>
        <a id="reembolso" href="#reembolso">Política de reembolso</a>
      </nav>
    </footer>
  );
}

export default Footer;
