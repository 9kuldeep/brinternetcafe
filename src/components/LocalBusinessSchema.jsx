import React from 'react'
import { businessContact } from '../config/business'
import { SITE_URL } from '../config/business'

const configured = (value, placeholder) => value && value !== placeholder

const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessContact.name,
    url: SITE_URL,
    image: `${SITE_URL}/images/br-logo.svg`,
  }

  if (configured(businessContact.phone, 'REPLACE_WITH_PHONE_NUMBER')) schema.telephone = businessContact.phone
  if (configured(businessContact.address, 'REPLACE_WITH_EXACT_ADDRESS')) schema.address = { '@type': 'PostalAddress', streetAddress: businessContact.address }
  if (configured(businessContact.hours, 'REPLACE_WITH_OPENING_HOURS')) schema.openingHours = [businessContact.hours]

  return <script type='application/ld+json'>{JSON.stringify(schema)}</script>
}

export default LocalBusinessSchema