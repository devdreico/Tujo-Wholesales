import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { setSeo } from '../lib/seo.js'

const markets = [
  { name: 'Francia', description: 'Ejecución regional y aprovisionamiento para puntos de venta y demanda de volumen.' },
  { name: 'Estados Unidos', description: 'Coordinación logística con enfoque en abastecimiento, almacenamiento y crecimiento comercial.' },
  { name: 'España', description: 'Integración de flujo, distribución y soporte comercial para canales de mayorista.' },
  { name: 'Colombia', description: 'Cobertura nacional con enfoque en bodegas, restaurantes, retail y suministros críticos.' },
  { name: 'Perú', description: 'Operación regional con coordinación de compras y distribución en múltiples ciudades.' },
  { name: 'Ecuador', description: 'Suministro y logística para negocios locales con necesidad de trazabilidad y rapidez.' },
  { name: 'Brasil', description: 'Cobertura focalizada en un eje principal y coordinación estratégica de operación.' },
]

export default function OperacionPage() {
  useEffect(() => {
    setSeo({
      title: 'Operación y cobertura | Soverath Wholesales',
      description: 'Cobertura de Soverath Wholesales en Francia, Estados Unidos, España, Colombia, Perú, Ecuador y Brasil.',
      path: '/operacion',
    })
  }, [])

  return (
    <section className="page-shell glass" style={{ padding: '2rem', borderRadius: '28px' }}>
      <p className="section-heading__eyebrow mono" style={{ marginBottom: '1rem' }}>
        <span className="section-heading__pulse" aria-hidden="true" />
        Cobertura y operación
      </p>
      <h1 style={{ marginTop: 0, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.06em' }}>
        Coordinación logística de productos y recursos.
      </h1>
      <p>
        Soverath Wholesales opera como brazo de abastecimiento, coordinación y
        movimiento de inventario para clientes que requieren flujo constante, respuesta
        rápida y conexión entre productores, bodegas y puntos de venta.
      </p>

      <div className="coverage-grid" style={{ marginTop: '1.5rem' }}>
        {markets.map((market) => (
          <div key={market.name} className="coverage-card glass">
            <h3>{market.name}</h3>
            <p>{market.description}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/tiendas">Ver directorio de tiendas</Link>
      </div>
    </section>
  )
}
