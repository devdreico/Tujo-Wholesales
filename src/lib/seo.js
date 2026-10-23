import { stores } from '../data/stores.jsx'
import { CATALOG_TOTAL } from '../data/products.js'
import { categoryFromSlug } from './routes.js'
import { BASE_URL, LEGAL_NAME } from './brand.js'

const DEFAULT_ROBOTS = 'index, follow, max-image-preview:large'

const NOT_FOUND_META = {
  title: `Página no encontrada | ${LEGAL_NAME}`,
  description: `La ruta solicitada no existe dentro del ecosistema ${LEGAL_NAME}.`,
}

const normalizePath = (raw) => {
  const [onlyPath] = String(raw ?? '/').split(/[?#]/)
  const trimmed = onlyPath.replace(/\/+$/, '')
  return trimmed === '' ? '/' : trimmed
}

/**
 * Meta SEO canónica de una ruta, pura y sin DOM.
 * Es la fuente única de títulos: la usan `setSeo` (hidratación en cliente)
 * y `scripts/prerender.mjs` (etiquetas inyectadas en `dist/<ruta>/index.html`).
 *
 * @param {string} path Ruta solicitada (p. ej. "/productos/ferreteria").
 * @returns {{title: string, description: string, path: string, url: string, robots?: string}}
 */
export function seoMetaFor(path = '/') {
  const clean = normalizePath(path)
  const url = `${BASE_URL}${clean === '/' ? '/' : clean}`

  if (clean === '/') {
    return {
      title: `${LEGAL_NAME} | Importador y mayorista con bodega propia`,
      description:
        'Portal mayorista de Tujo Wholesales, empresa derivada de Tujo Logistics: 22 tiendas afiliadas con identidad propia y catálogo de más de 1000 productos con inventario en bodega.',
      path: clean,
      url,
    }
  }

  if (clean === '/productos') {
    return {
      title: `Productos y mayoreo (${CATALOG_TOTAL}+ referencias) | ${LEGAL_NAME}`,
      description:
        'Catálogo de mayoreo del ecosistema Tujo Wholesales: más de 1000 referencias con stock en bodega, buscador, filtros por tienda y categoría.',
      path: clean,
      url,
    }
  }

  if (clean.startsWith('/productos/')) {
    const category = categoryFromSlug(clean.slice('/productos/'.length))
    if (!category) return { ...NOT_FOUND_META, path: clean, url }
    return {
      title: `${category} — mayoreo | ${LEGAL_NAME}`,
      description: `Mayoreo de ${category}: referencias con stock en bodega del ecosistema Tujo Wholesales, con buscador, filtros por nodo y precios por caja, pack, kilogramo o litro.`,
      path: clean,
      url,
    }
  }

  if (clean.startsWith('/tienda/')) {
    const store = stores.find((entry) => entry.slug === clean.slice('/tienda/'.length))
    if (!store) return { ...NOT_FOUND_META, path: clean, url }
    return {
      title: `${store.name} (${store.category}) | ${LEGAL_NAME}`,
      description: `${store.description} Nodo ${store.index} del ecosistema Tujo Wholesales — accede a su apartado en ${store.subdomain}.`,
      path: clean,
      url,
    }
  }

  if (clean === '/admin') {
    return {
      title: `Hub de pedidos | ${LEGAL_NAME}`,
      description:
        'Panel interno de operación multicanal del ecosistema Tujo Wholesales.',
      path: clean,
      url,
      robots: 'noindex, follow',
    }
  }

  return { ...NOT_FOUND_META, path: clean, url }
}

const apply = (selector, attr, value) => {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/**
 * Actualiza title / description / canonical / OG en cada cambio de ruta (SPA).
 * `title` y `description` son opcionales: si se omiten se resuelven con
 * `seoMetaFor(path)`.
 *
 * @param {{title?: string, description?: string, path?: string, robots?: string}} meta
 */
export function setSeo({ title, description, path = '/', robots } = {}) {
  const meta = seoMetaFor(path)

  document.title = title ?? meta.title
  apply('meta[name="description"]', 'content', description ?? meta.description)
  apply('link[rel="canonical"]', 'href', meta.url)
  apply('meta[property="og:title"]', 'content', title ?? meta.title)
  apply('meta[property="og:description"]', 'content', description ?? meta.description)
  apply('meta[property="og:url"]', 'content', meta.url)
  apply('meta[name="twitter:title"]', 'content', title ?? meta.title)
  apply('meta[name="twitter:description"]', 'content', description ?? meta.description)
  apply('meta[name="robots"]', 'content', robots ?? meta.robots ?? DEFAULT_ROBOTS)
}
