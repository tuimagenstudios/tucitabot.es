import Footer from "../components/Footer";
import Header from "../components/Header";

const TELEGRAM_CTA = "https://t.me/TuCitaMadrid_bot?start=seo_tie_huellas_madrid";

const officialLinks = [
  {
    href: "https://sede.administracionespublicas.gob.es/pagina/index/directorio/icpplus",
    label: "Cita previa de extranjería en la Sede electrónica",
  },
  {
    href: "https://sede.administracionespublicas.gob.es/ayuda/faq/extranjeria/26",
    label: "FAQ oficial de cita previa de Extranjería",
  },
  {
    href: "https://sede.administracionespublicas.gob.es/ayuda/consulta/extranjeria",
    label: "Incidencias técnicas de cita previa",
  },
];

function TieHuellasMadridPage() {
  return (
    <main className="page-shell">
      <Header />

      <article className="guide-page" aria-labelledby="guide-title">
        <section className="guide-hero">
          <div className="guide-hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              <span>Guía informativa no oficial</span>
            </p>
            <h1 id="guide-title">TIE toma de huellas en Madrid: cómo buscar cita previa</h1>
            <p className="guide-lead">
              La cita para TIE toma de huellas en Madrid se busca por los canales oficiales
              habilitados para cita previa de Extranjería y Policía. Esta guía explica qué
              revisar, por qué a veces no aparece disponibilidad y cómo evitar errores comunes.
            </p>
            <p className="trust-note">
              TuCitaBot.es es un servicio privado e independiente de asistencia y monitorización.
              No pertenece a ninguna administración pública, no sustituye los canales oficiales
              ni el asesoramiento legal, y no garantiza conseguir cita.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href={TELEGRAM_CTA} target="_blank" rel="noreferrer">
                Abrir el bot de Telegram →
              </a>
              <span className="micro-label">Uso personal · sin trámites para terceros</span>
            </div>
          </div>

          <aside className="guide-summary" aria-label="Resumen rápido">
            <span className="card-kicker">Resumen</span>
            <ul>
              <li>El trámite exige revisar requisitos y documentación oficial.</li>
              <li>La disponibilidad puede cambiar sin horario fijo visible.</li>
              <li>Cada usuario debe actuar en nombre propio.</li>
              <li>Un servicio privado puede ayudar a monitorizar, no a saltarse reglas.</li>
            </ul>
          </aside>
        </section>

        <nav className="guide-toc" aria-label="Índice de la guía">
          <a href="#que-es">Qué es</a>
          <a href="#donde-buscar">Dónde buscar</a>
          <a href="#disponibilidad">Disponibilidad</a>
          <a href="#errores">Errores</a>
          <a href="#ayuda">Cómo ayuda TuCitaBot.es</a>
          <a href="#limites">Límites</a>
          <a href="#faq">FAQ</a>
        </nav>

        <section id="que-es" className="guide-section">
          <h2>Qué es la cita de toma de huellas</h2>
          <p>
            La cita de toma de huellas es una gestión presencial relacionada con la expedición
            o renovación de la Tarjeta de Identidad de Extranjero, conocida como TIE. En esa
            atención se comprueba la identidad de la persona, se revisa que el trámite corresponda
            y se realiza la captura de huellas cuando procede.
          </p>
          <p>
            Es importante distinguir la autorización de residencia o estancia del trámite físico
            de tarjeta. Tener una resolución favorable no significa que cualquier cita sirva:
            debes elegir el trámite correcto, revisar la documentación aplicable y acudir con los
            justificantes que correspondan a tu caso.
          </p>
        </section>

        <section id="donde-buscar" className="guide-section">
          <h2>Dónde se busca oficialmente la cita</h2>
          <p>
            La búsqueda debe empezar siempre en los canales oficiales. Para cita previa de
            Extranjería, la Sede electrónica informa sobre los órganos responsables y distingue
            entre trámites de Oficinas de Extranjería y trámites ante la Policía Nacional.
          </p>
          <div className="source-panel">
            <h3>Fuentes oficiales útiles</h3>
            <ul>
              {officialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p>
            Antes de confirmar nada, comprueba provincia, trámite, datos de identidad, fecha,
            hora y justificante. Si el portal oficial indica que no hay citas disponibles, eso no
            equivale a que el trámite haya desaparecido: normalmente significa que en ese momento
            no hay huecos visibles para la combinación elegida.
          </p>
        </section>

        <section id="disponibilidad" className="guide-section">
          <h2>Por qué a veces no hay disponibilidad</h2>
          <p>
            La disponibilidad depende de la carga de trabajo, la oficina, el trámite seleccionado
            y los huecos que se publiquen en cada momento. En Madrid puede haber mucha demanda,
            por eso dos búsquedas realizadas con pocos minutos de diferencia pueden dar resultados
            distintos.
          </p>
          <div className="guide-table-wrap">
            <table className="guide-table">
              <thead>
                <tr>
                  <th>Situación</th>
                  <th>Qué significa</th>
                  <th>Qué revisar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No aparecen huecos</td>
                  <td>No hay disponibilidad visible en ese momento.</td>
                  <td>Provincia, trámite y franjas posteriores.</td>
                </tr>
                <tr>
                  <td>El trámite no sale</td>
                  <td>Puede no estar activo para esa provincia o canal.</td>
                  <td>Nombre exacto del trámite y fuentes oficiales.</td>
                </tr>
                <tr>
                  <td>La página falla</td>
                  <td>Puede ser un problema técnico o de sesión.</td>
                  <td>Navegador, cookies, conexión y reintento razonable.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="errores" className="guide-section">
          <h2>Errores comunes al intentar conseguir cita</h2>
          <ul className="feature-list guide-list">
            <li>Elegir un trámite parecido, pero no exactamente el que corresponde a TIE.</li>
            <li>Introducir NIE, pasaporte, nombre o apellidos de forma distinta a la documentación.</li>
            <li>No guardar el justificante o localizador cuando el sistema lo emite.</li>
            <li>Repetir intentos sin revisar si la sesión se ha quedado bloqueada o caducada.</li>
            <li>Confiar en promesas de cita garantizada o en servicios que dicen saltarse requisitos.</li>
          </ul>
          <p>
            También conviene evitar que otra persona gestione el trámite como si fuera el titular.
            TuCitaBot.es no acepta trámites para terceros: cada usuario actúa en nombre propio.
          </p>
        </section>

        <section id="ayuda" className="guide-section">
          <h2>Cómo puede ayudarte TuCitaBot.es</h2>
          <p>
            TuCitaBot.es puede ayudarte como servicio privado de asistencia y monitorización:
            te guía dentro de Telegram, te ayuda a ordenar los pasos y puede vigilar disponibilidad
            compatible con tu búsqueda. La finalidad es reducir revisiones manuales repetitivas,
            no sustituir al canal oficial.
          </p>
          <div className="source-panel">
            <h3>Marco de uso responsable</h3>
            <ul>
              <li>El bot no garantiza cita ni disponibilidad.</li>
              <li>No modifica requisitos, documentos ni condiciones oficiales.</li>
              <li>No trabaja con datos inventados ni gestiones para terceros.</li>
              <li>El usuario conserva la responsabilidad de revisar su caso y acudir correctamente.</li>
            </ul>
          </div>
        </section>

        <section id="limites" className="guide-section">
          <h2>Límites del servicio</h2>
          <p>
            TuCitaBot.es no pertenece a ninguna administración pública, no tiene control sobre la
            publicación de huecos y no puede asegurar que haya una cita disponible. Tampoco ofrece
            asesoramiento legal ni determina si cumples los requisitos del trámite.
          </p>
          <p>
            El servicio no promete saltarse colas, requisitos ni validaciones oficiales. Si tienes
            dudas jurídicas, documentación compleja o una situación administrativa sensible, consulta
            los canales oficiales o un profesional cualificado.
          </p>
        </section>

        <section id="faq" className="guide-section guide-faq">
          <h2>Preguntas frecuentes</h2>
          <details>
            <summary>¿TuCitaBot.es es una página oficial?</summary>
            <p>
              No. Es un servicio privado, independiente e informativo. No pertenece a ninguna
              administración pública.
            </p>
          </details>
          <details>
            <summary>¿La cita está garantizada?</summary>
            <p>
              No. La disponibilidad depende de los canales oficiales. TuCitaBot.es puede ayudar a
              monitorizar y orientar, pero no garantiza cita.
            </p>
          </details>
          <details>
            <summary>¿Puedo pedir cita para otra persona?</summary>
            <p>
              No mediante TuCitaBot.es. El uso es personal: cada usuario actúa en nombre propio y
              no se aceptan trámites para terceros.
            </p>
          </details>
          <details>
            <summary>¿El bot sustituye a un abogado o gestor?</summary>
            <p>
              No. La guía y el bot no sustituyen asesoramiento legal ni la información oficial de
              la administración competente.
            </p>
          </details>
        </section>

        <section className="guide-final-cta" aria-label="Abrir TuCitaBot.es en Telegram">
          <span className="card-kicker">Asistencia privada</span>
          <h2>¿Quieres que el bot te guíe desde Telegram?</h2>
          <p>
            Empieza solo si actúas en nombre propio y entiendes que el servicio monitoriza y
            asiste, pero no garantiza cita ni sustituye los canales oficiales.
          </p>
          <a className="primary-cta" href={TELEGRAM_CTA} target="_blank" rel="noreferrer">
            Ir al bot de Telegram →
          </a>
        </section>
      </article>

      <Footer />
    </main>
  );
}

export default TieHuellasMadridPage;
