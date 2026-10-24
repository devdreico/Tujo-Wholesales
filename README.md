# Tujo Wholesales

Sitio corporativo de **Tujo Wholesales**, unidad interna de **TUJO LOGISTICS**. Presenta el modelo de distribución, proyectos y alcance de la red, y redirige a tiendas oficiales y formularios autorizados.

El sitio público no es una tienda: no expone productos, precios, stock, pedidos, pagos ni solicitudes de envío. El logo oficial es `public/tujo-logo-real.png`; el dominio canónico es `https://tujo.presentto.online`.

## Stack

- **Framework**: React 19 + Vite 8
- **Enrutamiento**: `react-router-dom@7.18.4` (Lazy loading por ruta + Suspense)
- **Estilos**: CSS nativo con diseño modular y variables por nodo (`src/index.css`, `src/styles/`)
- **Calidad y Linter**: `oxlint`
- **Testing**: Vitest + Testing Library (unitarias), Playwright (E2E), scripts de smoke en jsdom y contraste WCAG

## Requisitos y Configuración

- **Node.js**: v22 o superior
- **Gestor de paquetes**: npm

```bash
# Instalación de dependencias
npm ci

# Servidor de desarrollo
npm run dev

# Compilación de producción (incluye SSR, cinco rutas corporativas y sitemap)
npm run build
```

## Scripts Disponibles

| Script | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo Vite |
| `npm run build` | Compila cliente y SSR, prerenderiza cinco rutas corporativas y actualiza el sitemap |
| `npm run preview` | Previsualiza la compilación de producción |
| `npm run lint` | Ejecuta `oxlint` para validación de código |
| `npm test` | Ejecuta la suite de unitarias con Vitest |
| `npm run test:watch` | Ejecuta Vitest en modo watch |
| `npm run test:e2e` | Ejecuta las pruebas End-to-End con Playwright |
| `npm run smoke` | Ejecuta seis escenarios corporativos en jsdom |
| `npm run contrast` | Verifica contraste de paletas heredadas |
| `npm run feeds` | Herramienta heredada, fuera de la experiencia pública |
| `npm run catalog:import` | Herramienta heredada, fuera de la experiencia pública |

## Rutas públicas

| Ruta | Propósito |
|---|---|
| `/` | Presentación del modelo, alcance y proyectos |
| `/operacion` | Estructura del modelo de red |
| `/tiendas` | Redirecciones a sitios oficiales confirmados |
| `/cookies` y `/privacidad` | Información legal |

Las URLs confirmadas se mantienen en `src/data/official-stores.js`. Actualmente se muestran solo las direcciones verificadas; completar las 22 requiere validar cada destino.

## Destinos configurables

- `VITE_PARTNER_FORM_URL`: formulario oficial de alianzas.
- `VITE_TUJO_LOGISTICS_URL`: sitio oficial de TUJO LOGISTICS.

Ambos destinos solo se muestran si son URLs HTTPS válidas. No se inventan enlaces mientras falten los destinos aprobados.

## Estructura principal

- `src/pages/`: Inicio, modelo de red, directorio y páginas legales.
- `src/data/official-stores.js`: destinos oficiales confirmados.
- `src/data/destinations.js`: destinos HTTPS opcionales para alianzas y TUJO LOGISTICS.
- `src/lib/brand.js` y `src/lib/seo.js`: identidad, dominio canónico y metadatos.
- `src/styles/corporate.css`: sistema visual corporativo del sitio.
- `scripts/`: prerender, sitemap, validaciones y smoke test.
- Módulos anteriores de productos/pedidos permanecen como legado no publicado.

## Cómo Añadir un Destino Oficial

1. Confirmar nombre, dominio HTTPS, responsable y estado de la tienda con el propietario.
2. Añadir la entrada a `src/data/official-stores.js`.
3. Probar redirección y actualizar las pruebas del directorio. La ficha se abre en el sitio oficial, no en una página de producto local.

## Activos Internos Heredados

El repositorio conserva módulos de catálogo, pricing, feeds, canales y pedidos del prototipo anterior. No están montados en rutas públicas; sus datos de ejemplo no son inventario ni métricas corporativas. No reactivarlos en la web pública sin una decisión explícita de producto.

## Notas de Calidad y Verificación

El proyecto cuenta con un pipeline de CI configurado en `.github/workflows/ci.yml` que ejecuta:
1. `npm run lint` (0 warnings permitidos)
2. `npm test` (tests unitarios en verde)
3. `npm run build` (compilación completa y prerender)
4. `npm run smoke` (rutas corporativas y ausencia de catálogo público)
