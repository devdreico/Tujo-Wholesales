import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderApp } from './helpers.jsx'

describe('Catálogo fuera del portal corporativo', () => {
  it('/productos muestra 404 y no permite buscar productos', () => {
    renderApp('/productos')

    expect(screen.getByRole('heading', { name: 'Página no encontrada' })).toBeInTheDocument()
    expect(screen.queryByLabelText('Buscar productos')).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /Ver productos/ })).not.toBeInTheDocument()
  })
})
