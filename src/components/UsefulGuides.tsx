const guides = [
  {
    href: "/cita-previa-extranjeria-madrid/",
    kicker: "Guía general",
    title: "Cita previa extranjería Madrid",
    description: "Qué revisar antes de buscar cita, trámites habituales y errores frecuentes.",
  },
  {
    href: "/tie-toma-huellas-madrid/",
    kicker: "TIE y huellas",
    title: "TIE toma de huellas en Madrid",
    description: "Cómo distinguir la cita de huellas y qué comprobar antes de intentarlo.",
  },
  {
    href: "/no-hay-citas-extranjeria-madrid/",
    kicker: "Disponibilidad",
    title: "No hay citas de extranjería",
    description: "Qué puede significar, qué errores revisar y qué no conviene hacer.",
  },
];

function UsefulGuides() {
  return (
    <section className="useful-guides" aria-labelledby="useful-guides-title">
      <div className="section-heading guides-heading">
        <span>Guías útiles</span>
        <h2 id="useful-guides-title">Guías útiles sobre cita previa de extranjería en Madrid</h2>
      </div>
      <p className="guides-intro">
        Contenido informativo y no oficial para entender mejor el proceso. TuCitaBot.es es un
        servicio privado e independiente de asistencia y monitorización: no garantiza cita, no
        sustituye canales oficiales ni asesoramiento legal, y cada usuario actúa en nombre propio.
      </p>
      <div className="guides-grid">
        {guides.map((guide) => (
          <a className="guide-card" href={guide.href} key={guide.href}>
            <span>{guide.kicker}</span>
            <strong>{guide.title}</strong>
            <p>{guide.description}</p>
          </a>
        ))}
      </div>
      <p className="guides-note">
        Servicio pensado para uso personal del titular, siempre dentro de los requisitos oficiales del trámite.
      </p>
    </section>
  );
}

export default UsefulGuides;
