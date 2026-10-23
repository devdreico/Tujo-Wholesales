import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import StoreCard from '../components/StoreCard.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Marquee from '../components/Marquee.jsx'
import StatCounter from '../components/StatCounter.jsx'
import { useReveal } from '../hooks/useReveal.js'
import { stores } from '../data/stores.jsx'
import { products, CATALOG_TOTAL, categories } from '../data/products.js'
import { setSeo } from '../lib/seo.js'

const REGRIMES = [
  'mayoreo digital',
  'bodega propia',
  'salud natural',
  'mascotas',
  'belleza',
  'tecnología',
  'cocina',
  'ferretería',
  'moda',
  'alimentos',
  'logística',
  '22 nodos',
]

export default function Home() {
  const gridRef = useRef(null)
  const grid = useReveal(gridRef, 0)

  useEffect(() => {
    setSeo({
      title: 'Soverath Wholesales | Importador de productos y bodegas',
      description:
        'Portal del ecosistema Soverath Wholesales: 22 tiendas afiliadas con identidad propia y catálogo de más de 1000 productos con inventario en bodega.',
      path: '/',
    })
  }, [])

  const featured = products.slice(0, 6)

  return (
    <>
      <Header
        kicker="Operación global · mayoreo inteligente"
        words={['Delegation', 'is', 'today', 'logistics']}
        lead={
          <>
            <strong>Delegar es la logística del hoy.</strong> Coordinamos abastecimiento,
            bodegas y distribución para sectores estratégicos con operación real en
            Europa y América.
          </>
        }
        badges={['22 nodos', 'Europa + América', 'Bodegas activas']}
      />

      <section className="landing-stats" aria-label="Cifras operativas del ecosistema">
        <div className="landing-stats__item glass">
          <span className="landing-stats__value mono">{stores.length}</span>
          <span className="landing-stats__label mono">tiendas conectadas</span>
        </div>
        <div className="landing-stats__item glass">
          <span className="landing-stats__value mono">{CATALOG_TOTAL}+</span>
          <span className="landing-stats__label mono">referencias</span>
        </div>
        <div className="landing-stats__item glass">
          <span className="landing-stats__value mono">{categories.length}</span>
          <span className="landing-stats__label mono">categorías</span>
        </div>
        <div className="landing-stats__item glass">
          <span className="landing-stats__value mono">6</span>
          <span className="landing-stats__label mono">mercados</span>
        </div>
      </section>

      <Marquee items={REGRIMES} />

      <section className="landing-map" aria-labelledby="world-map-title">
        <div className="map-graphic" aria-hidden="true">
          <div className="map-connector" />
          <span className="map-node" />
          <span className="map-node" />
          <span className="map-node" />
          <span className="map-node" />
          <span className="map-node" />
        </div>

        <div className="map-copy">
          <p className="section-heading__eyebrow mono">
            <span className="section-heading__pulse" aria-hidden="true" />
            Rutas inteligentes
          </p>
          <h2 id="world-map-title" className="map-copy__title">
            Red de abastecimiento con visión global y ejecución local.
          </h2>
          <p className="map-copy__text">
            Operamos como capa logística y comercial para pedidos de mayoristas,
            restaurantes, fábricas, retail y bodegas, conectando disponibilidad con
            entrega y coordinación en países con demandas diferentes y tiempos de
            respuesta muy exigentes.
          </p>
          <ul className="map-copy__list">
            <li>Inventario sincronizado en múltiples mercados.</li>
            <li>Coordinación de compras por volumen y producto.</li>
            <li>Distribución nacional e internacional con trazabilidad.</li>
          </ul>
        </div>
      </section>

      <section className="coverage" aria-labelledby="coverage-title">
        <div id="coverage-title">
          <SectionHeading
            eyebrow="Cobertura operacional"
            title="Operamos con rigor técnico y alcance comercial real."
            meta="Europa · América"
            description="La operación no se limita a la venta digital: conecta oferta, inventario, rutas y respaldo de compra para mercados con distintos ritmos regulatorios y logísticos."
          />
        </div>

        <div className="coverage-grid">
          <div className="coverage-card glass">
            <h3>Francia</h3>
            <p>Operación orientada a coordinación regional, aprovisionamiento y logística de distribución para negocios de volumen.</p>
          </div>
          <div className="coverage-card glass">
            <h3>Estados Unidos</h3>
            <p>Compra y abastecimiento con enfoque en demanda constante, stocking y logística de gran escala.</p>
          </div>
          <div className="coverage-card glass">
            <h3>España</h3>
            <p>Operación comercial y logística con sincronización de inventario y flujo de entrada/salida por canal.</p>
          </div>
          <div className="coverage-card glass">
            <h3>Colombia</h3>
            <p>Cobertura nacional para bodegas, retail, restaurantes y suministros críticos de diverso tipo.</p>
          </div>
        </div>

        <div className="compliance-list">
          <div className="compliance-item glass">
            <strong>Colombia</strong>
            <p>Todo el país, con coordinación por zona y logística de envío nacional.</p>
          </div>
          <div className="compliance-item glass">
            <strong>Perú y Ecuador</strong>
            <p>Operación activa y con presencia estratégica, enfocada en flujo y abastecimiento regional.</p>
          </div>
          <div className="compliance-item glass">
            <strong>Brasil</strong>
            <p>Un punto de operación con cobertura focalizada en una ciudad principal y una red de coordinación estratégica.</p>
          </div>
        </div>
      </section>

      <section className="stores" aria-labelledby="stores-title">
        <div id="stores-title">
          <SectionHeading
            eyebrow="Directorio de nodos"
            title="Veintidós tiendas, un mismo sistema operativo"
            meta="01 — 22"
            description="Cada nodo conserva su identidad comercial, pero comparte inventario, estándares técnicos y coordinación logística del ecosistema."
          />
        </div>

        <div className="stores__grid" ref={gridRef}>
          {stores.map((store, index) => (
            <div
              className={`stores__cell reveal ${grid.className}`}
              key={store.slug}
              style={{
                ...grid.style,
                '--reveal-delay': `${(index % 4) * 70}ms`,
              }}
            >
              <StoreCard store={store} index={index} />
            </div>
          ))}
        </div>
      </section>

      <section className="picks" aria-labelledby="picks-title">
        <div id="picks-title">
          <SectionHeading
            eyebrow="Muestra comercial"
            title="Productos y recursos en flujo constante de operación"
            meta={`${String(products.length).padStart(2, '0')} de ${CATALOG_TOTAL}+`}
            accent="var(--accent-cyan)"
            description="La oferta combina productos, consumibles, insumos y paquetes operativos para apoyar restaurantes, retail, industrias y puntos de distribución."
          />
        </div>

        <div className="products products--picks">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} order={i} />
          ))}
        </div>

        <Link className="btn btn--primary picks__cta" to="/productos">
          Entrar a la sala de productos
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  )
}
