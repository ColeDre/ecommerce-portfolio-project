import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../../assets/header.png'

const Banner = () => {
  return (
    <div className='section__container header__container'>
      <div className='header__content'>
        <h4>Stack: MongoDB, Express.js, React, Node.js</h4>
        <h1>DeAndre Coleman Ecommerce Portfolio Project</h1>
        <p>Hey, thanks for visiting my portfolio website! I'm a Full-Stack developer with over 5 years of professional experience. This project is meant to mimic the functionality of an everyday ecommerce web application. This project is on-going so some features may be missing on your initial visit. The <span className='link'><a href='/#github'>GitHub repo</a></span> is linked below and on the <span className='link'><a href='/contact'>Resume page</a></span>, which also includes my more detailed experience and contact information. Thanks for visting!</p>
        <button className='btn'><Link to='/shop'>Browse Project</Link></button>
      </div>
      <div className='header__image'>
        <img src={bannerImg} alt='banner img'/>
      </div>
    </div>
  )
}

export default Banner
