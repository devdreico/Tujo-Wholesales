import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { stores } from '../data/stores.jsx'
import { setSeo } from '../lib/seo.js'

export default function TiendasPage() {
  useEffect(() => {
    setSeo({
      title: 'Tiendas y nodos | Soverath Wholesales',
      description: 'Directorio de tiendas del ecosistema Soverath Wholesales y acceso a cada nodo comercial.',
      path: '/tiendas',
    })
  }, [])

  return (
    <section className="page-shell glass" style={{ padding: '2rem', borderRadius: '28px' }}>
      <p className="section-heading__eyebrow mono" style={{ marginBottom: '1rem' }}>
        <span className="section-heading__pulse" aria-hidden="true" />
        Directorio de nodos
      </p>
      <h1 style={{ marginTop: 0, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.06em' }}>
        Las tiendas del ecosistema
      </h1>

      <div className="stores__grid" style={{ marginTop: '1.5rem' }}>
        {stores.map((store) => (
          <article key={store.slug} className="card glass" style={{ minHeight: 210 }}>
            <div className="card__head">
              <span className="card__icon" aria-hidden="true">{store.icon}</span>
              <span className="card__meta">
                <span className="card__category">{store.category}</span>
                <span className="card__name mono">{store.slug}</span>
              </span>
            </div>
            <div className="card__body">
              <h3 className="card__title">{store.name}</h3>
              <p className="card__description">{store.description}</p>
            </div>
            <div className="card__foot">
              <span className="card__domain mono">{store.subdomain}</span>
              <Link to={`/tienda/${store.slug}`} className="card__cta" aria-label={`Abrir ${store.name}`}>
                →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
