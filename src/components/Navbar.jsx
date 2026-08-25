import React, { useEffect, useState } from 'react'
import { close, menu } from '../assets'
import { businessInfo, navLinks, openWhatsApp } from '../constants'
import { LOGO_PATH } from '../config/business'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const updateActiveSection = () => {
      const current = navLinks.reduce((active, nav) => {
        const section = document.getElementById(nav.id)
        if (section && window.scrollY + 150 >= section.offsetTop) return nav.id
        return active
      }, 'home')
      setActiveSection(current)
    }

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    updateActiveSection()
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

  const closeMenu = () => setToggle(false)

  return (
    <nav className='w-full flex py-4 justify-between items-center navbar'>
      <a href='#home' className='brand-mark' aria-label='B.R Internet Cafe home' onClick={closeMenu}>
        <img className='brand-logo-image' src={LOGO_PATH} alt='B.R Internet Cafe logo' />
        <span><strong>{businessInfo.name}</strong><small>{businessInfo.subtitle}</small></span>
      </a>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li 
            key={nav.id}
            className={`nav-item ${activeSection === nav.id ? 'active' : ''} ${i === navLinks.length - 1 ? 'mr-0' : 'mr-8'}`}
          >
            <a href={`#${nav.id}`} onClick={closeMenu}>
              {nav.title}
            </a>
          </li>        
        ))}
      </ul>
      <a className='whatsapp-button nav-whatsapp sm:flex hidden' href={openWhatsApp()}>WhatsApp Us <span>↗</span></a>
      <div className='sm:hidden flex flex-1 justify-end items-center mobile-nav-control'>
        <button type='button' className='menu-button' aria-label={toggle ? 'Close menu' : 'Open menu'} aria-expanded={toggle} onClick={() => setToggle((previous) => !previous)}>
          <img src={toggle ? close : menu} alt='' className='w-[28px] h-[28px] object-contain'/>
        </button>
        <div className={`${toggle ? 'is-open' : ''} mobile-menu sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li 
                key={nav.id}
                className={`nav-item ${activeSection === nav.id ? 'active' : ''}`}
              >
                <a href={`#${nav.id}`} onClick={closeMenu}>
                  {nav.title}
                </a>
              </li>        
            ))}
            <li className='mobile-whatsapp'><a className='whatsapp-button' href={openWhatsApp()} onClick={closeMenu}>WhatsApp Us <span>↗</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
