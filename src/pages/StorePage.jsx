import { useEffect } from 'react'
import { Navigate, Link, useParams } from 'react-router-dom'
import StoreHero from '../components/StoreHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import { getStore, stores } from '../data/stores.jsx'
import { products, CATALOG_TOTAL } from '../data/products.js'
import { setSeo } from '../lib/seo.js'

export default function StorePage() {
  const { slug } = useParams()
  const store = getStore(slug)

  useEffect(() => {
    if (!store) return
    setSeo({
      title: `${store.name} (${store.category}) | Tujo Wholesales`,
      description: `${store.description} Nodo ${store.index} del ecosistema Tujo Wholesales.`,
      path: `/tienda/${store.slug}`,
    })
  }, [store])

  if (!store) return <Navigate to="/404" replace />

  const items = products.filter((p) => p.storeSlug === store.slug)
  const siblings = stores.filter((s) => s.slug !== store.slug).slice(0, 6)

  return (
    <div className="route">
      <StoreHero store={store} productCount={items.length} />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={`Nodo ${store.index} · catálogo`}
            title={`Existencias de ${store.name}`}
            description={`Muestra publicada de ${store.name}. El catálogo completo del nodo supera las ${CATALOG_TOTAL} referencias.`}
          />
          <ProductGrid items={items} emptyLabel={`Sin referencias publicadas en ${store.name}`} />
        </div>
      </section>

      <section className="section" aria-label="Otros nodos">
        <div className="container">
          <p className="siblings__label mono">Sigue explorando</p>
          <ul className="siblings__list">
            {siblings.map((s) => (
              <li key={s.slug}>
                <Link className="siblings__item" to={`/tienda/${s.slug}`}>
                  <span className="mono">{s.index}</span>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
