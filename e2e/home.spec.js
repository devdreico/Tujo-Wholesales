import { test, expect } from '@playwright/test'

test.describe('Portada', () => {
  test('muestra el título de la página', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle(
      'Tujo Wholesales | Importador y mayorista con bodega propia'
    )
  })

  test('posiciona el mayoreo con respaldo de Tujo Logistics', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByText(/respaldado por Tujo Logistics/)).toBeVisible()
    await expect(
      page.getByRole('img', { name: 'Tujo Wholesales' }).first()
    ).toHaveAttribute('src', '/tujo-logo.svg')
  })

  test('lista las 22 tarjetas del directorio de tiendas', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('.stores__cell')).toHaveCount(22)
    await expect(page.locator('.card')).toHaveCount(22)
    await expect(page.locator('.card__name').first()).toBeVisible()
  })

  test('el CTA principal lleva a la sala de productos', async ({ page }) => {
    await page.goto('/')

    const cta = page.getByRole('link', { name: /Entrar a la sala de productos/ })
    await expect(cta).toHaveAttribute('href', '/productos')
    await cta.click()

    await expect(page).toHaveURL(/\/productos$/)
    await expect(page.getByRole('heading', { name: 'Catálogo de mayoreo' })).toBeVisible()
  })
})
