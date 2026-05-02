import { useState } from "react";
import type { ReactNode } from "react";

type SectionKey = "funciona" | "seguro" | "precio" | "faq";

type InfoSection = {
  key: SectionKey;
  label: string;
  content: ReactNode;
};

const sections: InfoSection[] = [
  {
    key: "funciona",
    label: "Cómo funciona",
    content: (
      <div className="panel-grid three-steps">
        <ol className="step-list">
          <li><span>01</span><strong>Te registras desde Telegram</strong></li>
          <li><span>02</span><strong>Firmas la autorización y tus datos quedan cifrados</strong></li>
          <li><span>03</span><strong>TuCita vigila cada 3 minutos y reserva cuando aparece hueco</strong></li>
        </ol>
        <p className="panel-emphasis">Tú solo te presentas a la cita.</p>
      </div>
    ),
  },
  {
    key: "seguro",
    label: "Seguro",
    content: (
      <div className="panel-grid">
        <ul className="feature-list">
          <li>Contrato de autorización real</li>
          <li>Datos personales cifrados</li>
          <li>Borrado de datos con /revocar</li>
          <li>Pagos gestionados por Stripe</li>
        </ul>
        <p className="panel-emphasis">No es magia. Es tecnología legal.</p>
        <p>Actuamos mediante autorización del usuario. Tú mantienes el control.</p>
      </div>
    ),
  },
  {
    key: "precio",
    label: "Precio",
    content: (
      <div className="pricing-panel">
        <div className="price-compare">
          <p>Otros servicios: 59 € - 250 €</p>
          <strong>TuCita: desde 9,99 €</strong>
        </div>
        <div className="plans">
          <p><span>Lite</span> 9,99 € · 1 cita</p>
          <p><span>Pro</span> 19,99 € · 3 citas</p>
          <p><span>VIP</span> 39 € · 5 citas</p>
        </div>
        <p className="panel-emphasis">
          Si no conseguimos cita en 30 días, devolución total.
        </p>
      </div>
    ),
  },
  {
    key: "faq",
    label: "FAQ",
    content: (
      <div className="faq-panel">
        <dl>
          <dt>¿Es legal?</dt>
          <dd>Sí. Firmas una autorización de representación.</dd>
          <dt>¿Y si no hay cita?</dt>
          <dd>Si no conseguimos cita en 30 días, devolución total.</dd>
          <dt>¿Puedo borrar mis datos?</dt>
          <dd>Sí. Con /revocar eliminamos tus datos personales.</dd>
          <dt>¿Quién está detrás?</dt>
          <dd>Tuimagen Studios.</dd>
          <dt>Contacto:</dt>
          <dd>hola@tucitabot.es</dd>
        </dl>
      </div>
    ),
  },
];

function InfoTabs() {
  const [activeKey, setActiveKey] = useState<SectionKey>("funciona");

  return (
    <section className="info-tabs" aria-label="Información de TuCita">
      <div className="section-heading">
        <span>Respuestas rápidas</span>
        <h2>Lo importante, sin letra pequeña escondida.</h2>
      </div>
      <div className="tab-list" role="tablist" aria-label="Secciones informativas">
        {sections.map((section) => (
          <button
            key={section.key}
            className={section.key === activeKey ? "tab-button active" : "tab-button"}
            type="button"
            role="tab"
            aria-selected={section.key === activeKey}
            aria-controls={`panel-${section.key}`}
            id={`tab-${section.key}`}
            onClick={() => setActiveKey(section.key)}
          >
            {section.label}
          </button>
        ))}
      </div>

      <div className="desktop-panels">
        {sections.map((section) => (
          <article
            key={section.key}
            id={`panel-${section.key}`}
            role="tabpanel"
            aria-labelledby={`tab-${section.key}`}
            hidden={section.key !== activeKey}
            className="tab-panel"
          >
            {section.content}
          </article>
        ))}
      </div>

      <div className="mobile-accordion">
        {sections.map((section) => (
          <details key={section.key} open={section.key === activeKey}>
            <summary>{section.label}</summary>
            <article className="tab-panel">{section.content}</article>
          </details>
        ))}
      </div>
    </section>
  );
}

export default InfoTabs;
