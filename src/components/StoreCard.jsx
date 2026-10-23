import { Link } from 'react-router-dom'

export default function StoreCard({ store }) {
  const { slug, index: number, name, category, title, description, url } = store

  return (
    <article className="store-card">
      <div className="store-card__head">
        <span className="store-card__index mono">{number}</span>
        <span className="store-card__icon" aria-hidden="true">
          {store.icon}
        </span>
      </div>

      <div className="store-card__body">
        <p className="store-card__category">{category}</p>
        <h3 className="store-card__title">{title}</h3>
        <p className="store-card__desc">{description}</p>
      </div>

      <div className="store-card__foot">
        <Link
          className="store-card__link"
          to={`/tienda/${slug}`}
          aria-label={`Ver ${name} en el portal`}
        >
          Ver tienda
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <a
          className="store-card__ext"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visitar sitio externo de ${name}`}
        >
          ↗
        </a>
      </div>
    </article>
  )
}
