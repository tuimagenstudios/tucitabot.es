# TuCitaBot.es - Checkpoint Final WEB

Fecha: 3 de mayo de 2026

## Estado final WEB

- Dominio publico: `https://tucitabot.es`
- HTTPS: activo y forzado.
- `www`: redirige al dominio principal.
- Hosting: GitHub Pages.
- Deploy: GitHub Actions con `.github/workflows/deploy.yml`.
- Repo WEB: publico, limpio y separado del bot.
- Stack: Vite + React + TypeScript + CSS normal.
- WEB permanece estatica: sin backend, formularios, analiticas ni secretos.
- Landing dark premium aprobada en desktop y movil.

Header final:

- `Como funciona`
- `Precio`
- `Ayuda y consultas`

CTA principal:

- `https://t.me/TuCitaMadrid_bot?start=landing`

Ayuda guiada:

- `https://t.me/TuCitaMadrid_bot?start=web_ayuda`

## Seguridad y copy

- Sin enlaces de correo en la landing.
- Sin correo publico en la landing.
- Sin promesa de atencion humana directa.
- Sin promesa de respuesta inmediata.
- Sin gestion para terceros.
- Sin asesoria juridica.
- Sin promesas absolutas sobre conseguir cita.
- Planes personales e intransferibles.
- Documentos y datos sensibles solo dentro del flujo autorizado del bot.
- El contrato y la aceptacion real ocurren dentro del bot.
- Cada titular debe usar su propia cuenta, aceptar la autorizacion y contratar su propio plan.

## Paginas legales

Publicadas y enlazadas desde el footer:

- `/legal/aviso-legal.html`
- `/legal/politica-privacidad.html`
- `/legal/terminos-servicio.html`
- `/legal/politica-reembolso.html`

Estado legal publicado:

- Identificacion fiscal: pendiente de revision legal.
- Domicilio legal: pendiente de definir.
- No publicar numero de llamada.
- Contacto legal/de privacidad: pendiente de definir tras revision legal.
- Para ayuda sobre el servicio, el canal principal es el bot de TuCita.

## Historial y privacidad

- Se limpio el historial publico con `git-filter-repo`.
- Se realizo `push --force-with-lease` correctamente.
- Commit final limpio tras limpieza de historial: `521aff0 Protege datos personales en paginas legales`.
- Commit posterior de favicon: `d19fec8 Agrega favicon de marca TuCita`.
- Repo remoto y local limpios de domicilio personal completo, numero de llamada e identificacion fiscal real.
- Advertencia: clones antiguos del repo WEB deben reclonarse o sincronizarse con cuidado.

## Favicon

- Archivo: `public/favicon.svg`.
- Monograma: `TC`.
- Fondo: `#05091a`.
- Acento: `#00e0ff`.
- `index.html` incluye favicon SVG y `theme-color`.
- Favicon visible en la pestana del navegador; si no aparece, limpiar cache o abrir en incognito.

## BOT

- Ruta: `TuCita/BOT`.
- Repo: `https://github.com/tuimagenstudios/TuCita`.
- Estado: separado del repo WEB.
- Visibilidad: privado.
- No fue tocado durante esta fase WEB.
- Funcion: bot Telegram, scraper, monitor, pagos Stripe, PostgreSQL, legal/autorizacion, cifrado, auditoria y RGPD.

## Pendientes futuros

1. Revisar legalmente las paginas antes de campanas fuertes.
2. Definir domicilio legal o profesional seguro.
3. Definir identificacion fiscal publica si corresponde.
4. Crear correo legal del dominio si mas adelante conviene.
5. Actualizar GitHub Actions por warning futuro de Node.js 20.
6. Alinear contrato del BOT con uso personal, sin terceros y planes intransferibles.
7. Crear o fortalecer el flujo de ayuda IA dentro del bot.

## Reglas de trabajo futuras

- No tocar BOT para cambios de WEB.
- No subir `.env`.
- No subir tokens.
- No subir datos personales.
- No subir contratos reales.
- No subir logs.
- No meter backend en WEB.
- Antes de cada commit/push en WEB:
  - ejecutar `npm run build`;
  - revisar secretos;
  - revisar copy viejo de correo o soporte;
  - verificar que `dist` y `node_modules` no esten trackeados.
