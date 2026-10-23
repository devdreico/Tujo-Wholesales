import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import StoreCard from './StoreCard.jsx'
import { stores } from '../data/stores.jsx'

const ferreza = stores.find((store) => store.slug === 'ferreza')

const renderCard = () =>
  render(
    <MemoryRouter>
      <StoreCard store={ferreza} />
    </MemoryRouter>
  )

describe('StoreCard', () => {
  it('enlaza al apartado interno de la tienda', () => {
    renderCard()

    const internal = screen.getByRole('link', {
      name: 'Ver Ferreza en el portal',
    })

    expect(internal).toHaveAttribute('href', '/tienda/ferreza')
  })

  it('abre el enlace externo en una pestaña nueva con noopener', () => {
    renderCard()

    const external = screen.getByRole('link', {
      name: 'Visitar sitio externo de Ferreza',
    })

    expect(external).toHaveAttribute('href', 'https://ferreza.presentto.online')
    expect(external).toHaveAttribute('target', '_blank')
    expect(external.getAttribute('rel')).toContain('noopener')
  })

  it('muestra la categoría y el título del nodo', () => {
    renderCard()

    expect(screen.getByText('Ferretería')).toBeInTheDocument()
    expect(screen.getByText(ferreza.title)).toBeInTheDocument()
  })

  it('renderiza el índice del nodo', () => {
    const { container } = renderCard()

    const card = container.querySelector('article.store-card')
    expect(card).not.toBeNull()
    expect(screen.getByText(ferreza.index)).toBeInTheDocument()
  })
})
