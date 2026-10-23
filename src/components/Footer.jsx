import { Link } from 'react-router-dom'
import { stores } from '../data/stores.jsx'
import { LEGAL_NAME, PARENT_COMPANY, DOMAIN, LOGO_PATH } from '../lib/brand.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner glass">
        <div className="footer__top">
          <div className="footer__brand">
            <img
              className="footer__logo"
              src={LOGO_PATH}
              alt={`Logotipo de ${LEGAL_NAME}`}
              width="48"
              height="48"
            />
            <p className="footer__line">
              {LEGAL_NAME} coordina inventario, importación y abastecimiento para
              sectores de consumo, industria, gastronomía y retail en múltiples
              mercados. Empresa derivada de {PARENT_COMPANY}.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Navegación del pie">
            <Link className="footer__link mono" to="/">
              Índice
            </Link>
            <Link className="footer__link mono" to="/productos">
              Productos
            </Link>
            <Link className="footer__link mono" to="/tiendas">
              Tiendas
            </Link>
            <Link className="footer__link mono" to="/operacion">
              Operación
            </Link>
          </nav>
        </div>

        <ul className="footer__stores">
          {stores.map((store) => (
            <li key={store.slug}>
              <Link className="footer__store" to={`/tienda/${store.slug}`}>
                <span
                  className="footer__store-dot"
                  aria-hidden="true"
                />
                {store.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="footer__meta">
          <Link className="footer__legal mono" to="/cookies">
            Cookies
          </Link>
          <Link className="footer__legal mono" to="/privacidad">
            Privacidad
          </Link>
        </div>
        <p className="footer__copy mono">
          © {new Date().getFullYear()} {LEGAL_NAME} · {DOMAIN.replace('https://', '')}
        </p>
      </div>
    </footer>
  )
}
