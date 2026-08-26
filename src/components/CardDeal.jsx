import React from 'react'
import styles from '../style'
import { openWhatsApp, processSteps } from '../constants'

const CardDeal = () => {
  return (
    <section id='how-it-works' className={`${styles.paddingY} process-section`}>
      <p className='section-label'>How It Works</p><h2 className='light-heading'>How It Works</h2><p className='light-paragraph process-intro'>Getting your digital work done is simple.</p>
      <div className='process-grid'>{processSteps.map((step) => <article className='process-step' key={step.id}><span className='step-number'>{step.number}</span><h3>{step.title}</h3><p>{step.content}</p></article>)}</div>
      <div className='process-cta'><strong>Need Help?</strong><a className='primary-button' href={openWhatsApp("Hello, I need help with a digital service.")}>WhatsApp Us <span>↗</span></a></div>
    </section>
  )
}

export default CardDeal
