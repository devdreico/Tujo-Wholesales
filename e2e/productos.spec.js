import { test, expect } from '@playwright/test'

test.describe('Catálogo fuera del portal corporativo', () => {
  test('la ruta anterior de productos no muestra inventario ni acciones de compra', async ({ page }) => {
    await page.goto('/productos')

    await expect(page.getByRole('heading', { name: 'Página no encontrada' })).toBeVisible()
    await expect(page.locator('.product-card')).toHaveCount(0)
    await expect(page.getByRole('link', { name: /Comprar|Cotizar|Ver productos/ })).toHaveCount(0)
  })
})
