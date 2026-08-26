import React from 'react'
import { openWhatsApp } from '../utils/whatsapp'

const WhatsAppButton = ({ message, children = 'WhatsApp Us', className = 'primary-button' }) => (
  <a className={className} href={openWhatsApp(message)}>{children} <span>↗</span></a>
)

export default WhatsAppButton