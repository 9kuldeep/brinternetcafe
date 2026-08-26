import React, { useMemo, useState } from 'react'
import { portalServices } from '../constants'
import { BUSINESS_NAME, FORM_ENDPOINT } from '../config/business'
import { openWhatsApp } from '../utils/whatsapp'

const MAX_FILE_SIZE = 5 * 1024 * 1024
const ALLOWED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png']

const createRequestReference = () => {
  const date = new Date()
  const stamp = [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('')
  return `BR-${stamp}-${Math.floor(1000 + Math.random() * 9000)}`
}

const ServiceDetails = ({ service, onStart }) => (
  <aside className='portal-details' aria-live='polite'>
    <p className='section-label'>Service Details</p>
    <h3>{service.name}</h3>
    <p>{service.description}</p>
    <strong>Typical assistance</strong>
    <p>Online application support, document preparation and guidance through the next step.</p>
    <div className='document-checklist'>
      <strong>Required documents</strong>
      {service.required.map((document) => <label key={document}><input type='checkbox' /> <span>{document}</span></label>)}
      {service.optional.length > 0 && <>
        <strong className='optional-label'>Optional documents</strong>
        {service.optional.map((document) => <label key={document}><input type='checkbox' /> <span>{document}</span></label>)}
      </>}
    </div>
    <div className='checklist-continue'><strong>Have all documents ready?</strong><button type='button' onClick={onStart}>Continue <span>↓</span></button></div>
    <p className='portal-note'>Document requirements may vary depending on the application. We will confirm before processing.</p>
    <button type='button' className='primary-button portal-start-button' onClick={onStart}>Start This Service <span>↓</span></button>
  </aside>
)

const ServiceRequestForm = () => {
  const [search, setSearch] = useState('')
  const [selectedService, setSelectedService] = useState(null)
  const [form, setForm] = useState({ name: '', mobile: '', whatsapp: '', message: '' })
  const [files, setFiles] = useState([])
  const [error, setError] = useState('')
  const [submissionMessage, setSubmissionMessage] = useState('')
  const [reference, setReference] = useState('')
  const [consent, setConsent] = useState(false)

  const filteredServices = useMemo(() => {
    const query = search.trim().toLowerCase()
    return query ? portalServices.filter((service) => `${service.name} ${service.category} ${service.keywords}`.toLowerCase().includes(query)) : portalServices
  }, [search])

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setError('')
    setSubmissionMessage('')
  }

  const chooseService = (service) => {
    setSelectedService(service)
    setError('')
    setSubmissionMessage('')
  }

  const handleFiles = (event) => {
    const valid = []
    const invalid = []
    Array.from(event.target.files || []).forEach((file) => {
      if (!ALLOWED_FILE_TYPES.includes(file.type) || file.size > MAX_FILE_SIZE) invalid.push(file.name)
      else valid.push(file)
    })
    setFiles((current) => [...current, ...valid])
    if (invalid.length) setError(`These files were rejected. Use PDF, JPG or PNG under 5 MB: ${invalid.join(', ')}`)
    event.target.value = ''
  }

  const removeFile = (fileName) => setFiles((current) => current.filter((file) => file.name !== fileName))

  const submitRequest = async (event) => {
    event.preventDefault()
    const mobile = form.mobile.replace(/\s/g, '')
    if (!form.name.trim() || !mobile || !selectedService || !consent) {
      setError('Please enter your name, mobile number, choose a service and confirm the privacy notice.')
      return
    }
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError('Please enter a valid 10-digit Indian mobile number.')
      return
    }
    const requestReference = createRequestReference()
    const payload = { name: form.name.trim(), mobile, whatsapp: form.whatsapp.trim(), service: selectedService.name, message: form.message.trim(), requestReference }
    if (!FORM_ENDPOINT) {
      setError('Online submission is currently unavailable. Please contact us on WhatsApp.')
      return
    }
    try {
      const body = new FormData()
      Object.entries(payload).forEach(([key, value]) => body.append(key, value))
      files.forEach((file) => body.append('documents', file))
      const response = await fetch(FORM_ENDPOINT, { method: 'POST', body, headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error('Form submission failed')
      setReference(requestReference)
      setSubmissionMessage('received')
    } catch {
      setError('Something went wrong. Please try again or contact us on WhatsApp.')
    }
  }

  const whatsappMessage = reference
    ? `${BUSINESS_NAME},\n\nI submitted a service request.\n\nRequest Reference: ${reference}\nCustomer Name: ${form.name}\nSelected Service: ${selectedService?.name}\nMobile Number: ${form.mobile}\nMessage: ${form.message || 'No additional message.'}`
    : `${BUSINESS_NAME},\n\nI would like assistance with:\n\nService: ${selectedService?.name || 'a digital service'}\nName: ${form.name || 'Not provided'}\nMobile: ${form.mobile || 'Not provided'}\n\nPlease guide me regarding the next steps.`

  if (submissionMessage === 'received') {
    return <section id='request' className='request-section portal-success'>
      <div className='success-mark' aria-hidden='true'>✓</div>
      <p className='section-label'>Request Received</p>
      <h2 className='light-heading'>Your service request has been submitted successfully.</h2>
      <p className='light-paragraph'>We'll contact you shortly.</p>
      <div className='request-reference'><span>Request Reference</span><strong>{reference}</strong><small>Please save this reference number for your conversation with us. It is not a persistent status tracking ID.</small></div>
      <div className='portal-success-actions'><a className='primary-button' href={openWhatsApp(whatsappMessage)}>Continue on WhatsApp <span>↗</span></a><a className='outline-button' href='#home'>Back to Home</a></div>
    </section>
  }

  return <section id='request' className='request-section portal-section'>
    <div className='portal-intro'>
      <p className='section-label'>Online Service Portal</p>
      <h2 className='light-heading'>Start Your Service</h2>
      <p className='light-paragraph'>Submit your service request from home and we'll contact you.</p>
      <label className='portal-search-label' htmlFor='service-search'>What service do you need?</label>
      <input id='service-search' className='portal-search' value={search} onChange={(event) => setSearch(event.target.value)} placeholder='Search pan, ticket, print, certificate...' />
      <div className='portal-service-list' aria-label='Available services'>{filteredServices.map((service) => <button type='button' className={`portal-service-option ${selectedService?.id === service.id ? 'selected' : ''}`} key={service.id} onClick={() => chooseService(service)}><span><small>{service.category}</small><strong>{service.name}</strong></span><span aria-hidden='true'>→</span></button>)}</div>
      {filteredServices.length === 0 && <div className='portal-empty'><strong>No matching service found.</strong><a className='outline-button' href={openWhatsApp('Hello, I need help finding an online service.')}>Talk to Us on WhatsApp</a></div>}
    </div>
    {selectedService ? <ServiceDetails service={selectedService} onStart={() => document.getElementById('customer-details-input')?.focus()} /> : <div className='portal-details portal-prompt'><span aria-hidden='true'>◎</span><h3>Select a service to see details</h3><p>Compare the assistance details and checklist before sharing your request.</p></div>}
    <form className='request-form portal-form' onSubmit={submitRequest} noValidate>
      <div className='portal-form-heading'><p className='section-label'>Customer Details</p><h3>Tell us how to reach you</h3></div>
      <label>Full Name *<input id='customer-details-input' name='name' value={form.name} onChange={updateField} placeholder='Your full name' required /></label>
      <label>Mobile Number *<input name='mobile' value={form.mobile} onChange={updateField} inputMode='numeric' placeholder='10-digit mobile number' required /></label>
      <label>WhatsApp Number<input name='whatsapp' value={form.whatsapp} onChange={updateField} inputMode='numeric' placeholder='Optional' /></label>
      <label>Selected Service<input value={selectedService?.name || 'Select a service above'} readOnly aria-label='Selected service' /></label>
      <label className='request-message-field'>Message / Additional Details<textarea name='message' value={form.message} onChange={updateField} placeholder='Tell us briefly how we can help' rows='4' /></label>
      <div className='upload-panel'><strong>Need to share documents?</strong><p>Upload only the documents required for your selected service. Files are validated locally and are not stored by this website.</p><label className='upload-button'>Choose Documents<input type='file' accept='.pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png' multiple onChange={handleFiles} /></label><small>PDF, JPG, JPEG or PNG. Maximum 5 MB per file.</small>{files.length > 0 && <><p className='file-status' role='status'>{FORM_ENDPOINT ? 'Files ready for the configured form provider.' : 'Files selected locally; no upload service is configured.'}</p><ul className='file-list'>{files.map((file) => <li key={file.name}><span>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</span><button type='button' onClick={() => removeFile(file.name)} aria-label={`Remove ${file.name}`}>Remove</button></li>)}</ul></>}</div>
      <div className='privacy-notice'><strong>Privacy Notice</strong><p>Please upload only documents required for your requested service. Do not upload OTPs, passwords, PINs or other confidential login information.</p><label><input id='privacy-confirmation' type='checkbox' checked={consent} onChange={(event) => setConsent(event.target.checked)} required /> I confirm that I am uploading documents only for the requested service.</label></div>
      {error && <div className='form-error' role='alert'><span>{error}</span>{!FORM_ENDPOINT && <a href={openWhatsApp(whatsappMessage)}>Continue on WhatsApp <span>↗</span></a>}</div>}
      <button className='primary-button request-submit' type='submit'>Submit Service Request <span>↗</span></button>
      {!FORM_ENDPOINT && <p className='endpoint-notice'>Online submission is currently unavailable. Please contact us on WhatsApp.</p>}
    </form>
  </section>
}

export default ServiceRequestForm
