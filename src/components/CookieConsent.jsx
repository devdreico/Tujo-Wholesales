import { Link } from 'react-router-dom'

export default function CookieConsent({ consent, onChoose }) {
  if (consent && consent !== 'undecided') return null

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Preferencias de cookies">
      <p className="cookie-banner__text">
        Utilizamos cookies funcionales y analíticas para mantener la operación y
        mejorar la experiencia.{' '}
        <Link to="/cookies">Más información</Link>
      </p>
      <div className="cookie-banner__actions">
        <button type="button" className="btn btn--primary" onClick={() => onChoose('accepted')}>
          Aceptar
        </button>
        <button type="button" className="btn btn--outline" onClick={() => onChoose('rejected')}>
          Rechazar
        </button>
      </div>
    </div>
  )
}
