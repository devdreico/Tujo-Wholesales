import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { Route, Routes, StaticRouter } from 'react-router-dom'
import App from './App.jsx'
import HomeEntry from './components/HomeEntry.jsx'
import TiendasPage from './pages/Tiendas.jsx'
import OperacionPage from './pages/Operacion.jsx'
import CookiesPage from './pages/Cookies.jsx'
import PrivacyPage from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'
import { seoMetaFor } from './lib/seo.js'

export { seoMetaFor }

/**
 * Renderiza una ruta pública al markup que rellena `#root` en dist/.
 * Importa las páginas de forma estática (renderToString no admite lazy) y
 * replica el árbol de `src/main.jsx` sin la ruta /admin.
 *
 * @param {string} path Ruta a renderizar (p. ej. "/tiendas").
 * @returns {string} HTML de la ruta.
 */
export function render(path) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<HomeEntry />} />
            <Route path="/tiendas" element={<TiendasPage />} />
            <Route path="/operacion" element={<OperacionPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/privacidad" element={<PrivacyPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </StaticRouter>
    </StrictMode>
  )
}
