const httpsDestination = (value) => {
	try {
		const url = new URL(value?.trim() ?? '')
		return url.protocol === 'https:' ? url.href : ''
	} catch {
		return ''
	}
}

export const partnerFormUrl = httpsDestination(import.meta.env.VITE_PARTNER_FORM_URL)
export const tujoLogisticsUrl = httpsDestination(import.meta.env.VITE_TUJO_LOGISTICS_URL)