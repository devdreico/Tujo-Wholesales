import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { partnerFormUrl, tujoLogisticsUrl } from '../data/destinations.js'
import { setSeo } from '../lib/seo.js'
import { LEGAL_NAME, LOGO_PATH, PARENT_COMPANY } from '../lib/brand.js'

const workstreams = [
  {
    number: '01',
    title: 'Integración de tiendas',
    description:
      'Conectamos marcas oficiales con tiendas y bodegas independientes para ampliar su alcance comercial.',
  },
  {
    number: '02',
    title: 'Coordinación logística',
    description:
      'Articulamos la distribución y el sistema de entregas que acompaña a la red en cada mercado.',
  },
  {
    number: '03',
    title: 'Desarrollo de oportunidades',
    description:
      'Abrimos conversaciones con negocios y socios interesados en formar parte del modelo Tujo.',
  },
]

export default function Home() {
  useEffect(() => {
    setSeo({
      title: `${LEGAL_NAME} | La red logística de TUJO LOGISTICS`,
      description:
        'Tujo Wholesales conecta tiendas, bodegas independientes y distribución logística dentro del ecosistema TUJO LOGISTICS.',
      path: '/',
    })
  }, [])

  return (
    <div className="corporate-home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__inner container">
          <div className="hero__copy">
            <p className="hero__eyebrow mono">Una unidad de {PARENT_COMPANY}</p>
            <h1 className="hero__title" id="hero-title">
              Una red comercial. Una operación que la conecta.
            </h1>
            <p className="hero__lead">
              {LEGAL_NAME} coordina tiendas, bodegas independientes y distribución
              para que los productos lleguen a más negocios.
            </p>
            <div className="hero__actions">
              <a className="btn btn--signal" href="#modelo">
                Conoce el modelo <span aria-hidden="true">↓</span>
              </a>
              <Link className="btn btn--light" to="/tiendas">
                Tiendas oficiales <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <p className="hero__parent-link">
              {tujoLogisticsUrl ? (
                <a href={tujoLogisticsUrl} target="_blank" rel="noreferrer">
                  Visitar TUJO LOGISTICS <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span>Parte del ecosistema TUJO LOGISTICS</span>
              )}
            </p>
          </div>
          <div className="hero__visual" role="group" aria-label="Identidad de Tujo Wholesales">
            <div className="hero__mark">
              <img src={LOGO_PATH} alt="Tujo Wholesales" width="216" height="239" />
            </div>
            <p className="hero__visual-caption mono">DISTRIBUCIÓN · RED · COORDINACIÓN</p>
            <span className="hero__orbit hero__orbit--one" aria-hidden="true" />
            <span className="hero__orbit hero__orbit--two" aria-hidden="true" />
          </div>
        </div>
        <div className="hero__index mono" aria-hidden="true">TW / 01 — 22</div>
      </section>

      <section className="reach section" id="alcance" aria-labelledby="reach-title">
        <div className="container">
          <div className="section-label">
            <p className="mono">01 / Alcance de red</p>
            <h2 id="reach-title">Escala que se construye en conjunto.</h2>
          </div>
          <div className="reach__figures">
            <article className="reach__figure">
              <p className="reach__value">22</p>
              <p className="reach__label">tiendas oficiales en el ecosistema</p>
            </article>
            <article className="reach__figure reach__figure--wide">
              <p className="reach__value">500<span>K+</span></p>
              <p className="reach__label">
                tiendas independientes que reciben y distribuyen productos a través
                de la red
              </p>
            </article>
            <p className="reach__note">
              Cifras de alcance reportadas por Tujo Wholesales.
            </p>
          </div>
        </div>
      </section>

      <section className="model section" id="modelo" aria-labelledby="model-title">
        <div className="container">
          <div className="model__heading section-label">
            <p className="mono">02 / El modelo</p>
            <h2 id="model-title">Una infraestructura compartida para crecer.</h2>
            <p>
              Wholesales es el punto de coordinación entre las marcas, los negocios
              independientes y la operación logística de TUJO LOGISTICS.
            </p>
          </div>
          <div className="model-flow" role="list" aria-label="Flujo del modelo Tujo">
            <article className="model-flow__step" role="listitem">
              <span className="model-flow__number mono">01</span>
              <h3>Marcas y proyectos</h3>
              <p>Una oferta diversa organizada en tiendas oficiales con identidad propia.</p>
            </article>
            <span className="model-flow__connector" aria-hidden="true">→</span>
            <article className="model-flow__step model-flow__step--highlight" role="listitem">
              <span className="model-flow__number mono">02</span>
              <h3>Tujo Wholesales</h3>
              <p>Coordinación de distribución y articulación de la red comercial.</p>
            </article>
            <span className="model-flow__connector" aria-hidden="true">→</span>
            <article className="model-flow__step" role="listitem">
              <span className="model-flow__number mono">03</span>
              <h3>Tiendas y bodegas</h3>
              <p>Negocios independientes que reciben y distribuyen productos.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="work section" id="proyectos" aria-labelledby="work-title">
        <div className="container">
          <div className="section-label section-label--split">
            <div>
              <p className="mono">03 / Líneas de trabajo</p>
              <h2 id="work-title">Proyectos que fortalecen la red.</h2>
            </div>
            <Link to="/operacion" className="text-link">
              Ver cómo funciona <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="work-list">
            {workstreams.map((item) => (
              <article className="work-row" key={item.number}>
                <span className="work-row__number mono">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="work-row__mark" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="join section" id="alianzas" aria-labelledby="join-title">
        <div className="join__inner container">
          <div>
            <p className="join__eyebrow mono">04 / Próximo paso</p>
            <h2 id="join-title">¿Tu negocio puede crecer conectado?</h2>
            <p>
              Conoce el modelo de colaboración para tiendas, bodegas y socios de
              distribución.
            </p>
          </div>
          <div className="join__actions">
            {partnerFormUrl ? (
              <a className="btn btn--signal" href={partnerFormUrl} target="_blank" rel="noreferrer">
                Formulario de alianzas <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <Link className="btn btn--signal" to="/operacion#participar">
                Explorar colaboración <span aria-hidden="true">↗</span>
              </Link>
            )}
            <Link className="join__secondary" to="/tiendas">Explorar la red oficial</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
