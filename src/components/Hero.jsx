import styles from '../style'
import { robot } from '../assets'
import { businessInfo, openWhatsApp } from '../constants'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`hero-copy flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='eyebrow'><span className='eyebrow-dot'/> {businessInfo.name} <span className='eyebrow-divider'>/</span> {businessInfo.subtitle}</div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='hero-title'>Your Trusted <span>Digital<br className='sm:block hidden'/> Service Center</span></h1>
        </div>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          Online services, documentation, printing, ticket booking and Jan Seva services, all under one roof.
        </p>
        <div className='hero-actions'><a className='primary-button' href='#features'>Explore Services <span>↓</span></a><a className='text-button' href={openWhatsApp()}>WhatsApp Us <span>↗</span></a></div>
        <p className='hero-note'>Friendly help for forms, documents and digital applications.</p>
      </div>
      <div className={`hero-visual flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt='Digital services assistance at a computer'
          className='w-[100%] h-[100%] relative z-[5] hero-image'
        />
        <div className='hero-stamp'>B.R<br/><small>EST. LOCAL<br/>SERVICE</small></div>
      </div>
    </section>
  )
}

export default Hero
