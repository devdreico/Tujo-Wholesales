import { test, expect } from '@playwright/test'

test.describe('Portada', () => {
  test('muestra el título de la página', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle('Tujo Wholesales | Red de distribución y tiendas')
  })

  test('presenta Wholesales como parte de TUJO LOGISTICS y usa el logo oficial', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByText(/TUJO LOGISTICS/).first()).toBeVisible()
    const logo = page.locator('.site-header__logo')
    await expect(logo).toHaveAttribute('src', '/tujo-logo-real.png')
    await expect(logo).toHaveJSProperty('naturalWidth', 1080)
  })

  test('muestra el video marítimo y su atribución en el hero', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('.hero__video source')).toHaveAttribute('src', '/ship-at-sea.webm')
    await expect(page.getByRole('link', { name: 'Wikimedia Commons / GODL-India' })).toBeVisible()
    await expect(page.locator('.hero__corner')).toHaveCount(4)
  })

  test('explica el modelo y el alcance sin mostrar productos', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { name: /Una red comercial/ })).toBeVisible()
    await expect(page.locator('.reach__figure--wide .reach__value')).toHaveText('500K+')
    await expect(page.locator('.product-card')).toHaveCount(0)
  })

  test('el directorio redirige a los dominios oficiales confirmados', async ({ page }) => {
    await page.goto('/tiendas')

    const links = page.locator('.official-store')
    await expect(links).toHaveCount(9)
    await expect(links.first()).toHaveAttribute('href', 'https://esturel.presentto.online')
    await expect(links.nth(2)).toHaveAttribute('href', 'https://catitools.presentto.online')
    await expect(links.nth(8)).toHaveAttribute('href', 'https://sacreps.presentto.online')
    await expect(page.getByText(/solo los destinos cuya dirección está confirmada/)).toBeVisible()
  })
})
