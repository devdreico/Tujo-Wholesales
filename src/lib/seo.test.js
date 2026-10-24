import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { setSeo } from './seo.js'

const FIXTURE_MARK = 'seo-fixture'

const seedTags = () => {
  const markup = `
    <meta name="description" content="" data-seo-fixture="${FIXTURE_MARK}" />
    <link rel="canonical" href="" data-seo-fixture="${FIXTURE_MARK}" />
    <meta property="og:title" content="" data-seo-fixture="${FIXTURE_MARK}" />
    <meta property="og:description" content="" data-seo-fixture="${FIXTURE_MARK}" />
    <meta property="og:url" content="" data-seo-fixture="${FIXTURE_MARK}" />
    <meta name="twitter:title" content="" data-seo-fixture="${FIXTURE_MARK}" />
    <meta name="twitter:description" content="" data-seo-fixture="${FIXTURE_MARK}" />
  `
  document.head.insertAdjacentHTML('beforeend', markup)
}

const removeTags = () => {
  document.head
    .querySelectorAll(`[data-seo-fixture="${FIXTURE_MARK}"]`)
    .forEach((tag) => tag.remove())
}

const meta = (selector) => document.head.querySelector(selector)?.getAttribute('content')

describe('setSeo', () => {
  beforeEach(() => {
    seedTags()
  })

  afterEach(() => {
    removeTags()
  })

  it('actualiza el title del documento', () => {
    setSeo({
      title: 'Tujo Wholesales | Red de distribución y tiendas',
      description: 'Descripción de prueba',
      path: '/operacion',
    })

    expect(document.title).toBe('Tujo Wholesales | Red de distribución y tiendas')
  })

  it('actualiza la meta description', () => {
    setSeo({
      title: 'Título',
      description: 'Conexión de tiendas, bodegas y distribución.',
      path: '/operacion',
    })

    expect(meta('meta[name="description"]')).toBe(
      'Conexión de tiendas, bodegas y distribución.'
    )
  })

  it('actualiza el canonical con la ruta indicada', () => {
    setSeo({ title: 'Título', description: 'Descripción', path: '/tiendas' })

    expect(document.head.querySelector('link[rel="canonical"]').getAttribute('href')).toBe(
      'https://tujo.presentto.online/tiendas'
    )
  })

  it('apunta el canonical y og:url a la raíz cuando la ruta es /', () => {
    setSeo({ title: 'Título', description: 'Descripción', path: '/' })

    expect(document.head.querySelector('link[rel="canonical"]').getAttribute('href')).toBe(
      'https://tujo.presentto.online/'
    )
    expect(meta('meta[property="og:url"]')).toBe('https://tujo.presentto.online/')
  })

  it('actualiza og:title y og:description junto al title', () => {
    setSeo({
      title: 'Tiendas oficiales | Tujo Wholesales',
      description: 'Acceso a las tiendas oficiales de Tujo.',
      path: '/tiendas',
    })

    expect(meta('meta[property="og:title"]')).toBe(
      'Tiendas oficiales | Tujo Wholesales'
    )
    expect(meta('meta[property="og:description"]')).toBe('Acceso a las tiendas oficiales de Tujo.')
    expect(meta('meta[property="og:url"]')).toBe(
      'https://tujo.presentto.online/tiendas'
    )
  })
})
