import { useCallback, useEffect, useState } from 'react'
import { THEME_STORAGE_KEY } from '../lib/brand.js'

const readTheme = () => {
  if (typeof document === 'undefined') return 'light'
  const attr = document.documentElement.getAttribute('data-theme')
  if (attr === 'light' || attr === 'dark') return attr
  return 'light'
}

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b0e11' : '#f6f4f0')
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // noop
  }
}

/**
 * Interruptor dual light/dark del tema. Lee el `data-theme` ya inyectado
 * por el bootstrap de `index.html` para no parpadear en el primer render.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(readTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  const next = theme === 'dark' ? 'claro' : 'oscuro'

  return (
    <button
      type="button"
      className="nav__theme"
      onClick={toggle}
      aria-label={`Cambiar a tema ${next}`}
      aria-pressed={theme === 'dark'}
      title={`Tema ${next}`}
    >
      <span className="nav__theme-track" aria-hidden="true">
        <span className="nav__theme-thumb">
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" fill="none" className="nav__theme-icon">
              <path
                d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="nav__theme-icon">
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
              <path
                d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5 5l1.6 1.6M17.4 17.4 19 19M19 5l-1.6 1.6M6.6 17.4 5 19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>
      </span>
    </button>
  )
}
