import React, { useState } from 'react'
import { openWhatsApp, serviceGroups } from '../constants'
import styles from '../style'

const ServiceCard = ({ name, description }) => (
  <article className='service-item'>
    <div className='service-item-icon' aria-hidden='true'>+</div>
    <div className='service-item-copy'><h4>{name}</h4><p>{description}</p></div>
    <a className='service-assistance' href='#request' aria-label={`Start ${name}`}>Start Your Service <span>↗</span></a>
  </article>
)

const ServiceCategory = ({ group, expanded, onToggle }) => {
  const visibleServices = expanded ? group.services : group.services.slice(0, 6)
  const hasMore = group.services.length > 6

  return (
    <article className='service-category'>
      <div className='service-category-heading'><div className='service-category-icon' aria-hidden='true'>{group.icon}</div><div><span className='service-category-label'>SERVICE CATEGORY</span><h3>{group.title}</h3></div></div>
      <div className='service-items'>{visibleServices.map(([name, description]) => <ServiceCard key={name} name={name} description={description} />)}</div>
      {hasMore && <button type='button' className='service-expand' onClick={onToggle}>{expanded ? 'Show Less' : `View All ${group.services.length} Services`} <span>{expanded ? '↑' : '↓'}</span></button>}
    </article>
  )
}

const Business = () => {
  const [expandedCategory, setExpandedCategory] = useState(null)

  return (
    <section id='features' className={`${styles.paddingY} section-light`}>
      <div className='section-heading'><div><p className='section-label'>Our Services</p><h2 className='light-heading'>Everything You Need,<br/>Under One Roof</h2></div><div><p className='light-paragraph max-w-[500px]'>From online applications and government service assistance to printing, documentation and ticket booking, get your digital work done conveniently.</p><a className='primary-button services-start-button' href='#request'>Start Your Service <span>↓</span></a></div></div>
      <div className='service-categories'>{serviceGroups.map((group) => <ServiceCategory key={group.id} group={group} expanded={expandedCategory === group.id} onToggle={() => setExpandedCategory(expandedCategory === group.id ? null : group.id)} />)}</div>
      <div className='service-trust'><div><strong>Need a service that isn't listed here?</strong><span>Contact us and we'll help you find the right online service.</span></div><a className='primary-button' href={openWhatsApp("Hello, I need help finding an online service.")}>WhatsApp Us <span>↗</span></a></div>
    </section>
  )
}

export default Business
