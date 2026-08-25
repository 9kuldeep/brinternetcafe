import React from 'react'

const ContactCard = ({ icon, label, value, href, external = false }) => (
  <article className='contact-card'>
    <div className='contact-card-icon' aria-hidden='true'>{icon}</div>
    <div><span className='contact-card-label'>{label}</span>{href ? <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{value}</a> : <p>{value}</p>}</div>
  </article>
)

export default ContactCard