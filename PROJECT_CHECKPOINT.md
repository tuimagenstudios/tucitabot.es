# TuCitaBot.es - Checkpoint

Fecha: 2 de mayo de 2026

## Estructura local

```text
TuCita/
  BOT/
  WEB/
```

## BOT

- Ruta: TuCita/BOT
- Repo: https://github.com/tuimagenstudios/TuCita
- Visibilidad: privado
- Estado: no tocar para cambios de WEB
- Tests conocidos: 48 passed
- Función: bot Telegram, scraper, monitor, pagos Stripe, PostgreSQL, legal/autorización, cifrado, auditoría y RGPD
- .env local no trackeado
- Sin cambios funcionales recientes

## WEB

- Ruta: TuCita/WEB
- Repo: https://github.com/tuimagenstudios/tucitabot.es
- Visibilidad: público
- Stack: Vite + React + TypeScript + CSS normal
- Deploy: GitHub Pages con GitHub Actions
- Workflow: .github/workflows/deploy.yml
- Custom domain GitHub Pages: tucitabot.es
- public/CNAME: tucitabot.es
- vite.config.ts: base "/"

## DNS Hostinger

- Dominio: tucitabot.es
- Estado: activo
- DNSSEC: no activo
- Nameservers:
  - orbit.dns-parking.com
  - horizon.dns-parking.com o horizonte.dns-parking.com según hPanel
- Registros:
  - A @ 185.199.108.153
  - A @ 185.199.109.153
  - A @ 185.199.110.153
  - A @ 185.199.111.153
  - CNAME www tuimagenstudios.github.io
- Pendiente:
  - propagación DNS pública
  - activar Enforce HTTPS cuando GitHub lo permita

## Diseño WEB

- Identidad visual dark premium aplicada
- Fondo principal: #05091a
- Acento / CTA: #00e0ff
- Títulos: Space Grotesk
- Cuerpo: Inter
- Microcopy/labels: JetBrains Mono
- Vibra: tech-bold con alma, premium, confiable, moderna
- No gestoría aburrida
- No bot pirata
- No crypto genérico
- Visual propio CSS
- Sin imágenes externas
- Sin backend
- Sin formularios
- Sin analíticas
- Sin secretos

## Revisión visual local

- Preview local usado: http://127.0.0.1:4173/
- Build pasó
- Desktop revisado:
  - 1366x768
  - 1440x900
- Móvil revisado:
  - 390x844
  - 360x800
- Correcciones aplicadas:
  - CTA ya no queda fuera de pantalla en desktop
  - corregido overflow horizontal móvil
  - corregidos cortes en headline, microcopy, visual CSS y pasos internos
  - acordeón móvil legible
  - footer legal sobrio
- Detalle opcional pendiente:
  - si se quiere que las tabs entren siempre en el primer fold desktop, compactar más el hero

## Pendientes próximos

1. Revisar visualmente capturas/preview con usuario.
2. Verificar propagación DNS:
   - Resolve-DnsName tucitabot.es -Type NS
   - Resolve-DnsName tucitabot.es -Type A
   - Resolve-DnsName www.tucitabot.es -Type CNAME
3. Probar URLs:
   - http://tucitabot.es
   - https://tucitabot.es
   - http://www.tucitabot.es
   - https://www.tucitabot.es
4. Activar Enforce HTTPS en GitHub Pages cuando esté disponible.
5. Ajustar diseño fino si hace falta.
6. Crear páginas legales reales:
   - Aviso legal
   - Política de privacidad
   - Términos del servicio
   - Política de reembolso
7. Revisar copy final.
8. Probar en móvil real.

## Reglas de seguridad

- No tocar BOT para cambios de WEB.
- No subir .env.
- No subir tokens.
- No subir datos personales.
- No subir contratos reales.
- No subir logs.
- No meter backend en WEB.
- WEB debe ser solo frontend estático.
- Antes de cada commit/push, revisar build y seguridad.
