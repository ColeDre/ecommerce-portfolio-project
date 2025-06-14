import React from 'react'

import finstaImg1 from '../assets/finstagram/finstagram-1.png'
import finstaImg2 from '../assets/finstagram/finstagram-2.png'
import finstaImg3 from '../assets/finstagram/finstagram-3.png'
import finstaImg4 from '../assets/finstagram/finstagram-4.png'
import finstaImg5 from '../assets/finstagram/finstagram-5.png'
import finstaImg6 from '../assets/finstagram/finstagram-6.png'

const Footer = () => {
  return (
    <>
      <footer className='section__container footer__container'>
        <div className='footer__col'>
          <h4 className='uppercase'>Contact info </h4>
          <p>
            <span><i className="ri-earth-fill" /></span>
            <a 
              style={{display: 'inline'}} 
              href='https://maps.app.goo.gl/dh7zjuSrUeNbxdRw6'
              target='_blank'
            >
              Washington DC Area
            </a> 
          </p>
          <p>
            <span><i className="ri-mail-open-fill"/></span>
            <a 
              style={{display: 'inline'}} 
              href='mailto:dcoleman1100@yahoo.com?subject=Inquiry'
            >
              contact@dcoleman1100.dev
            </a>
          </p>
          <p>
            <span><i className="ri-phone-fill"/></span>
            <a 
              style={{display: 'inline'}} 
              href='mailto:dcoleman1100@yahoo.com?subject=Phone Number Inquiry'
            >
              Email if needed
            </a>
          </p>
        </div>

        <div className='footer__col'>
          <h4 className='uppercase'>Company</h4>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Work With</a>
          <a href='/'>Blogs</a>
          <a href='/'>Terms and Conditions</a>
        </div>

        <div className='footer__col'>
          <h4 className='uppercase'>Useful Links</h4>
          <a href='/'>Profile</a>
          <a href='/'>Shop</a>
          <a href='/'>Women</a>
          <a href='/'>Men</a>
          <a href='/'>Accessories</a>
        </div>

        <div className='footer__col'>
          <h4 className='uppercase'>Finstagram</h4>
          <div className='instagram__grid'>
            <img src={finstaImg1} alt='' />
            <img src={finstaImg2} alt='' />
            <img src={finstaImg3} alt='' />
            <img src={finstaImg4} alt='' />
            <img src={finstaImg5} alt='' />
            <img src={finstaImg6} alt='' />
          </div>
        </div>

      </footer>

      <div className='footer__bar'>
        Copyright © 2025 DeAndre Coleman - All Rights Reserved.
      </div>
    </>
  )
}

export default Footer
