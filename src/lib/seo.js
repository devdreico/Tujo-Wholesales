import { BASE_URL, LEGAL_NAME, PARENT_COMPANY } from './brand.js'

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
 * @param {string} path Ruta solicitada (p. ej. "/tiendas").
 * @returns {{title: string, description: string, path: string, url: string, robots?: string}}
 */
export function seoMetaFor(path = '/') {
  const clean = normalizePath(path)
  const url = `${BASE_URL}${clean === '/' ? '/' : clean}`

  if (clean === '/') {
    return {
      title: `${LEGAL_NAME} | Red de distribución y tiendas`,
      description: `${LEGAL_NAME} conecta tiendas, bodegas independientes y distribución dentro del ecosistema ${PARENT_COMPANY}.`,
      path: clean,
      url,
    }
  }

  if (clean === '/tiendas') {
    return {
      title: `Tiendas oficiales | ${LEGAL_NAME}`,
      description: 'Acceso directo a las tiendas oficiales de la red Tujo.',
      path: clean,
      url,
    }
  }

  if (clean === '/operacion') {
    return {
      title: `El modelo de red | ${LEGAL_NAME}`,
      description: `${LEGAL_NAME} conecta tiendas, bodegas independientes y distribución dentro de ${PARENT_COMPANY}.`,
      path: clean,
      url,
    }
  }

  if (clean === '/cookies') {
    return {
      title: `Política de cookies | ${LEGAL_NAME}`,
      description: `Información sobre el uso de cookies en el sitio corporativo de ${LEGAL_NAME}.`,
      path: clean,
      url,
    }
  }

  if (clean === '/privacidad') {
    return {
      title: `Política de privacidad | ${LEGAL_NAME}`,
      description: `Información de privacidad del sitio corporativo de ${LEGAL_NAME}.`,
      path: clean,
      url,
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
