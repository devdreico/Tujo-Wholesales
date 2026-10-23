import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { setSeo } from '../lib/seo.js'

export default function PrivacyPage() {
  useEffect(() => {
    setSeo({
      title: 'Política de privacidad | Tujo Wholesales',
      description: 'Política de privacidad y tratamiento de datos del ecosistema Tujo Wholesales.',
      path: '/privacidad',
    })
  }, [])

  return (
    <section className="page-shell glass" style={{ padding: '2rem', borderRadius: '28px' }}>
      <p className="section-heading__eyebrow mono" style={{ marginBottom: '1rem' }}>
        <span className="section-heading__pulse" aria-hidden="true" />
        Privacidad y tratamiento de datos
      </p>
      <h1 style={{ marginTop: 0, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.06em' }}>
        Política de privacidad
      </h1>

      <p>
        Tujo Wholesales procesa información necesaria para operar el portal,
        administrar pedidos, coordinar nodos y responder solicitudes comerciales de
        mayoristas, restaurantes, empresas y distribuidoras.
      </p>
      <p>
        La información que se maneja puede incluir datos de contacto, información de
        negocio, referencias de productos, ubicación geográfica y metadatos técnicos
        relacionados con la navegación, siempre con finalidad de servicio y operación.
      </p>
      <p>
        No se venden datos personales. La información se conserva solo durante el
        tiempo necesario para atender la relación comercial, cumplir con obligaciones
        legales o mejorar la operación del ecosistema.
      </p>
      <p>
        El usuario puede ejercer derechos de acceso, rectificación, oposición,
        eliminación o limitación del tratamiento en la medida que lo permitan las
        leyes aplicables.
      </p>
      <Link to="/cookies">Consultar cookies</Link>
    </section>
  )
}
