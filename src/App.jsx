import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

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
    </>
  )
}
