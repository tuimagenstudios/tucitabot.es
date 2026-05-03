import Footer from "../components/Footer";
import Header from "../components/Header";

const TELEGRAM_CTA = "https://t.me/TuCitaMadrid_bot?start=seo_cita_extranjeria_madrid";

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

function CitaExtranjeriaMadridPage() {
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
            <h1 id="guide-title">Cita previa extranjería Madrid: guía para buscar cita sin errores</h1>
            <p className="guide-lead">
              La cita previa de extranjería en Madrid debe buscarse en los canales oficiales
              habilitados para cada trámite, provincia y órgano competente. Esta guía te ayuda a
              revisar el proceso con calma, detectar errores frecuentes y entender cuándo una
              asistencia privada puede servirte de apoyo.
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

          <aside className="guide-summary" aria-label="Resumen rápido">
            <span className="card-kicker">Resumen</span>
            <ul>
              <li>Empieza siempre por los canales oficiales de cita previa.</li>
              <li>Revisa provincia, trámite, datos y justificantes antes de insistir.</li>
              <li>La falta de disponibilidad no implica que el trámite no exista.</li>
              <li>TuCitaBot.es puede monitorizar, no saltarse requisitos.</li>
            </ul>
          </aside>
        </section>

        <nav className="guide-toc" aria-label="Índice de la guía">
          <a href="#que-es">Qué es</a>
          <a href="#donde-buscar">Dónde buscar</a>
          <a href="#tramites">Trámites</a>
          <a href="#disponibilidad">Disponibilidad</a>
          <a href="#errores">Errores</a>
          <a href="#revisar">Qué revisar</a>
          <a href="#ayuda">Ayuda privada</a>
          <a href="#limites">Límites</a>
          <a href="#faq">FAQ</a>
        </nav>

        <section id="que-es" className="guide-section">
          <h2>Qué es la cita previa de extranjería en Madrid</h2>
          <p>
            La cita previa de extranjería en Madrid es el turno que permite acudir a una oficina
            o dependencia competente para presentar, continuar o completar determinados trámites
            relacionados con documentación y situaciones administrativas de personas extranjeras.
          </p>
          <p>
            No todos los trámites se gestionan igual ni por el mismo organismo. Algunos dependen
            de Oficinas de Extranjería y otros de unidades policiales. Por eso conviene revisar
            siempre el trámite exacto y la información oficial aplicable a tu caso antes de buscar
            disponibilidad.
          </p>
        </section>

        <section id="donde-buscar" className="guide-section">
          <h2>Dónde se busca oficialmente la cita</h2>
          <p>
            La búsqueda debe hacerse desde los canales oficiales de cita previa. La Sede electrónica
            de las Administraciones Públicas centraliza información de cita previa de Extranjería,
            avisos técnicos y preguntas frecuentes; según el trámite, también puede intervenir la
            Policía Nacional.
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
            TuCitaBot.es no sustituye esos canales ni puede cambiar lo que publican. La función de
            una herramienta privada debe entenderse como apoyo organizado y monitorización, no como
            canal administrativo alternativo.
          </p>
        </section>

        <section id="tramites" className="guide-section">
          <h2>Qué trámites pueden requerir cita previa</h2>
          <p>
            La lista disponible puede variar por provincia, oficina y momento. En general, muchas
            personas buscan cita previa para trámites como expedición o renovación de tarjeta,
            toma de huellas, autorizaciones, certificados, asignaciones vinculadas a NIE o gestiones
            ante oficinas competentes.
          </p>
          <p>
            Si tu búsqueda está relacionada con tarjeta física,{" "}
            <a className="text-link" href="/tie-toma-huellas-madrid/">
              también puedes leer la guía específica sobre TIE toma de huellas en Madrid
            </a>
            . Te ayudará a distinguir la cita de huellas de otras gestiones de extranjería.
          </p>
        </section>

        <section id="disponibilidad" className="guide-section">
          <h2>Por qué a veces no aparecen citas disponibles</h2>
          <p>
            Que no aparezcan citas en un momento concreto suele significar que no hay huecos visibles
            para la combinación elegida: provincia, trámite, oficina o datos introducidos. La demanda
            en Madrid puede ser alta y la disponibilidad puede cambiar sin una pauta pública sencilla.
          </p>
          <div className="guide-table-wrap">
            <table className="guide-table">
              <thead>
                <tr>
                  <th>Lo que ves</th>
                  <th>Posible causa</th>
                  <th>Revisión prudente</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No hay citas</td>
                  <td>No hay huecos visibles en ese momento.</td>
                  <td>Revisa trámite, provincia y vuelve a comprobar de forma razonable.</td>
                </tr>
                <tr>
                  <td>No aparece tu trámite</td>
                  <td>Puede no estar disponible para ese canal o provincia.</td>
                  <td>Consulta la información oficial y el nombre exacto del trámite.</td>
                </tr>
                <tr>
                  <td>El formulario no avanza</td>
                  <td>Puede haber sesión caducada, datos inconsistentes o incidencia técnica.</td>
                  <td>Comprueba datos, navegador, cookies y avisos oficiales.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="errores" className="guide-section">
          <h2>Errores comunes al buscar cita previa</h2>
          <ul className="feature-list guide-list">
            <li>Elegir un trámite parecido al correcto y obtener resultados que no sirven.</li>
            <li>Confundir una cita de oficina con una cita ante Policía Nacional.</li>
            <li>Escribir NIE, pasaporte, nombre o apellidos con formatos distintos a la documentación.</li>
            <li>No guardar justificantes, localizadores o capturas útiles cuando el sistema los muestra.</li>
            <li>Confiar en promesas de cita garantizada o en servicios que dicen saltarse requisitos.</li>
          </ul>
          <p>
            También es un error dejar que otra persona actúe como si fuera el titular. TuCitaBot.es
            no acepta trámites para terceros: cada usuario debe actuar en nombre propio.
          </p>
        </section>

        <section id="revisar" className="guide-section">
          <h2>Qué revisar antes de intentarlo otra vez</h2>
          <p>
            Antes de repetir intentos, revisa una pequeña lista de control. Ahorrarás tiempo y
            reducirás el riesgo de avanzar con una cita que no corresponda a tu situación.
          </p>
          <div className="source-panel">
            <h3>Checklist rápido</h3>
            <ul>
              <li>Provincia correcta: Madrid.</li>
              <li>Trámite exacto, no solo parecido.</li>
              <li>Documento de identidad y nombre escritos de forma coherente.</li>
              <li>Documentación y justificantes que exige el canal oficial.</li>
              <li>Fecha, hora, oficina y localizador antes de cerrar la sesión.</li>
            </ul>
          </div>
        </section>

        <section id="ayuda" className="guide-section">
          <h2>Cómo puede ayudarte TuCitaBot.es</h2>
          <p>
            TuCitaBot.es puede ayudarte como servicio privado de asistencia y monitorización:
            te guía dentro de Telegram, te ayuda a ordenar tu búsqueda y puede vigilar señales de
            disponibilidad compatibles con tu trámite. No es un portal oficial ni una vía para
            evitar requisitos.
          </p>
          <p>
            La ayuda tiene sentido cuando necesitas reducir comprobaciones manuales repetitivas y
            mantener un flujo ordenado. Aun así, tú sigues siendo responsable de revisar los datos,
            requisitos, documentos y canales oficiales aplicables.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href={TELEGRAM_CTA} target="_blank" rel="noreferrer">
              Activar ayuda guiada →
            </a>
            <span className="micro-label">Servicio privado · sin garantía de cita</span>
          </div>
        </section>

        <section id="limites" className="guide-section">
          <h2>Límites del servicio privado</h2>
          <p>
            TuCitaBot.es no pertenece a ninguna administración pública, no controla la publicación
            de huecos y no puede asegurar que exista disponibilidad. Tampoco ofrece asesoramiento
            legal ni decide si cumples requisitos administrativos.
          </p>
          <p>
            El servicio no promete saltarse colas, requisitos ni validaciones oficiales. Si tu caso
            tiene dudas jurídicas, plazos sensibles o documentación compleja, consulta los canales
            oficiales o un profesional cualificado.
          </p>
        </section>

        <section id="faq" className="guide-section guide-faq">
          <h2>Preguntas frecuentes</h2>
          <details>
            <summary>¿TuCitaBot.es es una web oficial de cita previa?</summary>
            <p>
              No. Es un servicio privado, independiente e informativo. No pertenece a ninguna
              administración pública.
            </p>
          </details>
          <details>
            <summary>¿TuCitaBot.es garantiza conseguir cita de extranjería?</summary>
            <p>
              No. La disponibilidad depende de los canales oficiales. TuCitaBot.es puede ayudar a
              monitorizar y orientar, pero no garantiza cita.
            </p>
          </details>
          <details>
            <summary>¿Puedo usar el servicio para otra persona?</summary>
            <p>
              No. El uso es personal: cada usuario actúa en nombre propio y no se aceptan trámites
              para terceros.
            </p>
          </details>
          <details>
            <summary>¿El bot sustituye a los canales oficiales o a un abogado?</summary>
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

export default CitaExtranjeriaMadridPage;
