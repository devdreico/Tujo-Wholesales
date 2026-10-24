# Arquitectura — Tujo Wholesales

Tujo Wholesales es una unidad interna de TUJO LOGISTICS. El sitio es una presencia corporativa estática: explica el modelo de red, presenta alcance/proyectos y deriva a tiendas oficiales y formularios configurados. No procesa ventas, pedidos ni solicitudes de envío.

---

## 1. Superficie Pública

- **Portada (`/`)**: posicionamiento, modelo, alcance reportado y proyectos.
- **Modelo (`/operacion`)**: explica cómo se conectan TUJO LOGISTICS, Wholesales y la red.
- **Tiendas (`/tiendas`)**: enlaces externos a URLs oficiales confirmadas desde `src/data/official-stores.js`.
- **Legales (`/cookies`, `/privacidad`)** y ruta 404 para cualquier otra dirección.
- **Rutas no montadas**: `/productos`, `/productos/:categoria`, `/tienda/:slug` y `/admin` no forman parte del portal público.

Los datos corporativos reportados deben llevar definición, unidad, periodo, fuente y aprobación antes de publicarse como claims.

---

## 2. Enrutamiento, SSR y SEO

- **Rutas principales (`src/main.jsx`)**: `/`, `/operacion`, `/tiendas`, `/cookies`, `/privacidad` y `*` → 404.

- **Code-Splitting y SSR / Prerender (`scripts/prerender.mjs`)**:
  - El script de compilación ejecuta SSR (`dist-ssr/prerender-entry.js`) para generar **cinco rutas corporativas** (`dist/<ruta>/index.html`) con title, description, canonical y Open Graph desde `src/lib/seo.js`.
  - En el cliente, `src/main.jsx` detecta si el contenedor posee el atributo `data-prerendered` correspondiente a la ruta actual y ejecuta `hydrateRoot` (con hidratación limpia sin errores de consola); en caso contrario, utiliza `createRoot`.
  - Un middleware integrado en `vite.config.js` resuelve las solicitudes mediante el archivo index estático correspondiente.

---

## 3. Activos Internos Heredados

El repositorio mantiene módulos previos de catálogo e importación (`scripts/import-catalog.mjs`), precios (`src/lib/pricing.js`), feeds (`scripts/generate-feeds.mjs`), canales y pedidos (`src/lib/orders-store.js`). Estos módulos no se importan en las rutas corporativas públicas y sus datos de muestra no representan inventario, desempeño ni alcance real.

No reactivar este código en la superficie pública sin una decisión de producto explícita.

---

## 4. Aseguramiento de Calidad (Testing y CI)

- **Unitaria (Vitest + Testing Library)**: lógica de rutas, identidad, directorio y módulos heredados.
- **End-to-End (Playwright)**: navegación corporativa, enlaces oficiales, accesibilidad y cierre de rutas de catálogo legacy.
- **Smoke Test en JSDOM (`scripts/smoke.mjs`)**: render de páginas corporativas y ausencia de productos en rutas legacy.
- **Accesibilidad**: axe-core en páginas públicas; el contraste por nodo solo aplica a la identidad heredada de tiendas.
- **Pipeline CI (`.github/workflows/ci.yml`)**: Ejecución secuencial de Linter (`oxlint`), Pruebas unitarias, Build/Prerender y Smoke test en cada commit o PR.

---

## 5. Árbol Estructural del Código Fuente

```text
src/
├── App.jsx
├── main.jsx
├── prerender-entry.jsx
├── index.css
├── components/
│   ├── Admin.jsx
│   ├── ChannelActions.jsx
│   ├── HomeEntry.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── SearchFilters.jsx
│   ├── StoreHero.jsx
│   ├── SubdomainBadge.jsx
│   └── admin/
├── data/
│   ├── channels.js
│   ├── products.js
│   ├── stores.jsx
│   └── stores.meta.json
├── hooks/
│   └── useReveal.js
├── lib/
│   ├── attribution.js
│   ├── channels.js
│   ├── csv.js
│   ├── feeds.js
│   ├── host.js
│   ├── orders-store.js
│   ├── pricing.js
│   └── seo.js
├── pages/
│   ├── Category.jsx
│   ├── NotFound.jsx
│   ├── Products.jsx
│   └── StorePage.jsx
└── test/
    └── setup.js
```
