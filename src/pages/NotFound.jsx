import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { setSeo } from '../lib/seo.js'

export default function NotFound() {
  useEffect(() => {
    setSeo({
      title: 'Página no encontrada | Tujo Wholesales',
      description: 'La ruta solicitada no existe dentro del ecosistema Tujo Wholesales.',
      path: '/404',
    })
  }, [])

  return (
    <div className="route">
      <div className="container container--narrow" style={{ textAlign: 'center', paddingBlock: '6rem' }}>
        <p className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
          Error 404
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem' }}>
          Página no encontrada
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          La ruta que intentas abrir no existe dentro del directorio.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn btn--primary" to="/">
            Volver al inicio
          </Link>
          <Link className="btn btn--outline" to="/productos">
            Ver productos
          </Link>
        </div>
      </div>
    </div>
  )
}
