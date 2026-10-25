# Análisis — Sitio corporativo de Tujo Wholesales

Tujo Wholesales es una unidad interna de TUJO LOGISTICS. Su sitio principal es una presencia corporativa y de derivación: explica el modelo, presenta proyectos y alcance, y conecta visitantes con tiendas oficiales y formularios autorizados. No es el canal para vender productos ni para solicitar entregas.

## Estado implementado

- La portada presenta la relación con TUJO LOGISTICS, el modelo de red y líneas de trabajo.
- El bloque cuantitativo muestra la cifra reportada por el propietario como alcance declarado, no como auditoría independiente.
- El directorio enlaza directamente a los destinos confirmados; no inventa URLs para completar la red de 23 tiendas.
- Los CTA de alianzas y TUJO LOGISTICS solo aparecen cuando hay URLs HTTPS válidas configuradas.
- El router público no monta catálogo, ficha de tienda ni administración. Esas rutas responden con una página 404.
- Prerender, sitemap, canonical, Open Graph y robots usan el dominio `tujo.presentto.online` y páginas corporativas.
- El logo oficial está en `public/tujo-logo-real.png`.

## Decisiones pendientes

1. Aprobar el directorio completo de 23 tiendas y confirmar propiedad, nombre y URL oficial de cada subdominio.
2. Configurar `VITE_PARTNER_FORM_URL` y `VITE_TUJO_LOGISTICS_URL` con los destinos definitivos.
3. Aportar definición, periodo, fuente y responsable para la cifra de más de 500.000 tiendas independientes.
4. Definir proyectos reales con objetivo, contribución de Wholesales, estado, territorio, resultados, periodo, fuente y siguiente oportunidad de participación.
5. Revisar las páginas de privacidad y cookies según los formularios, analítica y herramientas realmente activas.

## Prioridad de evolución

Primero aprobar contenido y destinos; después cerrar diseño responsive, directorio y CTAs; finalmente probar redirecciones, accesibilidad, SEO, rendimiento y medición de clics. No reactivar catálogo, feeds o pedidos desde el sitio público.

## Riesgos

- Publicar las 23 tiendas antes de confirmar cada destino puede enviar tráfico a sitios incorrectos.
- Cifras y proyectos sin definición, periodo y fuente pueden comunicar un alcance engañoso.
- Los módulos heredados de catálogo, feeds y pedidos siguen en el repositorio; deben permanecer fuera del router y de la navegación pública.
- Playwright requiere Chromium instalado. Si no está disponible, la suite E2E no se considera verificada.