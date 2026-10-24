import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { stores } from '../data/stores.jsx'
import { LEGAL_NAME, LOGO_PATH } from '../lib/brand.js'

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/productos', label: 'Productos' },
  { to: '/operacion', label: 'Operación' },
  { to: '/tiendas', label: 'Tiendas' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [storesOpen, setStoresOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      setStoresOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="site-header">
      <div className="site-header__brand">
        <Link to="/" className="site-header__logo-link" aria-label={LEGAL_NAME}>
          <img
            className="site-header__logo"
            src={LOGO_PATH}
            alt=""
            width="180"
          />
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
            </li>
          ))}
          <li className={`site-nav__dropdown${storesOpen ? ' is-open' : ''}`}>
            <button
              type="button"
              className="site-nav__link"
              aria-expanded={storesOpen}
              aria-controls="site-nav-stores"
              onClick={() => setStoresOpen((v) => !v)}
            >
              Tiendas
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <ul className="site-nav__dropdown-list" id="site-nav-stores">
              {stores.map((store) => (
                <li key={store.slug}>
                  <Link
                    to={`/tienda/${store.slug}`}
                    className="site-nav__dropdown-link"
                    onClick={() => {
                      setOpen(false)
                      setStoresOpen(false)
                    }}
                  >
                    {store.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
