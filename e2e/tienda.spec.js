import { test, expect } from '@playwright/test'

test.describe('Fichas comerciales fuera del portal corporativo', () => {
  test('una ruta anterior de tienda no muestra ficha ni catálogo', async ({ page }) => {
    await page.goto('/tienda/ferreza')

    await expect(page.getByRole('heading', { name: 'Página no encontrada' })).toBeVisible()
    await expect(page.locator('.product-card')).toHaveCount(0)
    await expect(page.locator('.domain-badge')).toHaveCount(0)
  })
})
