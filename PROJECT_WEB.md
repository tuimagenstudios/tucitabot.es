# TuCitaBot.es - Proyecto WEB

Fecha de actualizacion: 3 de mayo de 2026

## Resumen

`TuCitaBot.es` es la landing publica de entrada al bot TuCita. La web vive en `TuCita/WEB`, en un repo independiente y publico:

```text
https://github.com/tuimagenstudios/tucitabot.es
```

El bot vive separado en `TuCita/BOT`, permanece privado y no debe tocarse para cambios de la web.

## Estado publicado

- Dominio: `https://tucitabot.es`
- HTTPS: activo y forzado.
- `www`: redirige al dominio principal.
- Deploy: GitHub Pages con GitHub Actions.
- Workflow: `.github/workflows/deploy.yml`.
- Build: Vite genera `dist/`.
- `public/CNAME`: `tucitabot.es`.
- `vite.config.ts`: `base: "/"`.

## Stack

- Vite.
- React.
- TypeScript.
- CSS normal.
- Sin backend.
- Sin formularios.
- Sin analiticas.
- Sin cookies propias.
- Sin secretos.

## Landing

La landing dark premium ya fue aprobada en desktop y movil.

Identidad visual:

- Fondo principal: `#05091a`.
- Acento principal: `#00e0ff`.
- Tipografia de titulos: Space Grotesk.
- Tipografia de cuerpo: Inter.
- Microcopy tecnico: JetBrains Mono.
- Visual propio en CSS, sin imagenes externas.

Header final:

- `Como funciona`
- `Precio`
- `Ayuda y consultas`

CTA principal:

- `https://t.me/TuCitaMadrid_bot?start=landing`

Ayuda guiada:

- `https://t.me/TuCitaMadrid_bot?start=web_ayuda`

## Seguridad de copy

La web debe mantenerse como puerta de entrada al bot, no como canal de gestion manual.

Reglas actuales:

- Sin enlaces de correo en landing.
- Sin correo publico en landing.
- Sin promesa de atencion humana directa.
- Sin promesa de respuesta inmediata.
- Sin gestion para terceros.
- Sin asesoria juridica.
- Sin promesas absolutas sobre conseguir cita.
- Planes personales e intransferibles.
- Documentos y datos sensibles solo dentro del flujo autorizado del bot.

## Paginas legales

Paginas publicadas:

- `/legal/aviso-legal.html`
- `/legal/politica-privacidad.html`
- `/legal/terminos-servicio.html`
- `/legal/politica-reembolso.html`

Footer:

- Enlaza las cuatro paginas legales reales.
- Mantiene texto de independencia frente a la Administracion Publica.
- Mantiene limites de uso personal, planes intransferibles y no terceros.

Datos legales actuales:

- Identificacion fiscal: pendiente de revision legal.
- Domicilio legal: pendiente de definir.
- No publicar numero de llamada.
- Contacto legal/de privacidad: pendiente de definir tras revision legal.
- La ayuda operativa del servicio se canaliza por el bot.

## Historial y privacidad

Se limpio el historial publico del repo WEB con `git-filter-repo` para retirar datos personales que no debian quedar en el historial.

- Force-push realizado con `--force-with-lease`.
- Commit final limpio tras limpieza: `521aff0 Protege datos personales en paginas legales`.
- Commit favicon posterior: `d19fec8 Agrega favicon de marca TuCita`.
- Repo remoto y local limpios de domicilio personal completo, numero de llamada e identificacion fiscal real.
- Clones antiguos del repo WEB deben reclonarse o sincronizarse con cuidado.

## Favicon

- Archivo: `public/favicon.svg`.
- Monograma: `TC`.
- Fondo: `#05091a`.
- Acento: `#00e0ff`.
- `index.html` incluye favicon SVG y `theme-color`.

## Pendientes futuros

1. Revision legal final antes de campanas fuertes.
2. Definir domicilio legal o profesional seguro.
3. Definir identificacion fiscal publica si corresponde.
4. Crear correo legal del dominio si conviene.
5. Actualizar GitHub Actions por warning futuro de Node.js 20.
6. Alinear contrato del BOT con uso personal, sin terceros y planes intransferibles.
7. Crear o fortalecer flujo de ayuda IA dentro del bot.
