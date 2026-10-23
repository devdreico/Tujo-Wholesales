import { StrictMode, lazy } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import { setSeo } from './lib/seo.js'
import './index.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/home.css'
import './styles/catalog.css'
import './styles/store.css'
import './styles/admin.css'

const HomeEntry = lazy(() => import('./components/HomeEntry.jsx'))
const Products = lazy(() => import('./pages/Products.jsx'))
const Category = lazy(() => import('./pages/Category.jsx'))
const StorePage = lazy(() => import('./pages/StorePage.jsx'))
const TiendasPage = lazy(() => import('./pages/Tiendas.jsx'))
const OperacionPage = lazy(() => import('./pages/Operacion.jsx'))
const CookiesPage = lazy(() => import('./pages/Cookies.jsx'))
const PrivacyPage = lazy(() => import('./pages/Privacy.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

const Admin = lazy(() =>
  import('./pages/Admin.jsx').then((mod) => {
    setSeo({ path: '/admin' })
    return mod
  })
)

export function AppTree() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<HomeEntry />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/productos/:categoria" element={<Category />} />
            <Route path="/tienda/:slug" element={<StorePage />} />
            <Route path="/tiendas" element={<TiendasPage />} />
            <Route path="/operacion" element={<OperacionPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/privacidad" element={<PrivacyPage />} />
            <Route path="/admin" element={<Admin />} />
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
