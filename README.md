# TuCitaBot.es Web

Carpeta separada para la futura pagina web de `tucitabot.es`.

Repo GitHub:

```text
https://github.com/tuimagenstudios/tucitabot.es
```

Estado actual:

- Repo independiente creado.
- Rama principal: `main`.
- Primer commit subido con documentacion inicial.
- Sin codigo de aplicacion todavia.

Esta carpeta existe para aislar la landing de marketing del bot principal. El bot de Telegram, el scraper, pagos, base de datos y tests actuales siguen viviendo en la raiz del proyecto y en sus carpetas actuales.

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

## Plan de Producto

El plan completo de marketing, copy y diseño esta documentado en `PROJECT_WEB.md`.

## Stack Pendiente de Confirmar

Opcion recomendada:

```text
Vite + React + TypeScript
CSS normal o Tailwind
```

Opcion simple:

```text
HTML + CSS + JS estatico
```

No hay codigo de aplicacion creado todavia. Esta carpeta queda preparada como espacio seguro para construir la web cuando se apruebe el siguiente paso.

## Flujo Esperado

1. Confirmar stack.
2. Crear estructura inicial de la web dentro de esta carpeta.
3. Construir landing responsive.
4. Conectar CTA a `https://t.me/TuCitaMadrid_bot?start=landing`.
5. Preparar deploy para `tucitabot.es`.
