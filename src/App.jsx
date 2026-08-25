import React from 'react'
import { Billing, Business, CardDeal, CTA, Footer, Hero, LocalBusinessSchema, Navbar, ServiceRequestForm, WhyChooseUs } from './components'
import styles from './style'

const App = () => {
  return (
    <div className='site-shell w-full overflow-hidden'>
      <LocalBusinessSchema />
      <div className={`${styles.paddingX} ${styles.flexCenter} nav-wrap site-header`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`hero-wrap ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <main className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business/>
          <Billing/>
          <WhyChooseUs/>
          <CardDeal/>
          <ServiceRequestForm/>
          <CTA/>
          <Footer/>     
        </div>
      </main>
    </div>
  )
}

export default App