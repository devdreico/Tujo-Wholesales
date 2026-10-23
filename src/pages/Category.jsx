import { Navigate, useParams } from 'react-router-dom'
import { CatalogPage } from './Products.jsx'
import { categoryFromSlug } from '../lib/routes.js'

export default function Category() {
  const { categoria } = useParams()
  const category = categoryFromSlug(categoria)

  if (!category) return <Navigate to="/productos" replace />

  return (
    <CatalogPage key={categoria} path={`/productos/${categoria}`} initialCategory={category} />
  )
}
