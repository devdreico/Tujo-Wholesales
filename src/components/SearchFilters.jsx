export default function SearchFilters({
  query,
  onQuery,
  categories,
  activeCategory,
  onCategory,
  stores,
  activeStore,
  onStore,
  sort,
  onSort,
  resultCount,
}) {
  return (
    <div className="filters">
      <div className="filters__search">
        <svg className="filters__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.3" />
          <path d="m10.5 10.5 3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        <input
          className="filters__input"
          type="search"
          placeholder="Buscar productos…"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          aria-label="Buscar productos"
        />
        <span className="filters__count mono" aria-live="polite">
          {String(resultCount).padStart(3, '0')} refs
        </span>
      </div>

      <div className="filters__chips" role="group" aria-label="Filtrar por categoría">
        <button
          type="button"
          className={`chip${activeCategory === 'todas' ? ' is-active' : ''}`}
          aria-pressed={activeCategory === 'todas'}
          onClick={() => onCategory('todas')}
        >
          Todas
        </button>
        {categories.map((cat) => (
          <button
            type="button"
            key={cat}
            className={`chip${activeCategory === cat ? ' is-active' : ''}`}
            aria-pressed={activeCategory === cat}
            onClick={() => onCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="filters__selects">
        <div className="filters__select-wrap">
          <label className="filters__label mono" htmlFor="filter-store">Tienda</label>
          <select
            id="filter-store"
            className="filters__select"
            value={activeStore}
            onChange={(e) => onStore(e.target.value)}
          >
            <option value="todas">Todas</option>
            {stores.map((store) => (
              <option key={store.slug} value={store.slug}>
                {store.name}
              </option>
            ))}
          </select>
        </div>

        <div className="filters__select-wrap">
          <label className="filters__label mono" htmlFor="filter-sort">Orden</label>
          <select
            id="filter-sort"
            className="filters__select"
            value={sort}
            onChange={(e) => onSort(e.target.value)}
          >
            <option value="destacado">Destacado</option>
            <option value="precio-asc">Precio ↑</option>
            <option value="precio-desc">Precio ↓</option>
            <option value="stock">Stock</option>
            <option value="nombre">A–Z</option>
          </select>
        </div>
      </div>
    </div>
  )
}
