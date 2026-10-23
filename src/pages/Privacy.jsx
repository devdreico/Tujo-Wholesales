import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
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
    <div className="route">
      <div className="container container--narrow">
        <SectionHeading
          eyebrow="Legal"
          title="Política de privacidad"
        />
        <div className="legal-content">
          <p>Tujo Wholesales procesa información necesaria para operar el portal, administrar pedidos, coordinar nodos y responder solicitudes comerciales de mayoristas, restaurantes, empresas y distribuidoras.</p>
          <p>La información que se maneja puede incluir datos de contacto, información de negocio, referencias de productos, ubicación geográfica y metadatos técnicos relacionados con la navegación, siempre con finalidad de servicio y operación.</p>
          <p>No se venden datos personales. La información se conserva solo durante el tiempo necesario para atender la relación comercial, cumplir con obligaciones legales o mejorar la operación del ecosistema.</p>
          <p>El usuario puede ejercer derechos de acceso, rectificación, oposición, eliminación o limitación del tratamiento en la medida que lo permitan las leyes aplicables.</p>
          <p><Link to="/cookies">Consultar política de cookies →</Link></p>
        </div>
      </div>
    </div>
  )
}
