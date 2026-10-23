import { test, expect } from '@playwright/test'

test.describe('Rutas fuera de cobertura', () => {
  test('una ruta inválida muestra el 404', async ({ page }) => {
    await page.goto('/cualquiera')

    await expect(
      page.getByRole('heading', { name: 'Página no encontrada' })
    ).toBeVisible()
    await expect(page.getByText('Error 404')).toBeVisible()
  })

  test('una tienda inexistente muestra el 404', async ({ page }) => {
    await page.goto('/tienda/inexistente')

    await expect(
      page.getByRole('heading', { name: 'Página no encontrada' })
    ).toBeVisible()
  })

  test('el 404 enlaza de vuelta al índice y al catálogo', async ({ page }) => {
    await page.goto('/ruta/que/no/existe')

    await expect(page.getByRole('link', { name: /Volver al inicio/ })).toHaveAttribute(
      'href',
      '/'
    )
    await expect(page.getByRole('link', { name: 'Ver productos' })).toHaveAttribute(
      'href',
      '/productos'
    )
  })
})
