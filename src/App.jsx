import { Suspense, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CookieConsent from './components/CookieConsent.jsx'
import { CONSENT_STORAGE_KEY, LEGACY } from './lib/brand.js'

const readConsent = () => {
  try {
    const legacy = localStorage.getItem(LEGACY.consentKey)
    if (legacy != null) {
      localStorage.setItem(CONSENT_STORAGE_KEY, legacy)
      localStorage.removeItem(LEGACY.consentKey)
    }
    return localStorage.getItem(CONSENT_STORAGE_KEY) ?? 'undecided'
  } catch {
    return 'undecided'
  }
}

function RouteFallback() {
  return (
    <div className="container" style={{ paddingBlock: '6rem', textAlign: 'center' }}>
      <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        Cargando…
      </span>
    </div>
  )
}

export default function App() {
  const { pathname } = useLocation()
  const [cookieConsent, setCookieConsent] = useState(readConsent)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  useEffect(() => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, cookieConsent)
    } catch {
      // noop
    }
  }, [cookieConsent])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Saltar al contenido principal
      </a>
      <Header />

      <main className="page" id="main-content" tabIndex={-1}>
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
      <CookieConsent consent={cookieConsent} onChoose={setCookieConsent} />
    </>
  )
}
