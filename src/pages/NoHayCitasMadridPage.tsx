import Footer from "../components/Footer";
import Header from "../components/Header";

const TELEGRAM_CTA = "https://t.me/TuCitaMadrid_bot?start=seo_no_hay_citas_madrid";

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

function NoHayCitasMadridPage() {
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
            <h1 id="guide-title">
              No hay citas de extranjería en Madrid: qué significa y qué puedes hacer
            </h1>
            <p className="guide-lead">
              Que no aparezcan citas de extranjería en Madrid suele indicar que no hay huecos
              visibles para la combinación elegida en ese momento. Esta guía explica posibles
              causas, revisiones prudentes y cómo una asistencia privada puede ayudarte a ordenar
              el seguimiento sin sustituir los canales oficiales.
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
              <span className="micro-label">Uso personal · cada usuario actúa en nombre propio</span>
            </div>
          </div>

          <aside className="guide-summary" aria-label="Resumen de la guía">
            <span className="card-kicker">Resumen</span>
            <ul>
              <li>No ver citas no confirma por sí solo que el trámite esté cerrado.</li>
              <li>Conviene revisar provincia, trámite, datos y sesión antes de repetir.</li>
              <li>No uses servicios que prometan saltarse requisitos.</li>
              <li>TuCitaBot.es puede monitorizar, no controlar la disponibilidad oficial.</li>
            </ul>
          </aside>
        </section>

        <nav className="guide-toc" aria-label="Índice de la guía">
          <a href="#significa">Qué significa</a>
          <a href="#por-que">Por qué pasa</a>
          <a href="#revisar">Qué revisar</a>
          <a href="#errores">Errores</a>
          <a href="#no-hacer">Qué no hacer</a>
          <a href="#ayuda">Ayuda privada</a>
          <a href="#limites">Límites</a>
          <a href="#faq">FAQ</a>
        </nav>

        <section id="significa" className="guide-section">
          <h2>Qué significa que no aparezcan citas disponibles</h2>
          <p>
            Ver un mensaje de falta de citas disponibles normalmente significa que, en ese momento,
            el sistema no muestra huecos para la provincia, trámite u oficina seleccionada. No
            confirma por sí solo que el trámite haya desaparecido ni que no puedas consultarlo más
            adelante.
          </p>
          <p>
            También conviene separar dos ideas: una cosa es la disponibilidad de turnos y otra los
            requisitos de tu trámite. Si tienes dudas sobre documentación, plazos o situación
            administrativa, revisa los canales oficiales o consulta asesoramiento cualificado.
          </p>
        </section>

        <section id="por-que" className="guide-section">
          <h2>Por qué puede pasar</h2>
          <p>
            La disponibilidad puede cambiar por demanda, oficina, trámite, carga administrativa,
            incidencias técnicas o configuración de la búsqueda. En Madrid, la demanda de algunos
            trámites puede hacer que los huecos visibles sean limitados o aparezcan de forma
            irregular.
          </p>
          <div className="source-panel">
            <h3>Canales oficiales que conviene tener a mano</h3>
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
            Para entender el proceso completo,{" "}
            <a className="text-link" href="/cita-previa-extranjeria-madrid/">
              también puedes leer la guía general sobre cita previa de extranjería en Madrid
            </a>
            .
          </p>
        </section>

        <section id="revisar" className="guide-section">
          <h2>Qué revisar antes de volver a intentarlo</h2>
          <p>
            Antes de repetir la búsqueda, revisa que no estés arrastrando un error de selección o
            de sesión. Una comprobación ordenada evita insistir sobre una combinación que no
            corresponde a tu caso.
          </p>
          <div className="guide-table-wrap">
            <table className="guide-table">
              <thead>
                <tr>
                  <th>Revisión</th>
                  <th>Por qué importa</th>
                  <th>Señal de alerta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Provincia</td>
                  <td>La disponibilidad se muestra por provincia.</td>
                  <td>Has elegido una provincia distinta a Madrid.</td>
                </tr>
                <tr>
                  <td>Trámite</td>
                  <td>Un trámite parecido puede llevar a otro circuito.</td>
                  <td>El nombre no coincide con tu documentación o resolución.</td>
                </tr>
                <tr>
                  <td>Datos</td>
                  <td>El formato de NIE, pasaporte o nombre puede bloquear avances.</td>
                  <td>Hay diferencias con el documento que vas a presentar.</td>
                </tr>
                <tr>
                  <td>Sesión</td>
                  <td>Las sesiones pueden caducar o quedarse en un estado inconsistente.</td>
                  <td>El formulario deja de avanzar o repite mensajes sin explicación clara.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="errores" className="guide-section">
          <h2>Errores comunes al buscar cita</h2>
          <ul className="feature-list guide-list">
            <li>Elegir un trámite similar, pero no el que corresponde exactamente.</li>
            <li>Confundir una gestión de Oficina de Extranjería con una gestión policial.</li>
            <li>Introducir datos personales con un formato distinto al de la documentación.</li>
            <li>Repetir la misma búsqueda sin comprobar si la sesión ha caducado.</li>
            <li>Asumir que no hay citas para ningún trámite cuando solo falla una combinación.</li>
          </ul>
          <p>
            Si buscas una cita de toma de huellas,{" "}
            <a className="text-link" href="/tie-toma-huellas-madrid/">
              revisa también la guía específica sobre TIE en Madrid
            </a>
            .
          </p>
        </section>

        <section id="no-hacer" className="guide-section">
          <h2>Qué no conviene hacer</h2>
          <p>
            No conviene introducir datos inventados, usar servicios que prometan saltarse controles,
            compartir documentación fuera de flujos seguros ni permitir que otra persona actúe como
            si fuera el titular. TuCitaBot.es no acepta gestiones para terceros: cada usuario actúa
            en nombre propio.
          </p>
          <p>
            Tampoco conviene confundir asistencia tecnológica con asesoramiento legal. Si tu caso
            depende de plazos, recursos, documentación compleja o una situación administrativa
            sensible, usa canales oficiales y apoyo profesional cualificado.
          </p>
        </section>

        <section id="ayuda" className="guide-section">
          <h2>Cómo puede ayudarte TuCitaBot.es</h2>
          <p>
            TuCitaBot.es puede ayudarte como servicio privado de asistencia y monitorización:
            te guía dentro de Telegram, te ayuda a ordenar la búsqueda y puede vigilar señales de
            disponibilidad compatibles con tu trámite. Su papel es reducir comprobaciones manuales
            repetitivas, no sustituir al canal oficial.
          </p>
          <p>
            La ayuda funciona mejor cuando ya tienes claro el trámite que corresponde y quieres
            mantener un seguimiento ordenado. Aun así, la disponibilidad y las condiciones dependen
            de los sistemas oficiales.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href={TELEGRAM_CTA} target="_blank" rel="noreferrer">
              Activar ayuda guiada →
            </a>
            <span className="micro-label">Servicio privado · sin promesa de cita</span>
          </div>
        </section>

        <section id="limites" className="guide-section">
          <h2>Límites del servicio privado</h2>
          <p>
            TuCitaBot.es no pertenece a ninguna administración pública, no controla cuándo se
            publican huecos y no puede hacer que aparezca disponibilidad. Tampoco determina si
            cumples requisitos administrativos ni sustituye asesoramiento legal.
          </p>
          <p>
            El servicio no promete saltarse colas, requisitos ni validaciones oficiales. Si no hay
            citas visibles, el servicio puede ayudarte a monitorizar y ordenar la búsqueda, pero no
            cambia las reglas ni los canales oficiales.
          </p>
        </section>

        <section id="faq" className="guide-section guide-faq">
          <h2>Preguntas frecuentes</h2>
          <details>
            <summary>¿Que no haya citas significa que el trámite está cerrado?</summary>
            <p>
              No necesariamente. Puede significar que no hay disponibilidad visible para la
              provincia, trámite u oficina seleccionada en ese momento.
            </p>
          </details>
          <details>
            <summary>¿La ayuda privada cambia la disponibilidad oficial?</summary>
            <p>
              No. TuCitaBot.es monitoriza y asiste como servicio privado, pero no controla los
              canales oficiales ni cambia su disponibilidad.
            </p>
          </details>
          <details>
            <summary>¿Puedo usar el servicio para otra persona?</summary>
            <p>
              No. El uso es personal: cada usuario actúa en nombre propio y no se aceptan gestiones
              para terceros.
            </p>
          </details>
          <details>
            <summary>¿El bot sustituye a los canales oficiales o asesoramiento legal?</summary>
            <p>
              No. La guía y el bot no sustituyen canales oficiales ni asesoramiento legal.
            </p>
          </details>
        </section>

        <section className="guide-final-cta" aria-label="Abrir ayuda guiada de TuCitaBot.es">
          <span className="card-kicker">Asistencia privada</span>
          <h2>Activa ayuda guiada desde Telegram</h2>
          <p>
            Usa el bot solo si actúas en nombre propio y entiendes que TuCitaBot.es monitoriza y
            asiste, pero no garantiza cita ni sustituye los canales oficiales.
          </p>
          <a className="primary-cta" href={TELEGRAM_CTA} target="_blank" rel="noreferrer">
            Abrir el bot de Telegram →
          </a>
        </section>
      </article>

      <Footer />
    </main>
  );
}

export default NoHayCitasMadridPage;
