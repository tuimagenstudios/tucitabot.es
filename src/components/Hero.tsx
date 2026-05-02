const TELEGRAM_CTA = "https://t.me/TuCitaMadrid_bot?start=landing";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-visual hero-bot" aria-hidden="true">
        <div className="bot-head">
          <span />
          <span />
        </div>
        <div className="bot-body" />
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Lanzamiento inminente · Primeros 20 usuarios sin coste</p>
        <h1 id="hero-title">
          Llevas semanas sin cita.
          <span>TuCita la vigila y la reserva por ti.</span>
        </h1>
        <p className="hero-subcopy">
          Un bot privado para citas de Extranjería en Madrid. Funciona 24/7, con
          autorización legal y datos cifrados.
        </p>
        <a className="primary-cta" href={TELEGRAM_CTA} rel="noreferrer">
          Anotarme gratis →
        </a>
        <p className="trust-note">
          Servicio privado independiente. No pertenecemos a la Administración Pública.
        </p>
      </div>

      <div className="hero-visual hero-person" aria-hidden="true">
        <div className="person-head" />
        <div className="person-body">
          <div className="phone" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
