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

Esta carpeta existe para aislar la landing de marketing del bot principal. El bot de Telegram, el scraper, pagos, base de datos y tests actuales siguen viviendo en la raiz del proyecto y en sus carpetas actuales.

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

- `main.py`
- `telegram_bot/`
- `scraper/`
- `cerebro/`
- `database/`
- `pagos/`
- `legal/`
- `tests/`

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

## Plan de Producto

El plan completo de marketing, copy y diseño esta documentado en `PROJECT_WEB.md`.

## Flujo Esperado

1. Revisar la base local.
2. Mejorar diseño visual y responsive.
3. Añadir paginas legales reales.
4. Preparar deploy para `tucitabot.es`.
