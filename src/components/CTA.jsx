import React from 'react'
import { businessInfo, openWhatsApp } from '../constants'
import { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_URL } from '../config/business'
import ContactCard from './ContactCard'
import WhatsAppButton from './WhatsAppButton'

const CTA = () => {
  const isConfigured = (value, placeholder) => value && value !== placeholder
  const phoneConfigured = isConfigured(businessInfo.phone, 'REPLACE_WITH_PHONE_NUMBER')
  const whatsappConfigured = isConfigured(businessInfo.whatsapp, 'REPLACE_WITH_WHATSAPP_NUMBER')
  const addressConfigured = isConfigured(businessInfo.address, 'REPLACE_WITH_EXACT_ADDRESS')
  const hoursConfigured = isConfigured(businessInfo.hours, 'REPLACE_WITH_OPENING_HOURS')
  const mapsConfigured = isConfigured(GOOGLE_MAPS_URL, 'REPLACE_WITH_GOOGLE_MAPS_URL')

  return (
    <section id='contact' className='contact-band'>
      <div className='contact-inner contact-layout'><div className='contact-copy'><p className='section-label'>Contact</p><h2 className='light-heading'>Get in Touch</h2><p className='light-paragraph'>Have a question or need help with a digital service? Contact us and we'll be happy to assist.</p><div className='contact-cards'><ContactCard icon='☎' label='Call Us' value={phoneConfigured ? businessInfo.phone : 'Phone details coming soon'} href={phoneConfigured ? `tel:${businessInfo.phone}` : undefined} /><ContactCard icon='◉' label='WhatsApp Us' value={whatsappConfigured ? businessInfo.whatsapp : 'WhatsApp details coming soon'} href={openWhatsApp()} /><ContactCard icon='⌖' label='Visit Us' value={addressConfigured ? businessInfo.address : 'Location details coming soon'} href={mapsConfigured ? GOOGLE_MAPS_URL : undefined} external /><ContactCard icon='◷' label='Opening Hours' value={hoursConfigured ? businessInfo.hours : 'Hours details coming soon'} /></div></div><div className='map-panel'><div className='map-heading'><strong>Find Us</strong><span>Visit our center for convenient local assistance.</span></div>{GOOGLE_MAPS_EMBED_URL ? <iframe title='B.R Internet Cafe location map' src={GOOGLE_MAPS_EMBED_URL} loading='lazy' referrerPolicy='no-referrer-when-downgrade' /> : <div className='map-placeholder'><span aria-hidden='true'>⌖</span><strong>Location map coming soon</strong><small>Add a Google Maps embed URL in the business config.</small></div>}<a className='outline-button map-button' href={mapsConfigured ? GOOGLE_MAPS_URL : '#contact'} target={mapsConfigured ? '_blank' : undefined} rel='noreferrer'>Get Directions <span>↗</span></a></div></div>
      <div className='contact-actions'><strong>Need quick assistance?</strong><a className='primary-button contact-start-button' href='#request'>Start Your Service <span>↓</span></a>{phoneConfigured ? <a className='outline-button' href={`tel:${businessInfo.phone}`}>Call Now <span>↗</span></a> : <span className='outline-button disabled-action'>Call Now <span>↗</span></span>}<WhatsAppButton message='Hello, I need quick assistance with a digital service.' /><a className='outline-button' href={mapsConfigured ? GOOGLE_MAPS_URL : '#contact'} target={mapsConfigured ? '_blank' : undefined} rel='noreferrer'>Get Directions <span>↗</span></a></div>
    </section>
  )
}

export default CTA
