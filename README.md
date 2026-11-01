# Smart Route

Prototipo móvil navegable de ocho pantallas, íntegramente en español. Implementado con HTML, CSS y JavaScript sin dependencias de compilación ni backend.

## Ejecutar

Abre `dist/index.html` directamente en el navegador o sirve `dist/` con un servidor HTTP estático. El contenido mantiene un ancho máximo móvil de 430 px también en monitores grandes.

## Recorrido

Inicio de sesión → Centro de operaciones → Carga → Vehículo → Entrega → Análisis → Comparación → Confirmación. Los formularios conservan su estado durante la sesión. La navegación inferior ofrece Inicio, Planificar, Operaciones, Vehículos y Perfil; Operaciones y Perfil utilizan diálogos para mantener exactamente ocho pantallas principales.

Los botones permiten iniciar una ruta, descargar un resumen TXT y revisar alertas. El análisis es una simulación animada con datos locales; no consulta restricciones reales ni utiliza un servicio de IA o cartografía. Los escenarios modificados que no pueden calcularse se explican y pueden restaurarse.

## Marca y coherencia

El logo oficial se conserva en `assets/images/logo-smart-route.png` y se distribuye sin modificaciones en `dist/assets/images/logo-smart-route.png`. Se muestra en Login, en los encabezados de las siete vistas posteriores y en Perfil. Mantiene su proporción original sobre fondo negro; no utiliza sustitutos de texto ni imágenes guardadas anteriormente en el navegador.

El PNG original mide 448 × 282 px. Se presenta a 300 px de ancho en Login, 144 px en encabezados y 240 px en Perfil, con altura automática y `object-fit: contain`, sin ampliarlo por encima de su resolución original. Las comprobaciones verifican la presencia del logo en las ocho vistas y Perfil y la igualdad binaria del archivo. La captura visual se intentó con Chrome y Edge, pero los procesos de renderizado fallaron en este entorno; queda pendiente esa comprobación en un navegador interactivo.

Se corrigieron dos inconsistencias del brief: 07:00 + 1 h 06 min = 08:06, dejando 1 h 24 min hasta 09:30; $93.200 − $87.500 = $5.700 COP. El 96 % expresa ajuste del vehículo y el 100 % compatibilidad con la vía validada. El conteo de 36 pallets se conserva como dato solicitado; su disposición física debe validarse en una implementación operativa.

## Validación

`node --check dist/app.js` verifica la sintaxis JavaScript. `node check-flow.cjs` comprueba las ocho vistas, navegación, persistencia de datos, validación de carga, bloqueo de la Ruta B, inicio de ruta y coherencia aritmética. Estas comprobaciones usan un DOM simulado; no sustituyen la revisión visual en navegador, pendiente en este entorno. Revisar el recorrido completo y la descarga antes de una presentación. La tipografía Manrope se carga desde Google Fonts con Arial como alternativa local.
