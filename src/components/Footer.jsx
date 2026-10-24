import { Link } from 'react-router-dom'
import { officialStores, OFFICIAL_STORE_COUNT } from '../data/official-stores.js'
import { tujoLogisticsUrl } from '../data/destinations.js'
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
              width="72"
              height="80"
            />
            <div>
              <p className="site-footer__name">{LEGAL_NAME}</p>
              <p className="site-footer__desc">
                Coordinación de distribución y desarrollo de red para tiendas,
                bodegas y socios independientes. Unidad interna de {PARENT_COMPANY}.
              </p>
            </div>
          </div>

          <div className="site-footer__cols">
            <nav className="site-footer__col" aria-label="Portal">
              <p className="site-footer__col-title">Portal</p>
              <Link to="/">Inicio</Link>
              <Link to="/operacion">El modelo</Link>
              <Link to="/tiendas">Tiendas</Link>
              {tujoLogisticsUrl && (
                <a href={tujoLogisticsUrl} target="_blank" rel="noreferrer">
                  TUJO LOGISTICS ↗
                </a>
              )}
            </nav>

            <nav className="site-footer__col" aria-label="Legal">
              <p className="site-footer__col-title">Legal</p>
              <Link to="/cookies">Cookies</Link>
              <Link to="/privacidad">Privacidad</Link>
            </nav>
          </div>
        </div>

        <div className="site-footer__stores">
          <p className="site-footer__col-title">
            Tiendas oficiales · {officialStores.length} de {OFFICIAL_STORE_COUNT} destinos confirmados
          </p>
          <ul className="site-footer__store-list">
            {officialStores.map((store) => (
              <li key={store.id}>
                <a href={store.url}>{store.name}</a>
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
