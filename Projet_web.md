# TuCita Web - Plan de Landing

## Estado Actual

Actualizado: 2 de mayo de 2026.

Ya esta hecho:

- Carpeta local separada creada: `WEB/`.
- Repo GitHub independiente creado: `tuimagenstudios/tucitabot.es`.
- Repo remoto: `https://github.com/tuimagenstudios/tucitabot.es`.
- Visibilidad actual: privado.
- Rama principal: `main`.
- Primer commit subido: `Initial web planning docs`.
- El bot vive en `BOT/` y la web vive en `WEB/`; son repos Git separados.
- La web todavia no tiene codigo de aplicacion; solo documentacion y plan.

Pendiente inmediato:

- Confirmar stack final.
- Crear estructura inicial de la landing.
- Diseñar y construir la primera version responsive.
- Preparar deploy y conectar `tucitabot.es`.

## Objetivo

Crear la pagina web de `tucitabot.es` como landing principal de marketing para TuCita. La pagina debe explicar en segundos el valor del bot, generar confianza y llevar al usuario a Telegram.

La idea central es una pantalla de decision rapida:

- El usuario entiende el problema: no consigue cita.
- Entiende la solucion: TuCita vigila y reserva por el.
- Entiende que es seguro: autorizacion, cifrado, Stripe y borrado de datos.
- Entiende el precio: mucho mas bajo que otros servicios.
- Hace clic en el CTA y entra al bot.

## Arquitectura Visual

Desktop: una pantalla principal sin scroll obligatorio.

```text
┌──────────────────────────────────────────────┐
│ Header minimo                                │
│ TuCita · Como funciona · Precio · Ayuda      │
├──────────────────────────────────────────────┤
│                                              │
│ Bot visual       Mensaje central      Persona│
│                                              │
│              Llevas semanas sin cita.        │
│        TuCita la vigila y la reserva por ti. │
│                                              │
│              [ Anotarme gratis -> ]          │
│                                              │
│    Lanzamiento inminente · Primeros 20 gratis│
│                                              │
├──────────────────────────────────────────────┤
│ [ Como funciona ] [ Seguro ] [ Precio ] [ FAQ]│
├──────────────────────────────────────────────┤
│ Panel dinamico segun pestaña activa          │
└──────────────────────────────────────────────┘
```

Movil: hero primero y pestañas convertidas en acordeon compacto. Se permite algo de scroll para evitar que el diseño quede apretado.

## Copy Principal

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

CTA principal:

```text
Anotarme gratis ->
```

Microcopy debajo del CTA:

```text
Lanzamiento inminente · Primeros 20 usuarios sin coste
```

Nota de confianza visible:

```text
Servicio privado independiente. No pertenecemos a la Administracion Publica.
```

## Pestaña 1 - Como Funciona

Objetivo: explicar el proceso sin friccion.

```text
1. Te registras desde Telegram
2. Firmas la autorizacion y tus datos quedan cifrados
3. TuCita vigila cada 3 minutos y reserva cuando aparece hueco

Tu solo te presentas a la cita.
```

Visual recomendado:

- Tres pasos horizontales en desktop.
- Tres bloques compactos en movil.
- Iconos simples: Telegram, escudo, calendario.

## Pestaña 2 - Seguro

Objetivo: resolver la objecion principal: entregar datos personales y autorizar la representacion.

```text
Contrato de autorizacion real
Datos personales cifrados
Borrado de datos con /revocar
Pagos gestionados por Stripe

No es magia. Es tecnologia legal.
```

Nota pequeña:

```text
Actuamos mediante autorizacion del usuario. Tu mantienes el control.
```

Tambien debe quedar visible:

```text
Servicio privado independiente. No pertenecemos a la Administracion Publica.
```

## Pestaña 3 - Precio

Objetivo: mostrar ahorro, claridad y garantia.

```text
Otros servicios: 59 EUR - 250 EUR
TuCita: desde 9,99 EUR

Lite   9,99 EUR  · 1 cita
Pro    19,99 EUR · 3 citas
VIP    39 EUR    · 5 citas

Si no conseguimos cita en 30 dias, devolucion total.
```

Diseño recomendado:

- Comparacion grande arriba.
- Planes en tres columnas pequeñas en desktop.
- Planes apilados en movil.
- No usar una tabla pesada tipo SaaS.

## Pestaña 4 - FAQ

Objetivo: cerrar dudas finales.

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

La pagina debe sentirse moderna, directa y confiable. El producto puede tener un bot amable, pero no debe parecer infantil porque trata con datos personales, pagos y tramites administrativos.

Paleta sugerida:

```text
Fondo: blanco frio o gris muy claro
Principal: azul confianza
Acento: verde exito
Texto: negro suave / gris carbon
Aviso lanzamiento: amarillo suave
```

Evitar:

- Landing oscura tipo crypto.
- Exceso de emojis.
- Gradientes morados genericos.
- Textos enormes en todas partes.
- Promesas absolutas tipo "cita garantizada mañana".

## Visual Principal

Composicion:

```text
Izquierda: bot TuCita, tecnologico pero cercano
Centro: mensaje + CTA
Derecha: persona con movil, cansada pero esperanzada
```

La persona representa el problema: frustracion por no encontrar cita.

El bot representa la solucion: vigilancia automatica y reserva.

Estilo recomendado:

- Ilustracion 3D suave o ilustracion editorial moderna.
- Imagen propia para que la marca no parezca plantilla.
- No usar una imagen oscura, borrosa o generica.

## Header

Header minimo:

```text
TuCita
Madrid · Extranjeria
Servicio privado
```

Links pequeños:

```text
Como funciona
Precio
Ayuda y consultas
```

No usar menu largo. La pagina debe vivir en una pantalla.

## Footer y Legal Minimo

En desktop puede ir integrado abajo o en enlaces/modal. En movil puede aparecer al final.

Texto minimo:

```text
TuCita es un servicio privado independiente y no pertenece a la Administracion Publica.
El uso del servicio requiere autorizacion aceptada por el propio titular dentro del bot.
Los pagos se gestionan mediante Stripe.
Ayuda y consultas: https://t.me/TuCitaMadrid_bot?start=web_ayuda
Por seguridad, no se reciben documentos ni datos sensibles fuera del flujo autorizado del bot.
```

Enlaces necesarios:

- Aviso legal.
- Politica de privacidad.
- Terminos del servicio.
- Politica de reembolso.

## CTA y Flujo

CTA principal:

```text
Anotarme gratis ->
```

Destino ideal:

```text
https://t.me/TuCitaMadrid_bot
```

Destino con medicion futura:

```text
https://t.me/TuCitaMadrid_bot?start=landing
```

CTA secundario en pestañas:

```text
Abrir Telegram
```

No se recomienda formulario web en la primera version. Telegram ya es el canal natural del producto y reduce friccion.

## Responsive

Desktop:

- Todo visible en una pantalla.
- Tabs horizontales.
- Panel dinamico compacto.
- CTA siempre visible.

Tablet:

- Misma estructura.
- Ilustraciones mas pequeñas.
- Panel de pestañas con menos altura.

Movil:

- Hero arriba.
- CTA visible sin scroll o con scroll minimo.
- Pestañas como acordeon.
- Imagen del bot/persona simplificada.
- Legal al final en texto pequeño.

## Prioridad de Construccion

1. Hecho: crear repo web separado para `tucitabot.es`.
2. Hecho: crear carpeta local separada `WEB/`.
3. Hecho: subir documentacion inicial al repo web.
4. Pendiente: definir stack simple.
5. Pendiente: crear landing estatica.
6. Pendiente: añadir diseño responsive.
7. Pendiente: añadir links legales minimos.
8. Pendiente: conectar CTA al bot de Telegram.
9. Pendiente: preparar deploy.
10. Pendiente: apuntar dominio `tucitabot.es`.
11. Pendiente: revisar copy final.
12. Pendiente: probar en movil real.

## Ubicacion Dentro de Este Proyecto

Para no romper el bot ni mezclar responsabilidades, la web se desarrollara en una carpeta separada:

```text
WEB/
```

Repo GitHub independiente:

```text
https://github.com/tuimagenstudios/tucitabot.es
```

La carpeta del bot mantiene su estructura actual:

```text
main.py
telegram_bot/
scraper/
cerebro/
database/
pagos/
legal/
tests/
```

La web debe poder construirse, probarse y desplegarse de forma independiente.

## Stack Recomendado

Opcion recomendada:

```text
Vite + React + TypeScript
CSS normal
Deploy en GitHub Pages con dominio propio tucitabot.es
GitHub repo separado
```

Opcion simple:

```text
HTML + CSS + JS estatico
```

Stack actual: Vite + React + TypeScript + CSS normal. La web se desplegara con GitHub Pages.

## Estructura Esperada del Proyecto Web

Sin escribir codigo todavia, el repo podria quedar asi:

```text
tucitabot-web/
  README.md
  package.json
  index.html
  src/
    App
    components/
      Hero
      Tabs
      TrustBar
      LegalLinks
    styles/
      global
  public/
    logo
    hero-image
```

## Contenido Legal Pendiente

Antes de lanzar trafico real conviene tener preparados:

- Politica de privacidad.
- Terminos del servicio.
- Politica de reembolso de 30 dias.
- Aviso legal con Tuimagen Studios.
- Texto de independencia frente a Administracion Publica.

## Metricas Iniciales

Medir:

- Clics en "Anotarme gratis".
- Pestaña mas abierta.
- Dispositivo movil/desktop.
- Conversion desde landing a `/start` del bot si usamos parametro de Telegram.

## Resultado Final Esperado

La pagina debe comunicar en 5 segundos:

```text
Tengo un problema: no consigo cita.
TuCita lo vigila por mi.
Puede reservar con autorizacion.
Es legal, seguro y barato.
Puedo probar gratis si entro pronto.
```

El tono final debe ser urgente sin parecer agresivo, confiable sin parecer aburrido y claro sin obligar al usuario a leer demasiado.
