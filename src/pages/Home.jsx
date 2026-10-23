import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import StoreCard from '../components/StoreCard.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { stores } from '../data/stores.jsx'
import { products, CATALOG_TOTAL, categories } from '../data/products.js'
import { setSeo } from '../lib/seo.js'
import { LEGAL_NAME, PARENT_COMPANY } from '../lib/brand.js'

export default function Home() {
  useEffect(() => {
    setSeo({
      title: `${LEGAL_NAME} | Importador y mayorista con bodega propia`,
      description:
        'Portal del ecosistema Tujo Wholesales, empresa derivada de Tujo Logistics: 22 tiendas afiliadas con identidad propia y catálogo de más de 1000 productos con inventario en bodega.',
      path: '/',
    })
  }, [])

  const featured = products.slice(0, 6)

  return (
    <div className="route">
      {/* Hero */}
      <section className="hero">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <p className="hero__eyebrow mono">Importación · mayoreo · logística</p>
          <h1 className="hero__title">
            Mayoreo con respaldo logístico
          </h1>
          <p className="hero__lead">
            {LEGAL_NAME} coordina inventario, importación y distribución para
            bodegas, retail y gastronomía. Empresa derivada de {PARENT_COMPANY}.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/productos">
              Ver productos
            </Link>
            <Link className="btn btn--outline" to="/tiendas">
              Explorar tiendas
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats" aria-label="Cifras del ecosistema">
        <div className="container">
          <div className="stats__grid">
            <div className="stats__item">
              <span className="stats__value">{stores.length}</span>
              <span className="stats__label mono">tiendas</span>
            </div>
            <div className="stats__item">
              <span className="stats__value">{CATALOG_TOTAL}+</span>
              <span className="stats__label mono">referencias</span>
            </div>
            <div className="stats__item">
              <span className="stats__value">{categories.length}</span>
              <span className="stats__label mono">categorías</span>
            </div>
            <div className="stats__item">
              <span className="stats__value">6</span>
              <span className="stats__label mono">mercados</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Quiénes somos"
            title="Operación mayorista con coordinación global"
            description="Actuamos como capa comercial y de abastecimiento para mayoristas, restaurantes, fábricas, retail y bodegas, conectando disponibilidad con entrega en múltiples mercados."
          />
          <div className="about-grid">
            <div className="about-card">
              <h3>Inventario real</h3>
              <p>Stock sincronizado en bodega con disponibilidad verificada para cada nodo del ecosistema.</p>
            </div>
            <div className="about-card">
              <h3>Importación directa</h3>
              <p>Coordinación de compras por volumen con proveedores en Europa, América y Asia.</p>
            </div>
            <div className="about-card">
              <h3>Distribución</h3>
              <p>Rutas nacionales e internacionales con trazabilidad y tiempos de respuesta exigentes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stores */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Directorio"
            title="22 tiendas, un mismo sistema"
            description="Cada nodo conserva su identidad comercial, pero comparte inventario, estándares técnicos y coordinación del ecosistema Tujo."
          />
          <div className="stores-grid">
            {stores.map((store) => (
              <StoreCard key={store.slug} store={store} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Muestra del catálogo"
            title="Productos en flujo constante"
            description="Oferta de productos, consumibles e insumos para restaurantes, retail, industrias y puntos de distribución."
          />
          <div className="product-grid product-grid--featured">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link className="btn btn--outline" to="/productos">
              Ver catálogo completo →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
