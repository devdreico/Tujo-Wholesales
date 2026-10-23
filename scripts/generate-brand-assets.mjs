import { Resvg } from '@resvg/resvg-js'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const PUBLIC = path.join(ROOT, 'public')

const FONT_OPTIONS = {
  loadSystemFonts: true,
  defaultFontFamily: 'DejaVu Sans',
}

async function render(svgPath, width) {
  const svg = await readFile(svgPath, 'utf8')
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: width }, font: FONT_OPTIONS })
  return resvg.render().asPng()
}

async function main() {
  await mkdir(PUBLIC, { recursive: true })

  const logo = path.join(PUBLIC, 'tujo-logo.svg')
  const og = path.join(PUBLIC, 'tujo-og.svg')

  const jobs = [
    { from: logo, to: 'apple-touch-icon.png', width: 180 },
    { from: logo, to: 'favicon-32.png', width: 32 },
    { from: logo, to: 'favicon-16.png', width: 16 },
    { from: og, to: 'tujo-og.png', width: 1200 },
  ]

  for (const job of jobs) {
    const png = await render(job.from, job.width)
    await writeFile(path.join(PUBLIC, job.to), png)
    console.log(`brand-assets · ${job.to} (${job.width}px, ${png.length} bytes)`)
  }
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  await main()
}
