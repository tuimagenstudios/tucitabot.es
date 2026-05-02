# TuCitaBot.es - Plan Web

## Estado Actual

Actualizado: 2 de mayo de 2026.

Hecho:

- Repo GitHub independiente creado: `tuimagenstudios/tucitabot.es`.
- URL: `https://github.com/tuimagenstudios/tucitabot.es`.
- Visibilidad actual: privado.
- Rama principal: `main`.
- Primer commit subido con documentacion inicial.
- Carpeta local: `WEB/`.
- Separado del repo del bot para evitar romper la aplicacion principal.

Pendiente:

- Confirmar stack.
- Crear codigo inicial de la landing.
- Añadir responsive.
- Preparar deploy.
- Apuntar dominio `tucitabot.es`.

## Objetivo

Crear la landing principal de `tucitabot.es` para explicar TuCita, generar confianza y llevar al usuario al bot de Telegram.

La pagina debe comunicar en pocos segundos:

- El usuario no consigue cita de Extranjeria.
- TuCita vigila 24/7 y puede reservar con autorizacion.
- El servicio es privado, independiente y no pertenece a la Administracion Publica.
- Los datos se tratan con autorizacion, cifrado y opcion de borrado.
- El pago se gestiona con Stripe.

## Estructura

Desktop: una pantalla principal con hero, CTA y pestañas.

```text
Header minimo
Hero visual: bot + mensaje + persona
CTA: Anotarme gratis
Microcopy: Lanzamiento inminente · Primeros 20 usuarios sin coste
Tabs: Como funciona · Seguro · Precio · FAQ
Panel dinamico con contenido corto
Legal minimo
```

Movil: hero primero y pestañas como acordeon compacto, permitiendo scroll si hace falta.

## Hero

Headline:

```text
Llevas semanas sin cita.
TuCita la vigila y la reserva por ti.
```

Subcopy:

```text
Un bot privado para citas de Extranjeria en Madrid.
Funciona 24/7, con autorizacion legal y datos cifrados.
```

CTA:

```text
Anotarme gratis ->
```

Nota:

```text
Servicio privado independiente. No pertenecemos a la Administracion Publica.
```

## Pestaña: Como Funciona

```text
1. Te registras desde Telegram
2. Firmas la autorizacion y tus datos quedan cifrados
3. TuCita vigila cada 3 minutos y reserva cuando aparece hueco

Tu solo te presentas a la cita.
```

## Pestaña: Seguro

```text
Contrato de autorizacion real
Datos personales cifrados
Borrado de datos con /revocar
Pagos gestionados por Stripe

No es magia. Es tecnologia legal.
```

## Pestaña: Precio

```text
Otros servicios: 59 EUR - 250 EUR
TuCita: desde 9,99 EUR

Lite   9,99 EUR  · 1 cita
Pro    19,99 EUR · 3 citas
VIP    39 EUR    · 5 citas

Si no conseguimos cita en 30 dias, devolucion total.
```

## Pestaña: FAQ

```text
¿Es legal?
Si. Firmas una autorizacion de representacion.

¿Y si no hay cita?
Si no conseguimos cita en 30 dias, devolucion total.

¿Puedo borrar mis datos?
Si. Con /revocar eliminamos tus datos personales.

¿Quien esta detras?
Tuimagen Studios.

Ayuda y consultas:
https://t.me/TuCitaMadrid_bot?start=web_ayuda

Primero te guia el asistente. Si hace falta revisar tu caso, podras dejar una consulta por escrito dentro del bot.
```

## Tono Visual

Moderno, directo y confiable.

Evitar:

- Estetica infantil.
- Landing oscura tipo crypto.
- Exceso de emojis.
- Promesas absolutas como "cita garantizada mañana".
- Confusion con una web oficial de la Administracion.

Paleta sugerida:

```text
Fondo: blanco frio o gris muy claro
Principal: azul confianza
Acento: verde exito
Texto: gris carbon
Aviso lanzamiento: amarillo suave
```

## CTA

Destino recomendado:

```text
https://t.me/TuCitaMadrid_bot?start=landing
```

## Legal Minimo

La pagina debe incluir enlaces o secciones para:

- Aviso legal.
- Politica de privacidad.
- Terminos del servicio.
- Politica de reembolso.

Texto minimo visible:

```text
TuCita es un servicio privado independiente y no pertenece a la Administracion Publica.
El uso del servicio requiere autorizacion aceptada por el propio titular dentro del bot.
Los pagos se gestionan mediante Stripe.
Ayuda y consultas: https://t.me/TuCitaMadrid_bot?start=web_ayuda
Por seguridad, no se reciben documentos ni datos sensibles fuera del flujo autorizado del bot.
```

## Stack Recomendado

```text
Vite + React + TypeScript
CSS normal o Tailwind
Deploy en GitHub Pages con dominio propio `tucitabot.es`
```

## Prioridad

1. Hecho: crear repo independiente.
2. Hecho: subir documentacion inicial.
3. Hecho: confirmar stack Vite + React + TypeScript + CSS normal.
4. Hecho: crear landing estatica inicial.
5. Hecho: añadir responsive base.
6. Hecho: conectar CTA a Telegram.
7. Pendiente: añadir legales minimos reales.
8. Hecho: preparar deploy con GitHub Pages.
9. Pendiente: apuntar dominio `tucitabot.es`.
