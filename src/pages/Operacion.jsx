import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import { setSeo } from '../lib/seo.js'
import { LEGAL_NAME, PARENT_COMPANY } from '../lib/brand.js'

const markets = [
  { name: 'Francia', description: 'Ejecución regional y aprovisionamiento para puntos de venta y demanda de volumen.' },
  { name: 'Estados Unidos', description: 'Coordinación de compra con enfoque en abastecimiento, almacenamiento y crecimiento comercial.' },
  { name: 'España', description: 'Integración de flujo, distribución y soporte comercial para canales de mayorista.' },
  { name: 'Colombia', description: 'Cobertura nacional con enfoque en bodegas, restaurantes, retail y suministros críticos.' },
  { name: 'Perú', description: 'Operación regional con coordinación de compras y distribución en múltiples ciudades.' },
  { name: 'Ecuador', description: 'Suministro para negocios locales con necesidad de trazabilidad y rapidez.' },
  { name: 'Brasil', description: 'Cobertura focalizada en un eje principal y coordinación estratégica de operación.' },
]

export default function OperacionPage() {
  useEffect(() => {
    setSeo({
      title: `Operación y cobertura | ${LEGAL_NAME}`,
      description: `Cobertura de Tujo Wholesales en Francia, Estados Unidos, España, Colombia, Perú, Ecuador y Brasil.`,
      path: '/operacion',
    })
  }, [])

  return (
    <div className="route">
      <div className="container">
        <SectionHeading
          eyebrow="Cobertura"
          title="Abastecimiento y distribución mayorista"
          description={`${LEGAL_NAME} es la unidad de mayoreo del ecosistema ${PARENT_COMPANY}: coordina inventario, compra por volumen y movimiento de productos.`}
        />

        <div className="markets-grid">
          {markets.map((market) => (
            <div key={market.name} className="market-card">
              <h3>{market.name}</h3>
              <p>{market.description}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link className="btn btn--outline" to="/tiendas">
            Ver directorio de tiendas →
          </Link>
        </div>
      </div>
    </div>
  )
}
