import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { partnerFormUrl } from '../data/destinations.js'
import { setSeo } from '../lib/seo.js'
import { LEGAL_NAME, PARENT_COMPANY } from '../lib/brand.js'

const modelSteps = [
  {
    number: '01',
    title: 'Una red de marcas',
    text: 'Tiendas oficiales con identidad y relación directa con sus propios públicos.',
  },
  {
    number: '02',
    title: 'Wholesales conecta',
    text: 'La unidad articula tiendas, bodegas independientes y distribución de productos.',
  },
  {
    number: '03',
    title: 'TUJO LOGISTICS coordina',
    text: 'La operación logística integra la coordinación de las entregas de la red.',
  },
]

export default function OperacionPage() {
  useEffect(() => {
    setSeo({
      title: `El modelo de red | ${LEGAL_NAME}`,
      description: `${LEGAL_NAME} conecta tiendas, bodegas independientes y distribución dentro de ${PARENT_COMPANY}.`,
      path: '/operacion',
    })
  }, [])

  return (
      <div className="route operation-page">
        <section className="operation-intro section" id="modelo">
          <div className="container">
            <p className="operation-page__eyebrow mono">Unidad interna / {PARENT_COMPANY}</p>
            <h1>Un modelo diseñado para conectar distribución y comercio independiente.</h1>
            <p className="operation-page__lead">
              {LEGAL_NAME} coordina el sistema de red que conecta marcas, tiendas y
              bodegas independientes con la operación logística de {PARENT_COMPANY}.
            </p>
          </div>
        </section>

        <section className="operation-flow section" aria-labelledby="operation-flow-title">
          <div className="container">
            <div className="section-label">
              <p className="mono">Cómo se articula</p>
              <h2 id="operation-flow-title">Tres partes. Un sistema conectado.</h2>
            </div>
            <div className="operation-flow__grid">
              {modelSteps.map((step) => (
                <article className="operation-flow__step" key={step.number}>
                  <span className="mono">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="operation-network section" aria-labelledby="network-title">
          <div className="container operation-network__inner">
            <div>
              <p className="mono">La red / 22 marcas oficiales</p>
              <h2 id="network-title">Las tiendas mantienen su identidad. La coordinación crea alcance.</h2>
            </div>
            <Link className="btn btn--dark" to="/tiendas">
              Abrir directorio oficial <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="operation-participate section" id="participar" aria-labelledby="participate-title">
          <div className="container operation-participate__inner">
            <div>
              <p className="mono">Siguiente paso</p>
              <h2 id="participate-title">¿Eres tienda, bodega o socio de distribución?</h2>
              <p>Conoce la red y encuentra el canal oficial para conversar sobre el modelo.</p>
            </div>
            <div className="operation-participate__actions">
              {partnerFormUrl && (
                <a className="btn btn--signal" href={partnerFormUrl} target="_blank" rel="noreferrer">
                  Formulario de alianzas <span aria-hidden="true">↗</span>
                </a>
              )}
              <Link className="text-link" to="/tiendas">Conocer las tiendas oficiales ↗</Link>
            </div>
          </div>
        </section>
      </div>
  )
}
