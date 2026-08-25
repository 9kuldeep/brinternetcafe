import { WHATSAPP_NUMBER } from '../config/business'

export const openWhatsApp = (message = '') => {
  if (WHATSAPP_NUMBER === 'REPLACE_WITH_WHATSAPP_NUMBER') return '#contact'
  const query = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${WHATSAPP_NUMBER}${query}`
}