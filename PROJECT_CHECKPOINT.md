# TuCitaBot.es - Checkpoint

Fecha: 3 de mayo de 2026

## Estado General

La web `tucitabot.es` queda documentada como landing publica de entrada al bot TuCita. El paso actual se considera cerrado a nivel tecnico, visual, copy, seguridad basica y despliegue.

## Estructura Local

```text
TuCita/
  BOT/
  WEB/
```

## BOT

- Ruta: `TuCita/BOT`
- Repo: `https://github.com/tuimagenstudios/TuCita`
- Visibilidad: privado
- Estado: separado de la web
- Regla: no tocar BOT para cambios de WEB
- Tests conocidos: 48 passed
- Funcion: bot Telegram, scraper, monitor, pagos Stripe, PostgreSQL, legal/autorizacion, cifrado, auditoria y RGPD
- `.env` local no trackeado
- Sin cambios funcionales recientes por el trabajo de la web

## WEB

- Ruta: `TuCita/WEB`
- Repo: `https://github.com/tuimagenstudios/tucitabot.es`
- Visibilidad: publico
- Rama: `main`
- Ultimo commit confirmado: `9140d19 Ajusta ayuda guiada y limites de uso en landing`
- Stack: Vite + React + TypeScript + CSS normal
- Sin backend
- Sin formularios
- Sin analiticas
- Sin imagenes externas
- Sin secretos

## Deploy

- Hosting: GitHub Pages
- Workflow: `.github/workflows/deploy.yml`
- Build type: GitHub Actions
- Ultimo workflow revisado: `Deploy GitHub Pages`
- Estado ultimo deploy: success
- Dominio principal: `https://tucitabot.es/`
- `www`: redirige a `https://tucitabot.es/`
- `public/CNAME`: `tucitabot.es`
- `vite.config.ts`: `base: "/"`
- GitHub Pages: `status built`
- HTTPS: activo
- Enforce HTTPS: activo

## DNS Hostinger

- Dominio: `tucitabot.es`
- DNSSEC: no activo
- Nameservers:
  - `orbit.dns-parking.com`
  - `horizon.dns-parking.com`
- Registros:
  - `A @ 185.199.108.153`
  - `A @ 185.199.109.153`
  - `A @ 185.199.110.153`
  - `A @ 185.199.111.153`
  - `CNAME www tuimagenstudios.github.io`
- Estado auditoria: DNS resuelve correctamente.

## Identidad Visual

- Direccion: dark premium, tech-bold, confiable, moderna y limpia
- Fondo principal: `#05091a`
- Acento / CTA: `#00e0ff`
- Titulos: Space Grotesk
- Cuerpo: Inter
- Microcopy / labels: JetBrains Mono
- Visual hero: propio CSS, sin assets externos
- No estilo crypto generico
- No estetica de gestoria aburrida
- No aspecto de bot pirata

## Navegacion Actual

Header:

```text
TuCita
Madrid · Extranjeria
Servicio privado
Como funciona
Precio
Ayuda y consultas
```

- `Como funciona` apunta a `#como-funciona`
- `Precio` apunta a `#precio` y activa la pestaña de precio
- `Ayuda y consultas` apunta a `https://t.me/TuCitaMadrid_bot?start=web_ayuda`

Footer:

- Mantiene enlaces legales:
  - Aviso legal
  - Politica de privacidad
  - Terminos del servicio
  - Politica de reembolso
- No muestra correo
- No usa `mailto`

## CTAs

CTA principal:

```text
Anotarme gratis -> https://t.me/TuCitaMadrid_bot?start=landing
```

Ayuda / consultas:

```text
Ayuda y consultas -> https://t.me/TuCitaMadrid_bot?start=web_ayuda
Iniciar consulta guiada -> https://t.me/TuCitaMadrid_bot?start=web_ayuda
Resolver dudas con la IA -> https://t.me/TuCitaMadrid_bot?start=web_ayuda
```

Todos los enlaces externos a Telegram usan:

```text
target="_blank"
rel="noreferrer"
```

## Copy y Seguridad

Decisiones cerradas:

- La web es puerta de entrada al bot.
- No hay contacto por correo.
- No hay soporte humano directo prometido.
- No hay gestion por terceros.
- El contrato/aceptacion real ocurre dentro del bot.
- Cada titular debe usar el bot desde su propia cuenta, aceptar su autorizacion y contratar su propio plan.

Frases clave publicadas:

```text
Por seguridad, no se reciben documentos ni datos sensibles fuera del flujo autorizado del bot.
```

```text
TuCita trabaja con procesos guiados, registro dentro del bot y autorizacion aceptada por el propio titular. No ayudamos a falsificar datos, saltarse requisitos legales ni gestionar tramites para terceros.
```

```text
Los planes son personales e intransferibles. Las citas incluidas solo pueden usarse por el titular que completo el flujo dentro del bot.
```

No debe volver a aparecer:

- `mailto`
- `hola@`
- `Contacto:`
- `Hablar con soporte`
- `Hablar por Telegram`
- `soporte inmediato`
- `gestionar tramites sin autorizacion`
- `con autorizacion suficiente`
- `para terceros no autorizados`
- promesas tipo `garantizamos cita`
- promesas tipo `tramite garantizado`
- `asesoria legal`
- `gestoria`

## Auditoria Final Realizada

Build local:

```text
npm run build
passed
```

Deploy publico:

- `https://tucitabot.es`: 200 OK
- `https://www.tucitabot.es`: 301 a `https://tucitabot.es/`
- `http://tucitabot.es`: 301 a HTTPS
- `http://www.tucitabot.es`: 301 a HTTPS/root

Assets publicos revisados:

- JS del ultimo deploy: 200 OK
- CSS del ultimo deploy: 200 OK

Visual revisado:

- Desktop: 1366x768
- Desktop: 1440x900
- Movil: 390x844
- Movil: 430x932
- Movil largo: 390x2200

Resultado visual:

- Hero correcto
- CTA visible
- Header correcto
- Acordeon movil correcto
- Footer sobrio
- Sin overflow horizontal visible
- Sin textos cortados relevantes
- Sin contenido viejo de cache

Consola / recursos:

- Sin errores de consola capturados
- Sin recursos HTTP 4xx/5xx capturados

Seguridad repo WEB:

- No `.env` trackeado
- No `node_modules` trackeado
- No `dist` trackeado
- No logs trackeados
- No datos personales trackeados
- No contratos reales trackeados
- No secretos trackeados

## Pendientes Reales

1. Crear paginas legales reales:
   - Aviso legal
   - Politica de privacidad
   - Terminos del servicio
   - Politica de reembolso
2. Revisar copy legal final con criterio profesional antes de campañas de pago.
3. Probar en movil real fisico.
4. Cuando existan las paginas legales, enlazarlas desde el footer.

## Reglas de Trabajo Futuras

- WEB debe seguir siendo frontend estatico.
- No meter backend en WEB.
- No subir `.env`.
- No subir tokens.
- No subir datos personales.
- No subir contratos reales.
- No subir logs.
- No tocar BOT para cambios de WEB.
- Antes de cada commit/push en WEB:
  - ejecutar `npm run build`
  - buscar secretos
  - buscar copy viejo de contacto/correo
  - verificar que `dist` y `node_modules` no esten trackeados
