# TuCitaBot.es Web

Landing publica de `tucitabot.es` para presentar TuCita, explicar el servicio y llevar al usuario al bot de Telegram.

Repo GitHub:

```text
https://github.com/tuimagenstudios/tucitabot.es
```

Estado actual:

- Repo independiente creado.
- Rama principal: `main`.
- Base tecnica creada con Vite + React + TypeScript.
- Frontend estatico sin backend, secretos ni variables privadas.

Esta carpeta existe para aislar la landing de marketing del bot principal. El bot de Telegram, el scraper, pagos, base de datos y tests viven en la carpeta hermana `BOT/`.

## Stack

- Vite
- React
- TypeScript
- CSS normal
- GitHub Pages con dominio propio `tucitabot.es`

## Proposito

Crear una landing de conversion rapida para TuCita:

- Explicar el problema: conseguir cita de Extranjeria es dificil.
- Presentar la solucion: TuCita vigila 24/7 y reserva con autorizacion.
- Generar confianza: contrato, cifrado, RGPD y Stripe.
- Llevar al usuario al bot de Telegram.

## Limites

Esta carpeta no debe modificar:

- `../BOT/main.py`
- `../BOT/telegram_bot/`
- `../BOT/scraper/`
- `../BOT/cerebro/`
- `../BOT/database/`
- `../BOT/pagos/`
- `../BOT/legal/`
- `../BOT/tests/`

La web debe poder desarrollarse, probarse y desplegarse de forma independiente.

## Comandos

Instalar dependencias:

```powershell
npm install
```

Arrancar entorno local:

```powershell
npm run dev
```

Crear build de produccion:

```powershell
npm run build
```

Previsualizar build:

```powershell
npm run preview
```

## CTA Principal

La landing envia usuarios al bot:

```text
https://t.me/TuCitaMadrid_bot?start=landing
```

## Nota Importante

TuCita no pertenece a la Administracion Publica. Es un servicio privado independiente que requiere autorizacion expresa del usuario.

## Deploy Previsto

Deploy previsto en GitHub Pages con dominio propio:

```text
tucitabot.es
```

El archivo `public/CNAME` contiene el dominio para GitHub Pages.

## Deploy en GitHub Pages

Este sitio se publica con GitHub Pages.

El workflow de deploy está en:

```text
.github/workflows/deploy.yml
```

El proceso de build genera la carpeta:

```text
dist/
```

El dominio previsto es:

```text
tucitabot.es
```

Para activar Pages:

1. Ir a Settings > Pages.
2. En Source seleccionar GitHub Actions.
3. Configurar Custom domain: tucitabot.es.
4. Activar Enforce HTTPS cuando GitHub lo permita.

Nota importante: actualmente el repo está privado. Para usar GitHub Pages gratis probablemente habrá que hacerlo público. Antes de cambiar visibilidad, revisar que el repo no contiene secretos ni código del bot.

## Plan de Producto

El plan completo de marketing, copy y diseño esta documentado en `PROJECT_WEB.md`.

## Flujo Esperado

1. Revisar la base local.
2. Mejorar diseño visual y responsive.
3. Añadir paginas legales reales.
4. Preparar deploy para `tucitabot.es`.
