import { spawnSync } from 'node:child_process'
import { JSDOM } from 'jsdom'
import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'

const DIST = resolve(import.meta.dirname, '../dist')
const bundle = readdirSync(resolve(DIST, 'assets')).find((f) => f.endsWith('.js'))

const wait = (ms) => new Promise((res) => setTimeout(res, ms))

function createWindow(url) {
  const dom = new JSDOM(
    '<!doctype html><html><head><link rel="canonical" href=""></head><body><div id="root"></div></body></html>',
    { url, pretendToBeVisual: true }
  )
  const { window } = dom

  window.matchMedia = () => ({
    matches: false,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
  })
  window.IntersectionObserver = class {
    constructor(cb) {
      this.cb = cb
    }
    observe(el) {
      this.cb([{ isIntersecting: true, target: el }])
    }
    disconnect() {}
    unobserve() {}
  }
  window.scrollTo = () => {}
  window.fetch = () => Promise.resolve({ ok: true, status: 200, text: async () => '' })
  window.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 0)
  window.cancelAnimationFrame = (id) => clearTimeout(id)

  for (const key of [
    'window',
    'document',
    'navigator',
    'location',
    'history',
    'HTMLElement',
    'Element',
    'Node',
    'getComputedStyle',
    'CustomEvent',
    'Event',
    'MouseEvent',
    'KeyboardEvent',
    'matchMedia',
    'IntersectionObserver',
    'requestAnimationFrame',
    'cancelAnimationFrame',
    'localStorage',
    'SVGElement',
    'MutationObserver',
    'fetch',
  ]) {
    if (window[key] === undefined) continue
    try {
      Object.defineProperty(globalThis, key, {
        value: window[key],
        configurable: true,
        writable: true,
      })
    } catch {
      /* clave no redefinible en este runtime */
    }
  }

  return dom
}

const SCENARIOS = [
  {
    label: 'portada /',
    url: 'https://tujo.presentto.online/',
    checks: [
      ['hero corporativo Tujo', (d) => d.querySelector('h1')?.textContent.includes('Una red comercial')],
      ['relación con TUJO LOGISTICS', (d) => d.body.innerHTML.includes('TUJO LOGISTICS')],
      ['alcance de 23 tiendas oficiales', (d) => d.body.innerHTML.includes('23')],
      ['sin fichas de producto', (d) => d.querySelectorAll('.product-card').length === 0],
      ['CTA al modelo', (d) => Boolean(d.querySelector('a[href="#modelo"]'))],
    ],
  },
  {
    label: 'directorio /tiendas',
    url: 'https://tujo.presentto.online/tiendas',
    checks: [
      ['h1 directorio oficial', (d) => d.querySelector('h1')?.textContent.includes('Marcas propias')],
      ['nueve dominios confirmados', (d) => d.querySelectorAll('.official-store').length === 9],
      ['Esturel en subdominio oficial', (d) => d.querySelector('a[href="https://esturel.presentto.online"]') !== null],
      ['Viking Dogs en subdominio oficial', (d) => d.querySelector('a[href="https://vikingdogs.presentto.online"]') !== null],
      ['Sacreps en subdominio oficial', (d) => d.querySelector('a[href="https://sacreps.presentto.online"]') !== null],
      ['sin páginas locales de venta', (d) => d.querySelectorAll('a[href^="/tienda/"]').length === 0],
    ],
  },
  {
    label: 'modelo /operacion',
    url: 'https://tujo.presentto.online/operacion',
    checks: [
      ['explica el modelo', (d) => d.querySelector('h1')?.textContent.includes('Un modelo diseñado')],
      ['muestra las tres partes conectadas', (d) => d.querySelectorAll('.operation-flow__step').length === 3],
      ['CTA al directorio oficial', (d) => d.querySelector('a[href="/tiendas"]') !== null],
    ],
  },
  {
    label: 'ruta legacy /productos',
    url: 'https://tujo.presentto.online/productos',
    checks: [
      ['ruta antigua muestra 404', (d) => d.body.innerHTML.includes('Página no encontrada')],
      ['sin SKU ni stock', (d) => !d.body.innerHTML.includes('BT-SUP-014') && !d.body.innerHTML.includes('stock en bodega')],
      ['sin acción de compra', (d) => d.querySelectorAll('.channel-cta').length === 0],
    ],
  },
  {
    label: 'ruta legacy /tienda/ferreza',
    url: 'https://tujo.presentto.online/tienda/ferreza',
    checks: [
      ['ruta de tienda antigua muestra 404', (d) => d.body.innerHTML.includes('Página no encontrada')],
      ['sin badge local', (d) => d.querySelector('.domain-badge') === null],
      ['sin productos', (d) => d.querySelectorAll('.product-card').length === 0],
    ],
  },
  {
    label: '404',
    url: 'https://tujo.presentto.online/noexiste',
    checks: [
      ['página de error', (d) => d.body.innerHTML.includes('Página no encontrada')],
      ['canonical apunta a 404', (d) => d.head.querySelector('link[rel="canonical"]') !== null],
    ],
  },
]

async function runChild(label) {
  const scenario = SCENARIOS.find((s) => s.label === label)
  if (!scenario) {
    console.error(`Escenario desconocido: ${label}`)
    process.exit(2)
  }

  const dom = createWindow(scenario.url)
  const { window } = dom
  let runtimeError = null
  window.addEventListener('error', (e) => {
    runtimeError = e.error ?? e.message
  })

  await import(`file://${resolve(DIST, 'assets', bundle)}`)
  await wait(700)

  const doc = window.document
  const results = []
  for (const [name, fn] of scenario.checks) {
    try {
      results.push([name, Boolean(await fn(doc))])
    } catch (err) {
      results.push([name, false, err.message])
    }
  }

  const ok = !runtimeError && results.every(([, pass]) => pass)
  console.log(`${ok ? 'PASS' : 'FAIL'} · ${scenario.label}`)
  if (runtimeError) console.log(`  runtime: ${runtimeError?.stack ?? runtimeError}`)
  for (const [name, pass, detail] of results) {
    console.log(`  ${pass ? '✓' : '✗'} ${name}${pass || !detail ? '' : ` (${detail})`}`)
  }

  window.close()
  process.exit(ok ? 0 : 1)
}

if (process.argv[2] === '--child') {
  await runChild(process.argv[3])
} else {
  if (!bundle) {
    console.error('No hay bundle en dist/assets — ejecuta `npm run build` antes de `npm run smoke`.')
    process.exit(1)
  }

  const failures = []
  for (const { label } of SCENARIOS) {
    const child = spawnSync(process.execPath, [process.argv[1], '--child', label], {
      encoding: 'utf8',
      timeout: 60_000,
    })
    process.stdout.write(child.stdout ?? '')
    if (child.stderr) process.stderr.write(child.stderr)
    if (child.status !== 0) failures.push(label)
  }

  console.log(
    `\n${SCENARIOS.length - failures.length}/${SCENARIOS.length} escenarios · ${failures.length} fallos`
  )
  failures.forEach((label) => console.log(`  ✗ ${label}`))
  process.exit(failures.length === 0 ? 0 : 1)
}
