import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../../assets/header.png'

const Banner = () => {
  // include github <a> in h1
  return (
    <div className='section__container header__container'>
      <div className='header__content'>
        <h4>Stack: MongoDB, Express.js, React, Node.js</h4>
        <h1>DeAndre Coleman Ecommerce Portfolio Project</h1>
        {/* <p>Stack: MongoDB, Express.js, React, Node.js</p> */}
        <p>Hey, thanks for visiting! This project is meant to mimic the functionality of an everyday ecommerce shop! Some features may be missing on initial visit. The GitHub repo is in the links and features will be updated often.</p>
        <button className='btn'><Link to='/shop'>Browse Project</Link></button>
      </div>
      <div className='header__image'>
        <img src={bannerImg} alt='banner img'/>
      </div>
    </div>
  )
}

export default Banner
