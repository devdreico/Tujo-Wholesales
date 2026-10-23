import { test, expect } from '@playwright/test'

test.describe('Portada', () => {
  test('muestra el título de la página', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle(
      'Tujo Wholesales | Importador y mayorista con bodega propia'
    )
  })

  test('posiciona el mayoreo con respaldo logístico', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByText(/Mayoreo con respaldo logístico/)).toBeVisible()
    await expect(page.getByText(/Tujo Logistics/).first()).toBeVisible()
    await expect(page.locator('.site-header__logo')).toHaveAttribute('src', '/tujo-logo.svg')
  })

  test('lista las 22 tarjetas del directorio de tiendas', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('.store-card')).toHaveCount(22)
    await expect(page.locator('.store-card__title').first()).toBeVisible()
  })

  test('el CTA principal lleva a la sala de productos', async ({ page }) => {
    await page.goto('/productos')

    await expect(page).toHaveURL(/\/productos$/)
    await expect(page.getByRole('heading', { name: 'Catálogo de mayoreo' })).toBeVisible()
  })
})
