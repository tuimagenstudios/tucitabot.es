# PROJECT_SEO.md

Checkpoint SEO y home de TuCitaBot.es WEB.

## Proyecto y repositorios

- Proyecto: TuCitaBot.es WEB.
- Dominio: https://tucitabot.es
- Repo WEB publico: `tuimagenstudios/tucitabot.es`.
- BOT privado: `tuimagenstudios/TuCita`.
- Regla actual: seguir trabajando solo en `WEB` salvo instruccion explicita.
- BOT no tocado durante esta fase.

## Estado SEO tecnico

- GitHub Pages activo.
- HTTPS activo y forzado.
- `robots.txt` publicado.
- `sitemap.xml` publicado.
- `og-tucita.svg` publicado.
- Google Search Console verificado.
- Home y paginas SEO enviadas, indexadas o con indexacion solicitada en Search Console.

## Paginas SEO existentes

### `/tie-toma-huellas-madrid/`

- Commit: `83ef3cfe31a2268c7d611054deb900d236e62ac4`
- Mensaje: `Agrega guia SEO para TIE toma de huellas Madrid`
- Funcion: guia informativa especifica sobre cita TIE toma de huellas en Madrid.

### `/cita-previa-extranjeria-madrid/`

- Commit: `d480af79c6407ade8900cce37f53d4563a54bc19`
- Mensaje: `Agrega pagina pilar SEO de cita previa extranjeria Madrid`
- Funcion: pagina pilar general sobre cita previa de extranjeria en Madrid.

### `/no-hay-citas-extranjeria-madrid/`

- Commit: `1b36478288250e9e07a8cfdec45c36418acb4ae5`
- Mensaje: `Agrega guia SEO sobre falta de citas extranjeria Madrid`
- Funcion: guia informativa sobre que significa que no aparezcan citas disponibles.

## Home y enlazado interno

### Seccion de guias utiles

- Se agrego la seccion `Guias utiles sobre cita previa de extranjeria en Madrid`.
- Commit: `5bf13ed3235bd016ff70be335656b44388582d38`
- Mensaje: `Agrega enlaces internos a guias SEO en home`
- Archivos:
  - `src/App.tsx`
  - `src/components/UsefulGuides.tsx`
  - `src/styles.css`
- Enlaces incluidos:
  - `/cita-previa-extranjeria-madrid/`
  - `/tie-toma-huellas-madrid/`
  - `/no-hay-citas-extranjeria-madrid/`

### Bloque informativo inferior

- Se mejoro la parte inferior de la home.
- El texto informativo/legal se convirtio en una tarjeta titulada `Información importante sobre TuCita`.
- El footer quedo reducido a enlaces legales.
- Se eliminaron enlaces duplicados a guias desde el footer.
- Commit: `a2cc9aaf6dd3de2cdbbb89d7b68806cc592cf5d6`
- Mensaje: `Mejora footer y bloque informativo de TuCita`

### Copy suavizado bajo guias

- Frase final actual:

```text
Servicio pensado para uso personal del titular, siempre dentro de los requisitos oficiales del trámite.
```

- Commit: `ba34deab35965307aa78875d3ced78c722deb476`
- Mensaje: `Suaviza copy de guias utiles en home`

## Criterios de copy y legales actuales

- TuCitaBot.es es un servicio privado e independiente.
- No pertenece a la Administracion Publica.
- No prometer cita garantizada.
- No decir que se saltan requisitos.
- No gestionar tramites para terceros.
- Cada usuario actua en nombre propio.
- Planes personales e intransferibles.
- No recibir documentos ni datos sensibles fuera del flujo autorizado del bot.
- CTA y ayuda guiada hacia Telegram/bot.
- No usar tono alarmista ni agresivo.

## Estado final de la fase

- WEB limpio antes de este checkpoint.
- BOT intacto.
- GitHub Pages deploys exitosos.
- Home visualmente revisada y aprobada.
- No hay emails reales, telefonos, identificacion fiscal real ni datos personales publicados en los cambios de esta fase.

## Proximos pasos recomendados

- No crear mas paginas SEO inmediatamente.
- Dejar respirar a Google unos dias.
- Revisar Search Console mas adelante: indexacion, impresiones, consultas y paginas con rendimiento.
- Proxima mejora posible: revisar metricas reales antes de decidir nueva pagina SEO.
- Mantener trabajo paso a paso: primero debatir, luego ejecutar una orden concreta.
