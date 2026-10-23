import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import { setSeo } from '../lib/seo.js'

export default function CookiesPage() {
  useEffect(() => {
    setSeo({
      title: 'Política de cookies | Tujo Wholesales',
      description: 'Política de cookies y preferencias del ecosistema Tujo Wholesales.',
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
          <p>Este sitio usa cookies necesarias para mantener la navegación, recordar preferencias y reforzar la operación del portal. También puede usar cookies analíticas para medir uso y mejorar la calidad de la experiencia.</p>
          <p>Las cookies necesarias se activan de forma funcional y no requieren consentimiento adicional. Las no esenciales sólo se usan si el usuario acepta en el banner de consentimiento.</p>
          <ul>
            <li><strong>Cookies técnicas:</strong> seguridad, sesión y persistencia de configuraciones.</li>
            <li><strong>Cookies analíticas:</strong> métricas del portal y rendimiento operativo.</li>
            <li><strong>Cookies de personalización:</strong> preferencias del usuario y configuración visual.</li>
          </ul>
          <p>El usuario puede actualizar su elección desde esta página o desde el banner de consentimiento en cualquier momento.</p>
          <p><Link to="/privacidad">Ver política de privacidad →</Link></p>
        </div>
      </div>
    </div>
  )
}
