const TELEGRAM_CTA = "https://t.me/TuCitaMadrid_bot?start=landing";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          <span>Lanzamiento inminente · Primeros 20 usuarios sin coste</span>
        </p>
        <h1 id="hero-title">
          Citas de Extranjería en Madrid.
          <span>TuCita vigila disponibilidad por ti.</span>
        </h1>
        <p className="hero-subcopy">
          Un bot privado para vigilar citas de Extranjería en Madrid y ayudarte
          cuando aparezca disponibilidad compatible. Funciona 24/7, con autorización
          del propio titular y datos cifrados.
        </p>
        <div className="hero-actions">
          <a className="primary-cta" href={TELEGRAM_CTA} target="_blank" rel="noreferrer">
            Anotarme gratis →
          </a>
          <span className="micro-label">Sin formularios web · directo al bot</span>
        </div>
        <p className="support-note">
          Primero te guía el asistente de TuCita. Si tu caso necesita revisión,
          podrás dejar una consulta por escrito dentro del bot.
        </p>
        <p className="trust-note">
          Servicio privado independiente. No pertenecemos a la Administración Pública.
          Cada usuario actúa en nombre propio. Por seguridad, no se reciben documentos
          ni datos sensibles fuera del flujo autorizado del bot.
        </p>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orbital-system">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="signal-node node-top">24/7</div>
          <div className="signal-node node-left">SSL</div>
          <div className="signal-node node-right">PDF</div>
          <div className="bot-core">
            <div className="bot-face">
              <span />
              <span />
            </div>
            <div className="bot-status">slots.scan()</div>
          </div>
          <div className="interface-card card-alert">
            <span className="card-kicker">Madrid</span>
            <strong>Cita detectada</strong>
          </div>
          <div className="interface-card card-user">
            <span className="card-kicker">Autorización</span>
            <strong>Datos cifrados</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
