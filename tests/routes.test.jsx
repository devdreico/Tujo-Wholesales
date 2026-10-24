import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderApp } from './helpers.jsx'

describe('Integración de rutas', () => {
  it('la raíz presenta el modelo, la escala y las rutas corporativas', () => {
    const { container } = renderApp('/')

    expect(
      screen.getByRole('heading', { name: /Una red comercial. Una operación que la conecta/ })
    ).toBeInTheDocument()
    expect(document.querySelector('.reach__figure--wide .reach__value').textContent).toBe('500K+')
    expect(screen.getByRole('link', { name: /Tiendas oficiales/ })).toHaveAttribute(
      'href',
      '/tiendas',
    )
    expect(container.querySelector('.product-card')).toBeNull()
  })

  it('/tiendas solo muestra redirecciones oficiales confirmadas', () => {
    renderApp('/tiendas')

    expect(screen.getByRole('heading', { name: 'Marcas propias. Red compartida.' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /presentto\.online/ })).toHaveLength(8)
    expect(screen.getByText(/Aquí aparecen únicamente los destinos cuya dirección está confirmada/)).toBeInTheDocument()
  })

  it('/operacion explica el modelo de red', () => {
    renderApp('/operacion')

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Un modelo diseñado')
    expect(screen.getByRole('heading', { name: 'Tres partes. Un sistema conectado.' })).toBeInTheDocument()
  })

  it('las rutas antiguas de producto o tienda no publican catálogo', () => {
    const { unmount } = renderApp('/productos')

    expect(screen.getByRole('heading', { name: 'Página no encontrada' })).toBeInTheDocument()
    expect(screen.queryByText('Taladro percutor 750 W')).not.toBeInTheDocument()
    unmount()

    renderApp('/tienda/ferreza')
    expect(screen.getByRole('heading', { name: 'Página no encontrada' })).toBeInTheDocument()
  })

  it('/cualquiera cae en el 404', () => {
    renderApp('/cualquiera')

    expect(
      screen.getByRole('heading', { name: 'Página no encontrada' })
    ).toBeInTheDocument()
    expect(screen.getByText('Error 404')).toBeInTheDocument()
  })
})
