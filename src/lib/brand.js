/**
 * Fuente única de marca y dominio de Tujo Wholesales.
 * Todo módulo (SEO, feeds, sitemap, UI) debe importar de aquí:
 * así el rebrand y el cambio de dominio tocan un solo archivo.
 */

export const BRAND = 'Tujo'
export const LEGAL_NAME = 'Tujo Wholesales'
export const PARENT_COMPANY = 'Tujo Logistics'
export const TAGLINE = 'Mayoreo con respaldo logístico'

export const DOMAIN = 'https://wtujo.presentto.online'
export const BASE_URL = DOMAIN

export const TWITTER_HANDLE = '@TujoWholesales'

export const LOGO_PATH = '/tujo-logo.svg'
export const FAVICON_PATH = '/favicon.svg'
export const APPLE_TOUCH_PATH = '/apple-touch-icon.png'
export const OG_IMAGE_PATH = '/tujo-og.png'

export const LOGO_URL = `${DOMAIN}${LOGO_PATH}`
export const OG_IMAGE_URL = `${DOMAIN}${OG_IMAGE_PATH}`

export const CONSENT_STORAGE_KEY = 'tujo-cookie-consent'

export const LEGACY = {
  domain: 'https://soverath.presentto.online',
  consentKey: 'soverath-cookie-consent',
  ordersKey: 'soverath.orders.v1',
}
