import { render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import App from '../src/App.jsx'
import HomeEntry from '../src/components/HomeEntry.jsx'
import TiendasPage from '../src/pages/Tiendas.jsx'
import OperacionPage from '../src/pages/Operacion.jsx'
import CookiesPage from '../src/pages/Cookies.jsx'
import PrivacyPage from '../src/pages/Privacy.jsx'
import NotFound from '../src/pages/NotFound.jsx'

/**
 * Monta la aplicación real con el mismo árbol de rutas que `src/main.jsx`
 * (sin herramientas internas) sobre una ruta inicial en
 * memoria.
 *
 * @param {string} path Ruta inicial (p. ej. "/tiendas").
 * @returns {ReturnType<typeof render>} Resultado de Testing Library.
 */
export function renderApp(path = '/') {
  return render(
    <MemoryRouter initialEntries={[path]}>
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
    </MemoryRouter>
  )
}
