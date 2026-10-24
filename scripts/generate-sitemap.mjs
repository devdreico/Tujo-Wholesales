import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { BASE_URL } from '../src/lib/brand.js'
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const BASE = BASE_URL

/**
 * Rutas públicas corporativas. Productos, pedidos y destinos de tienda
 * pertenecen a sus sitios oficiales, no al portal de Wholesales.
 *
 * @returns {string[]} Rutas a prerenderizar y publicar en el sitemap.
 */
export function routesForPrerender() {
  return ['/', '/operacion', '/tiendas', '/cookies', '/privacidad']
}

const priorityFor = (route) => {
  if (route === '/') return '1.0'
  if (route === '/tiendas') return '0.8'
  return '0.5'
}

const changefreqFor = (route) => (route === '/' ? 'weekly' : 'monthly')

/**
 * @param {string[]} routes Rutas incluidas en el sitemap.
 * @returns {string} Documento sitemap.xml.
 */
export function sitemapXml(routes = routesForPrerender()) {
  const lastmod = new Date().toISOString().slice(0, 10)
  const entries = routes.map(
    (route) => `  <url>
    <loc>${BASE}${route === '/' ? '/' : route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreqFor(route)}</changefreq>
    <priority>${priorityFor(route)}</priority>
  </url>`
  )

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${entries.join('\n')}
</urlset>
`
}

async function main() {
  const routes = routesForPrerender()
  const xml = sitemapXml(routes)
  const targets = [path.join(ROOT, 'public', 'sitemap.xml')]
  const distSitemap = path.join(ROOT, 'dist', 'sitemap.xml')

  await writeFile(targets[0], xml)
  try {
    await writeFile(distSitemap, xml)
    targets.push(distSitemap)
  } catch {
    // dist aún no existe (ejecución suelta sin build)
  }

  console.log(
    `sitemap.xml · ${routes.length} rutas corporativas → ${targets
      .map((file) => path.relative(ROOT, file))
      .join(', ')}`
  )
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  await main()
}
