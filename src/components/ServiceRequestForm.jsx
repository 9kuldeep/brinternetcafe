import React, { useState } from 'react'
import { requestServices } from '../constants'
import { openWhatsApp } from '../utils/whatsapp'

const ServiceRequestForm = () => {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [error, setError] = useState('')

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    if (error) setError('')
  }

  const submitRequest = (event) => {
    event.preventDefault()
    const phone = form.phone.replace(/\s/g, '')
    if (!form.name.trim() || !phone || !form.service) {
      setError('Please enter your name, phone number and select a service.')
      return
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError('Please enter a valid 10-digit Indian mobile number.')
      return
    }

    const message = `Hello, I want assistance with a digital service.\n\nName: ${form.name.trim()}\nPhone: ${phone}\nService: ${form.service}\nMessage: ${form.message.trim() || 'No additional message.'}`
    window.location.href = openWhatsApp(message)
  }

  return (
    <section className='request-section'>
      <div className='request-intro'><p className='section-label'>Service Request</p><h2 className='light-heading'>Need Help With a Service?</h2><p className='light-paragraph'>Tell us what you need and contact us directly on WhatsApp.</p><div className='document-note'><strong>Need to share documents?</strong><span>You can contact us on WhatsApp and share your documents securely.</span><a href={openWhatsApp('Hello, I need to share documents securely.')}>Share Documents on WhatsApp <span>↗</span></a></div></div>
      <form className='request-form' onSubmit={submitRequest} noValidate>
        <label>Name<input name='name' value={form.name} onChange={updateField} placeholder='Your name' required /></label>
        <label>Phone Number<input name='phone' value={form.phone} onChange={updateField} inputMode='numeric' placeholder='10-digit mobile number' required /></label>
        <label className='request-service-field'>Select Service<select name='service' value={form.service} onChange={updateField} required><option value=''>Choose a service</option>{requestServices.map((service) => <option key={service} value={service}>{service}</option>)}</select></label>
        <label className='request-message-field'>Message<textarea name='message' value={form.message} onChange={updateField} placeholder='Tell us briefly how we can help' rows='4' /></label>
        {error && <p className='form-error' role='alert'>{error}</p>}
        <button className='primary-button request-submit' type='submit'>Send Request on WhatsApp <span>↗</span></button>
      </form>
    </section>
  )
}

export default ServiceRequestForm