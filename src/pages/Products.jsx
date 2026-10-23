import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import SearchFilters from '../components/SearchFilters.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import { products, categories, CATALOG_TOTAL } from '../data/products.js'
import { stores } from '../data/stores.jsx'
import { categoryPath } from '../lib/routes.js'
import { setSeo } from '../lib/seo.js'

const PAGE = 12

export function CatalogPage({ path, initialCategory = 'todas' }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(initialCategory)
  const [store, setStore] = useState('todas')
  const [sort, setSort] = useState('destacado')
  const [visible, setVisible] = useState(PAGE)

  const isCategory = initialCategory !== 'todas'

  useEffect(() => {
    setSeo({ path })
  }, [path])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const list = products.filter((p) => {
      if (category !== 'todas' && p.category !== category) return false
      if (store !== 'todas' && p.storeSlug !== store) return false
      if (!q) return true
      return (
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.includes(q))
      )
    })
    const sorted = [...list]
    if (sort === 'precio-asc') sorted.sort((a, b) => a.price - b.price)
    if (sort === 'precio-desc') sorted.sort((a, b) => b.price - a.price)
    if (sort === 'stock') sorted.sort((a, b) => b.stock - a.stock)
    if (sort === 'nombre') sorted.sort((a, b) => a.name.localeCompare(b.name, 'es'))
    return sorted
  }, [query, category, store, sort])

  const resetPage = () => setVisible(PAGE)
  const onQuery = (v) => { setQuery(v); resetPage() }
  const onCategory = (v) => { setCategory(v); resetPage() }
  const onStore = (v) => { setStore(v); resetPage() }
  const onSort = (v) => { setSort(v); resetPage() }

  const shown = filtered.slice(0, visible)
  const remaining = filtered.length - shown.length

  return (
    <div className="route">
      <div className="container">
        <SectionHeading
          as="h1"
          eyebrow={isCategory ? `Categoría · ${initialCategory}` : 'Catálogo'}
          title={isCategory ? `Mayoreo de ${initialCategory}` : 'Catálogo de mayoreo'}
          description="Busca por nombre, SKU o etiqueta; filtra por nodo y categoría."
        />

        <SearchFilters
          query={query}
          onQuery={onQuery}
          categories={categories}
          activeCategory={category}
          onCategory={onCategory}
          stores={stores}
          activeStore={store}
          onStore={onStore}
          sort={sort}
          onSort={onSort}
          resultCount={filtered.length}
        />

        <nav className="category-nav" aria-label="Categorías del catálogo">
          <Link
            className={`chip${path === '/productos' ? ' is-active' : ''}`}
            aria-current={path === '/productos' ? 'page' : undefined}
            to="/productos"
          >
            Todas
          </Link>
          {categories.map((name) => {
            const to = categoryPath(name)
            const active = path === to
            return (
              <Link
                key={name}
                className={`chip${active ? ' is-active' : ''}`}
                aria-current={active ? 'page' : undefined}
                to={to}
              >
                {name}
              </Link>
            )
          })}
        </nav>

        <ProductGrid items={shown} />

        {remaining > 0 ? (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              type="button"
              className="btn btn--outline"
              onClick={() => setVisible((v) => v + PAGE)}
            >
              Cargar más ({remaining} restantes)
            </button>
          </div>
        ) : (
          <p className="load-note mono">
            {filtered.length === products.length
              ? `Mostrando ${products.length} referencias de la muestra · el catálogo completo supera las ${CATALOG_TOTAL}`
              : 'Fin de los resultados'}
          </p>
        )}
      </div>
    </div>
  )
}

export default function Products() {
  return <CatalogPage path="/productos" />
}
