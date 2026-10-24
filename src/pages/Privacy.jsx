import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import { setSeo } from '../lib/seo.js'

export default function PrivacyPage() {
  useEffect(() => {
    setSeo({
      title: 'Política de privacidad | Tujo Wholesales',
      description: 'Información de privacidad del sitio corporativo de Tujo Wholesales y sus enlaces externos.',
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
          <p>Este sitio presenta información corporativa y enlaza a tiendas oficiales y formularios alojados por sus respectivos responsables. No contiene formularios propios, no procesa pedidos y no solicita datos personales dentro del portal.</p>
          <p>El proveedor de alojamiento puede procesar registros técnicos necesarios para entregar y proteger el sitio. Cuando una persona abre un destino externo o envía allí sus datos, el tratamiento se rige por el aviso de privacidad de ese responsable.</p>
          <p>Antes de publicar esta política de forma definitiva, TUJO LOGISTICS debe completar la identidad y los datos de contacto del responsable de privacidad, así como el canal para ejercer derechos aplicables.</p>
          <p><Link to="/cookies">Consultar política de cookies →</Link></p>
        </div>
      </div>
    </div>
  )
}
