import { Link } from 'react-router-dom'
import { formatPrice, unitLabel } from '../data/products.js'
import { getStore } from '../data/stores.jsx'
import ChannelActions from './ChannelActions.jsx'

export default function ProductCard({ product }) {
  const store = getStore(product.storeSlug)
  const out = product.stock === 0

  return (
    <article className="product-card">
      <div className="product-card__head">
        <span className="product-card__sku mono">{product.sku}</span>
        {product.isNew ? (
          <span className="product-card__badge">Nuevo</span>
        ) : out ? (
          <span className="product-card__badge product-card__badge--out">Agotado</span>
        ) : null}
      </div>

      <div className="product-card__visual" aria-hidden="true">
        {store?.icon}
      </div>

      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__price-row">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          <span className="product-card__unit">/ {unitLabel(product.unit)}</span>
        </div>
      </div>

      <div className="product-card__foot">
        <Link className="product-card__store" to={`/tienda/${product.storeSlug}`}>
          {store?.name}
        </Link>
        <Link
          className="product-card__go"
          to={`/tienda/${product.storeSlug}`}
          aria-label={`Ver ${product.name} en ${store?.name}`}
        >
          →
        </Link>
      </div>

      <ChannelActions product={product} store={store} />
    </article>
  )
}
