import { Link } from 'react-router-dom'
import SubdomainBadge from './SubdomainBadge.jsx'
import ChannelActions from './ChannelActions.jsx'

export default function StoreHero({ store, productCount }) {
  return (
    <section className="store-hero">
      <div className="store-hero__inner container">
        <Link className="store-hero__back mono" to="/tiendas">
          ← Todas las tiendas
        </Link>

        <p className="store-hero__eyebrow mono">
          Nodo {store.index} / 22 · {store.category}
        </p>

        <h1 className="store-hero__title">{store.name}</h1>
        <p className="store-hero__lead">{store.title}</p>
        <p className="store-hero__desc">{store.description}</p>

        <div className="store-hero__meta">
          <SubdomainBadge subdomain={store.subdomain} />
          <span className="store-hero__count mono">
            {String(productCount).padStart(2, '0')} referencias
          </span>
        </div>

        <div className="store-hero__actions">
          <a
            className="btn btn--primary"
            href={store.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir tienda ↗
          </a>
          <a
            className="btn btn--outline mono"
            href={`https://${store.subdomain}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {store.subdomain}
          </a>
        </div>

        <ChannelActions store={store} label="Cotizar por canal" />

        {store.tags.length > 0 ? (
          <ul className="store-hero__tags">
            {store.tags.map((tag) => (
              <li key={tag} className="store-hero__tag mono">#{tag}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}
