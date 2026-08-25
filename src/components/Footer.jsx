import React from 'react'
import styles from '../style'
import { businessInfo, openWhatsApp } from '../constants'
import { LOGO_PATH } from '../config/business'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col footer-shell`}>
      <div className='footer-grid'><div className='footer-brand'><img className='footer-logo-image' src={LOGO_PATH} alt='B.R Internet Cafe logo' loading='lazy' /><p className='light-paragraph'>Your trusted local partner for digital services, online applications, documentation, printing and booking assistance.</p></div><div className='footer-column'><h4>Quick Links</h4><a href='#home'>Home</a><a href='#features'>Services</a><a href='#about'>About</a><a href='#how-it-works'>How It Works</a><a href='#contact'>Contact</a></div><div className='footer-column'><h4>Services</h4><a href='#features'>Online Applications</a><a href='#features'>Printing & Documentation</a><a href='#features'>Ticket Booking</a><a href='#features'>Digital Assistance</a></div><div className='footer-column footer-contact'><h4>Contact</h4>{businessInfo.phone !== 'REPLACE_WITH_PHONE_NUMBER' ? <a href={`tel:${businessInfo.phone}`}>☎ {businessInfo.phone}</a> : <span>☎ Phone details coming soon</span>}<a href={openWhatsApp()}>◉ WhatsApp</a><span>⌖ {businessInfo.address !== 'REPLACE_WITH_EXACT_ADDRESS' ? businessInfo.address : 'Address details coming soon'}</span></div></div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='footer-copyright'>© 2026 {businessInfo.name} {businessInfo.subtitle}. All rights reserved.</p>
      </div>
    </section>
  )
}

export default Footer
