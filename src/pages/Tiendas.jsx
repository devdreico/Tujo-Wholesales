import { useEffect } from 'react'
import { officialStores, OFFICIAL_STORE_COUNT } from '../data/official-stores.js'
import { setSeo } from '../lib/seo.js'

export default function TiendasPage() {
  useEffect(() => {
    setSeo({
      title: 'Tiendas oficiales | Tujo Wholesales',
      description: 'Acceso directo a las tiendas oficiales de la red Tujo.',
      path: '/tiendas',
    })
  }, [])

  return (
    <div className="route directory-page">
      <div className="container directory-page__inner">
        <p className="directory-page__eyebrow mono">Red oficial / {OFFICIAL_STORE_COUNT}</p>
        <h1>Marcas propias. Red compartida.</h1>
        <p className="directory-page__intro">
          Explora las tiendas oficiales del ecosistema. Cada marca conserva su
          identidad y opera desde su propio sitio.
        </p>
        <div className="official-store-grid">
          {officialStores.map((store, index) => (
            <a className="official-store" href={store.url} key={store.id}>
              <span className="official-store__index mono">{String(index + 1).padStart(2, '0')}</span>
              <span className="official-store__name">{store.name}</span>
              <span className="official-store__domain mono">{store.url.replace('https://', '')}</span>
              <span className="official-store__arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <p className="directory-page__note">
          La red cuenta con {OFFICIAL_STORE_COUNT} tiendas oficiales. Aquí aparecen
          únicamente los destinos cuya dirección está confirmada.
        </p>
      </div>
    </div>
  )
}
