# TuCita Web - Documento Auxiliar

Fecha de actualizacion: 3 de mayo de 2026

Este documento queda como espejo auxiliar del estado de `PROJECT_WEB.md`. La fuente principal de checkpoint es `PROJECT_CHECKPOINT.md`.

## Estado final

- Web publicada en `https://tucitabot.es`.
- HTTPS activo y forzado.
- `www` redirige al dominio principal.
- Deploy por GitHub Pages con Actions.
- Repo WEB publico, estatico y separado del BOT.
- Landing dark premium aprobada en desktop y movil.
- Favicon propio publicado en `public/favicon.svg`.

## Navegacion y CTAs

Header:

- `Como funciona`
- `Precio`
- `Ayuda y consultas`

CTA principal:

- `https://t.me/TuCitaMadrid_bot?start=landing`

Ayuda guiada:

- `https://t.me/TuCitaMadrid_bot?start=web_ayuda`

## Seguridad de producto

- La web es entrada al bot, no canal manual.
- Sin enlaces de correo en landing.
- Sin correo publico en landing.
- Sin promesa de atencion humana directa.
- Sin respuesta inmediata prometida.
- Sin gestion para terceros.
- Sin asesoria juridica.
- Sin promesas absolutas sobre conseguir cita.
- Planes personales e intransferibles.
- Documentos y datos sensibles solo dentro del flujo autorizado del bot.

## Legales

Paginas publicadas:

- `/legal/aviso-legal.html`
- `/legal/politica-privacidad.html`
- `/legal/terminos-servicio.html`
- `/legal/politica-reembolso.html`

Datos legales actuales:

- Identificacion fiscal: pendiente de revision legal.
- Domicilio legal: pendiente de definir.
- No publicar numero de llamada.
- Email legal temporal solo para comunicaciones legales, privacidad y ejercicio de derechos: `tuimagenstudio@gmail.com`.

## Privacidad de historial

- Historial publico limpiado con `git-filter-repo`.
- Force-push realizado con `--force-with-lease`.
- Commit limpio tras limpieza: `521aff0 Protege datos personales en paginas legales`.
- Commit favicon: `d19fec8 Agrega favicon de marca TuCita`.
- Clones antiguos del repo WEB deben reclonarse o sincronizarse con cuidado.

## Pendientes

1. Revision legal final.
2. Definir domicilio legal o profesional seguro.
3. Definir identificacion fiscal publica si corresponde.
4. Crear correo legal del dominio si conviene.
5. Actualizar GitHub Actions por warning futuro de Node.js 20.
6. Alinear contrato del BOT con uso personal, sin terceros y planes intransferibles.
7. Crear o fortalecer flujo de ayuda IA dentro del bot.
