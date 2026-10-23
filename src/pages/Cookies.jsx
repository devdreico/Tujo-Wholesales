import { useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    <section className="page-shell glass" style={{ padding: '2rem', borderRadius: '28px' }}>
      <p className="section-heading__eyebrow mono" style={{ marginBottom: '1rem' }}>
        <span className="section-heading__pulse" aria-hidden="true" />
        Cookies y consentimientos
      </p>
      <h1 style={{ marginTop: 0, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.06em' }}>
        Política de cookies
      </h1>

      <p>
        Este sitio usa cookies necesarias para mantener la navegación, recordar
        preferencias y reforzar la operación del portal. También puede usar cookies
        analíticas para medir uso y mejorar la calidad de la experiencia del usuario.
      </p>
      <p>
        Las cookies necesarias se activan de forma funcional y no requieren un
        consentimiento adicional. Las no esenciales sólo se usan si el usuario acepta
        la opción correspondiente en el banner de consentimiento.
      </p>
      <ul>
        <li>Cookies técnicas: seguridad, sesión y persistencia de configuraciones.</li>
        <li>Cookies analíticas: métricas del portal y rendimiento operativo.</li>
        <li>Cookies de personalización: preferencias del usuario y configuración visual.</li>
      </ul>
      <p>
        El usuario puede actualizar su elección desde esta página o desde el banner de
        consentimiento en cualquier momento.
      </p>
      <Link to="/privacidad">Ver política de privacidad</Link>
    </section>
  )
}
