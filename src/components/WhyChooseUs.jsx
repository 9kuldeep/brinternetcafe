import React from 'react'
import { whyChooseUs } from '../constants'
import styles from '../style'

const WhyChooseUs = () => (
  <section className={`${styles.paddingY} why-section`}>
    <div className='why-heading'><p className='section-label'>Why Choose Us</p><h2 className='light-heading'>Why Choose B.R<br/>Internet Cafe?</h2><p className='light-paragraph'>We make everyday digital work easier, faster and more convenient.</p></div>
    <div className='why-features'>{whyChooseUs.map((feature) => <article className='why-card' key={feature.id}><div className='why-card-icon'><img src={feature.icon} alt='' /></div><h3>{feature.title}</h3><p>{feature.content}</p></article>)}</div>
  </section>
)

export default WhyChooseUs