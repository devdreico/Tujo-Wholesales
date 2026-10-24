import { test, expect } from '@playwright/test'

test.describe('Rutas anteriores de catálogo', () => {
  test('no publica fichas de producto ni claims de stock', async ({ page }) => {
    const runtimeErrors = []
    page.on('pageerror', (error) => runtimeErrors.push(String(error)))
    page.on('console', (message) => {
      if (message.type() === 'error') runtimeErrors.push(message.text())
    })

    await page.goto('/productos/ferreteria')

    await expect(page.getByRole('heading', { name: 'Página no encontrada' })).toBeVisible()
    await expect(page.getByText('Taladro percutor 750 W')).toHaveCount(0)
    await expect(page.getByLabel('Buscar productos')).toHaveCount(0)

    await page.waitForLoadState('networkidle')

    const hydrationErrors = runtimeErrors.filter((text) =>
      /hydrat|did not match|server rendered HTML|Text content does not match/i.test(text)
    )
    expect(hydrationErrors).toEqual([])
  })
})
