# TODO — Tujo Wholesales: experiencia corporativa y red oficial

## Objetivo del sitio

Presentar a Tujo Wholesales como unidad interna de **TUJO LOGISTICS**, explicar el modelo de distribución y colaboración, mostrar proyectos y su alcance con cifras verificables, y derivar a contactos interesados hacia formularios oficiales, Tujo y las tiendas de la red.

Este sitio **no es una tienda**: no debe mostrar productos, precios, stock, carrito, checkout, pedidos ni solicitudes de envío. El catálogo, los feeds y los componentes de pedido existentes quedan fuera del recorrido público; no eliminarlos hasta decidir si sirven para herramientas internas.

## Reglas de contenido y diseño

- Logo oficial único: `public/tujo-logo-real.png`.
- Dominio principal de redirección: `tujo.presentto.online`.
- Tiendas: enlaces directos a dominios oficiales `nombredeempresa.presentto.online`.
- Tono corporativo, claro y profesional; explicar el modelo sin prometer resultados no demostrados.
- Toda cifra pública debe tener definición, unidad, periodo, fuente y fecha de actualización. Si falta evidencia, no se publica.
- No publicar la cifra de más de 500.000 tiendas hasta recibir respaldo y aprobación explícita.
- Priorizar jerarquía, tipografía, composición visual, legibilidad, fotografía/recursos reales, responsive y accesibilidad sobre adornos o animaciones gratuitas.

## Bloqueos de negocio y contenido

| ID | Insumo requerido | Formato de entrega | Desbloquea | Estado |
|---|---|---|---|---|
| I1 | Directorio oficial de 22 tiendas | Nombre visible, URL final, logo autorizado (si existe), estado activa/inactiva | Directorio y redirecciones | [ ] |
| I2 | Destinos oficiales | URL de Tujo, formulario para socios y otros formularios aprobados; indicar propietario de cada destino | CTAs y páginas de participación | [ ] |
| I3 | Audiencias y modelo | Tipos de participantes, qué aportan, qué reciben y cómo se integran; validar con negocio | Mensaje principal y páginas del modelo | [ ] |
| I4 | Datos de escala/proyectos | Por proyecto: nombre, objetivo, estado, territorio, periodo, aliados, alcance medido, unidad, fuente y aprobador. Para cifras de red: definición, periodo y evidencia | Bloque cuantitativo y proyectos | [ ] |
| I5 | Identidad visual | Logo oficial ya localizado; confirmar paleta, tipografías, fotografías, permisos y usos de marcas | Sistema visual | [~] |
| I6 | Datos corporativos/legales | Razón social publicable, contacto, privacidad y responsable de formularios | Pie, contacto y confianza | [ ] |

## Fase 0 — Alinear la historia

| ID | Tarea | Criterio de aceptación | Bloqueo | Estado |
|---|---|---|---|---|
| 0.1 | Definir frase de posicionamiento | Una frase aprobada describe qué hace Wholesales dentro de TUJO LOGISTICS, sin lenguaje de tienda o fulfillment al consumidor | I3 | [ ] |
| 0.2 | Mapear públicos y acciones | Cada público tiene una acción principal aprobada: conocer el modelo, sumarse como socio/tienda/bodega o visitar una tienda oficial | I2, I3 | [x] |
| 0.3 | Inventariar afirmaciones públicas | Cada claim tiene responsable y evidencia; claims sin validar quedan fuera del sitio | I4, I6 | [ ] |
| 0.4 | Corregir inconsistencias actuales | Una sola lista de tiendas y una sola descripción de mercados/alcance en todas las páginas y metadatos | I1, I4 | [x] |

## Fase 1 — Diseño de experiencia

| ID | Tarea | Criterio de aceptación | Bloqueo | Estado |
|---|---|---|---|---|
| 1.1 | Definir arquitectura de información | Sitemap aprobado: Inicio, Modelo, Proyectos/Alcance, Tiendas oficiales, Participar y páginas legales/contacto necesarias | 0.2, I2 | [x] |
| 1.2 | Diseñar flujo de navegación | En máximo dos decisiones desde Inicio se llega a tiendas oficiales o al formulario correcto; cada CTA nombra claramente el destino | I2 | [~] |
| 1.3 | Diseñar wireframes responsive | Wireframes de móvil y escritorio para Inicio, Modelo, Proyectos, Directorio y Participar; se revisa primero el viewport móvil | 1.1 | [~] |
| 1.4 | Diseñar sistema visual | Logo real integrado; tokens de color, tipografía, escala, espaciado, botones, enlaces, estados, iconografía y tratamiento de imágenes documentados | I5 | [~] |
| 1.5 | Diseñar visualización del modelo | Diagrama legible que explique cómo se conectan TUJO LOGISTICS, Wholesales, tiendas/bodegas y distribución, aprobado por negocio | I3 | [~] |
| 1.6 | Diseñar fichas de proyectos y métricas | Cada ficha explica objetivo, aporte de Wholesales, estado, territorio, periodo, alcance/resultados medidos y cómo colaborar si aplica; métricas muestran valor, unidad, fuente y fecha. Separar resultados logrados de metas futuras | I2, I4 | [ ] |
| 1.7 | Diseñar directorio de 22 tiendas | Nombre y enlace oficial por tienda; búsqueda/filtro solo si mejora el uso con 22 elementos; ninguna tarjeta simula compra | I1 | [~] |
| 1.8 | Revisar prototipo con usuarios internos | Validación con al menos 3 perfiles representativos del equipo/negocio; registrar dudas, cambios y aprobación final | 1.3–1.7 | [ ] |

## Fase 2 — Implementación del sitio

| ID | Tarea | Criterio de aceptación | Bloqueo | Estado |
|---|---|---|---|---|
| 2.1 | Rehacer Inicio corporativo | Presenta marca, relación con TUJO LOGISTICS, modelo y rutas principales; sin catálogo ni cifras sin aprobar | Fase 1 | [x] |
| 2.2 | Publicar página Modelo | Describe roles, flujo de colaboración y alcance en lenguaje aprobado; sin promesas de entregas al visitante | I3 | [~] |
| 2.3 | Publicar Proyectos y alcance | Cada proyecto publicado incluye objetivo, aporte de Wholesales, estado, territorio/periodo y resultado cuantificado con unidad y fuente; las metas futuras se etiquetan como metas y la colaboración enlaza al formulario aprobado | I2, I4 | [ ] |
| 2.4 | Publicar directorio oficial | Las 22 entradas apuntan a URLs confirmadas; enlaces probados y marcas visuales autorizadas | I1 | [~] |
| 2.5 | Implementar CTAs de participación | Cada CTA abre el formulario oficial correspondiente; no se crea un formulario paralelo sin dueño y destino aprobados | I2 | [ ] |
| 2.6 | Integrar logo y metadatos | `tujo-logo-real.png` usado en encabezado, favicon/manifest y Open Graph, con dimensiones/alternativas correctas | I5 | [x] |
| 2.7 | Retirar rutas comerciales del menú público | Productos, categorías, fichas, admin y acciones de pedido no aparecen en navegación, sitemap público ni CTA de la nueva experiencia | Aprobación de alcance | [x] |
| 2.8 | Actualizar documentación | README, arquitectura y sitemap describen presencia corporativa, captación y redirecciones; backlog anterior queda archivado o eliminado | 2.1–2.7 | [x] |

## Fase 3 — Calidad y publicación

| ID | Tarea | Criterio de aceptación | Estado |
|---|---|---|---|
| 3.1 | Verificar redirecciones | Todas las URLs de Tiendas/Tujo/formularios responden al destino aprobado; revisar enlaces rotos y bucles | [ ] |
| 3.2 | Probar responsive | Sin desbordamientos ni texto cortado en móvil, tablet y escritorio; CTAs principales visibles y utilizables | [ ] |
| 3.3 | Revisar accesibilidad | Navegación completa por teclado, foco visible, estructura semántica, contraste WCAG AA y nombres accesibles en enlaces | [ ] |
| 3.4 | Revisar SEO y compartición | Títulos, descripciones, canonical, Open Graph, sitemap y robots reflejan el rol corporativo; no indexar rutas internas | [x] |
| 3.5 | Validar contenido y cifras | Aprobación final de negocio; toda métrica publicada tiene fuente, periodo y fecha | [ ] |
| 3.6 | Ejecutar gates técnicos | `npm run lint`, `npm test`, `npm run build`, `npm run smoke` y E2E relevantes pasan | [~] |
| 3.7 | Hacer revisión de lanzamiento | Revisar producción en móvil/escritorio y confirmar dominio, SSL, logo, formularios y enlaces oficiales | [ ] |

## Fuera de alcance público

- Tienda, catálogo de SKUs, precios, stock, carrito, checkout y pagos.
- Solicitudes de envío, cotizaciones de productos o seguimiento de pedidos.
- Panel de pedidos como herramienta pública.
- Cifras de red, cobertura o resultados no documentadas y aprobadas.
- Activar las 22 tiendas con URLs supuestas: cada destino requiere confirmación del responsable.

## Orden de ejecución

`Bloqueos I1–I6 → Fase 0 → diseño Fase 1 y aprobación → implementación Fase 2 → calidad y publicación Fase 3`

No iniciar la implementación visual completa antes de aprobar arquitectura, prototipos, lista de tiendas, destinos de formularios y claims cuantitativos. El logo oficial sí está disponible en `public/tujo-logo-real.png`.
