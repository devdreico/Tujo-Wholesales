import { Link } from 'react-router-dom'
import { stores } from '../data/stores.jsx'
import { LEGAL_NAME, PARENT_COMPANY, DOMAIN, LOGO_PATH } from '../lib/brand.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <img
              className="site-footer__logo"
              src={LOGO_PATH}
              alt=""
              width="28"
              height="28"
            />
            <div>
              <p className="site-footer__name">{LEGAL_NAME}</p>
              <p className="site-footer__desc">
                Coordinamos inventario, importación y abastecimiento para
                consumo, industria, gastronomía y retail. Empresa derivada de{' '}
                {PARENT_COMPANY}.
              </p>
            </div>
          </div>

          <div className="site-footer__cols">
            <nav className="site-footer__col" aria-label="Portal">
              <p className="site-footer__col-title">Portal</p>
              <Link to="/">Inicio</Link>
              <Link to="/productos">Productos</Link>
              <Link to="/tiendas">Tiendas</Link>
              <Link to="/operacion">Operación</Link>
            </nav>

            <nav className="site-footer__col" aria-label="Legal">
              <p className="site-footer__col-title">Legal</p>
              <Link to="/cookies">Cookies</Link>
              <Link to="/privacidad">Privacidad</Link>
            </nav>
          </div>
        </div>

        <div className="site-footer__stores">
          <p className="site-footer__col-title">Tiendas</p>
          <ul className="site-footer__store-list">
            {stores.map((store) => (
              <li key={store.slug}>
                <Link to={`/tienda/${store.slug}`}>{store.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            © {new Date().getFullYear()} {LEGAL_NAME}
          </p>
          <p className="site-footer__domain">
            {DOMAIN.replace('https://', '')}
          </p>
        </div>
      </div>
    </footer>
  )
}
