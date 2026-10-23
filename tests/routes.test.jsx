import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderApp } from './helpers.jsx'

describe('Integración de rutas', () => {
  it('la raíz pinta la portada con las 22 tarjetas del directorio', () => {
    const { container } = renderApp('/')

    expect(container.querySelectorAll('.store-card')).toHaveLength(22)
    expect(screen.getByText('22 tiendas, un mismo sistema')).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Ver catálogo completo/ })
    ).toHaveAttribute('href', '/productos')
  })

  it('/productos pinta el catálogo de mayoreo', () => {
    renderApp('/productos')

    expect(
      screen.getByRole('heading', { name: 'Catálogo de mayoreo' })
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Buscar productos')).toBeInTheDocument()
  })

  it('/tienda/ferreza pinta la ficha de la tienda con su catálogo', () => {
    renderApp('/tienda/ferreza')

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Ferreza')
    expect(screen.getByText('Taladro percutor 750 W')).toBeInTheDocument()
    expect(document.querySelector('.domain-badge')).toHaveTextContent(
      'ferreza.presentto.online'
    )
  })

  it('/tienda/inexistente cae en el 404', () => {
    renderApp('/tienda/inexistente')

    expect(
      screen.getByRole('heading', { name: 'Página no encontrada' })
    ).toBeInTheDocument()
  })

  it('/cualquiera cae en el 404', () => {
    renderApp('/cualquiera')

    expect(
      screen.getByRole('heading', { name: 'Página no encontrada' })
    ).toBeInTheDocument()
    expect(screen.getByText('Error 404')).toBeInTheDocument()
  })
})
