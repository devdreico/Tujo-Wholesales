import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { partnerFormUrl } from '../data/destinations.js'
import { LEGAL_NAME, LOGO_PATH, PARENT_COMPANY } from '../lib/brand.js'

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/operacion#modelo', label: 'El modelo' },
  { to: '/#proyectos', label: 'Proyectos', end: true },
  { to: '/tiendas', label: 'Tiendas' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="site-header">
      <div className="site-header__brand">
        <Link to="/" className="site-header__logo-link" aria-label={LEGAL_NAME}>
          <img className="site-header__logo" src={LOGO_PATH} alt="" width="72" height="80" />
          <span className="site-header__wordmark">
            <strong>WHOLESALES</strong>
            <small>{PARENT_COMPANY}</small>
          </span>
        </Link>
      </div>

      <nav className="site-nav" aria-label="Navegación principal">
        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={open}
          aria-controls="site-nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <ul className={`site-nav__list${open ? ' is-open' : ''}`} id="site-nav-menu">
          {links.map((link) => (
            <li key={link.to}>
              {link.to.includes('#') ? (
                <Link className="site-nav__link" to={link.to} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ) : (
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `site-nav__link${isActive ? ' is-active' : ''}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
          {partnerFormUrl && (
            <li className="site-nav__action-item">
              <a className="site-nav__action" href={partnerFormUrl} target="_blank" rel="noreferrer">
                Alianzas <span aria-hidden="true">↗</span>
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
