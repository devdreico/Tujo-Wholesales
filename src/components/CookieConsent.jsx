import { Link } from 'react-router-dom'

export default function CookieConsent({ consent, onChoose }) {
  if (consent && consent !== 'undecided') return null

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Preferencias de cookies">
      <div className="cookie-banner__content">
        <strong>Preferencias de cookies</strong>
        <p>
          Utilizamos cookies funcionales y analíticas para mantener la operación,
          mejorar la experiencia y cumplir con la política de privacidad.
        </p>
      </div>

      <div className="cookie-banner__actions">
        <button type="button" onClick={() => onChoose('accepted')}>
          Aceptar
        </button>
        <button type="button" className="secondary" onClick={() => onChoose('rejected')}>
          Rechazar
        </button>
        <Link className="secondary" to="/cookies">
          Configurar
        </Link>
      </div>
    </div>
  )
}
