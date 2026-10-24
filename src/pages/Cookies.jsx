import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import { setSeo } from '../lib/seo.js'

export default function CookiesPage() {
  useEffect(() => {
    setSeo({
      title: 'Política de cookies | Tujo Wholesales',
      description: 'Información sobre almacenamiento local y tecnologías del sitio corporativo de Tujo Wholesales.',
      path: '/cookies',
    })
  }, [])

  return (
    <div className="route">
      <div className="container container--narrow">
        <SectionHeading
          eyebrow="Legal"
          title="Política de cookies"
        />
        <div className="legal-content">
          <p>El sitio corporativo no integra herramientas de analítica ni instala cookies publicitarias. No se requiere un banner de consentimiento para esas tecnologías mientras no se incorporen.</p>
          <p>El alojamiento web puede procesar registros técnicos básicos para entregar y proteger el servicio. Las tiendas oficiales y formularios externos enlazados pueden usar tecnologías propias, sujetas a sus respectivos avisos.</p>
          <ul>
            <li><strong>Este portal:</strong> no guarda preferencias ni identificadores persistentes en el navegador.</li>
            <li><strong>Enlaces externos:</strong> al visitar otra tienda o formulario, aplican sus políticas de privacidad y cookies.</li>
          </ul>
          <p>Si se agregan analítica, publicidad o almacenamiento no esencial, esta política deberá actualizarse antes de activarlos.</p>
          <p><Link to="/privacidad">Ver política de privacidad →</Link></p>
        </div>
      </div>
    </div>
  )
}
