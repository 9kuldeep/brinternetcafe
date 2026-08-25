import React from 'react'
import { bill } from '../assets'
import styles from '../style'
import { aboutTrustPoints, businessInfo } from '../constants'

const Billing = () => {
  return (
    <section id='about' className={`${styles.paddingY} about-section flex md:flex-row flex-col-reverse`}>
      <div className='about-image flex-1'><img src={bill} alt='Online documentation assistance' loading='lazy' /></div>
      <div className='about-copy flex-1'>
        <p className='section-label'>About Us</p><h2 className='light-heading'>Your Local Partner<br/>for Digital Services</h2><p className='light-paragraph'>B.R Internet Cafe & Jan Seva Kendra is a convenient digital service center where customers can get assistance with online applications, documentation, printing, ticket booking and various digital services, all under one roof.</p><p className='light-paragraph'>Our goal is to make digital services simple, convenient and accessible for everyone.</p><div className='about-trust-points'>{aboutTrustPoints.map((point) => <div key={point}><span className='about-trust-dot' aria-hidden='true'>✓</span><strong>{point}</strong></div>)}</div><a href='#contact' className='primary-button about-button'>Talk to us <span>↗</span></a>
      </div>  
    </section>
  )
}

export default Billing
