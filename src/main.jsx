import { StrictMode, lazy } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/corporate.css'

const HomeEntry = lazy(() => import('./components/HomeEntry.jsx'))
const TiendasPage = lazy(() => import('./pages/Tiendas.jsx'))
const OperacionPage = lazy(() => import('./pages/Operacion.jsx'))
const CookiesPage = lazy(() => import('./pages/Cookies.jsx'))
const PrivacyPage = lazy(() => import('./pages/Privacy.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export function AppTree() {
  return (
    <StrictMode>
      <BrowserRouter>
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
      </BrowserRouter>
    </StrictMode>
  )
}

const container = document.getElementById('root')
const prerendered = container.getAttribute('data-prerendered')
const canHydrate = container.hasChildNodes() && prerendered === window.location.pathname

if (canHydrate) hydrateRoot(container, <AppTree />)
else createRoot(container).render(<AppTree />)
