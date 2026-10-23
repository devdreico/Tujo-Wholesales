import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ items, emptyLabel = 'Sin resultados' }) {
  if (items.length === 0) {
    return (
      <div className="empty-state" role="status">
        <span className="empty-state__icon" aria-hidden="true">○</span>
        <p className="empty-state__title">{emptyLabel}</p>
        <p className="empty-state__hint">
          Ajusta la búsqueda o cambia de categoría para seguir explorando el catálogo.
        </p>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {items.map((product, i) => (
        <ProductCard key={product.id} product={product} order={i} />
      ))}
    </div>
  )
}
