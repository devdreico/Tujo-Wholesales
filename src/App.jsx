import { Suspense, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Background from './components/Background.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import CookieConsent from './components/CookieConsent.jsx'
import PageTransition, { RouteFallback } from './components/PageTransition.jsx'
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
      <Background />
      <ScrollProgress />
      <Nav />

      <main className="page" id="main-content" tabIndex={-1}>
        <PageTransition>
          <Suspense fallback={<RouteFallback />}>
            <Outlet />
          </Suspense>
        </PageTransition>
      </main>

      <Footer />
      <CookieConsent consent={cookieConsent} onChoose={setCookieConsent} />
    </>
  )
}
