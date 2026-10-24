import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderApp } from './helpers.jsx'

describe('Rutas antiguas de categoría', () => {
  it('no publica las antiguas páginas de producto', () => {
    renderApp('/productos/ferreteria')

    expect(screen.getByRole('heading', { name: 'Página no encontrada' })).toBeInTheDocument()
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
    expect(screen.queryByText('Taladro percutor 750 W')).not.toBeInTheDocument()
  })
})
