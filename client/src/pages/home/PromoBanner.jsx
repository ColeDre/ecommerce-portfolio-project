import React from 'react'

const PromoBanner = () => {
  // TODO: Map these 
  return (
    <section className='section__container banner__container'>
      <div className='banner__card'>
        <span><i className="ri-truck-line ri-2x"/></span>
        <h4>Free Delivery</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eligendi!</p>
      </div>

      <div className='banner__card'>
        <span><i className="ri-money-dollar-circle-line ri-2x"/></span>
        <h4>Purchase Protection Guarantee</h4>
        <p>100% guaranteed lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat rerum pariatur.</p>
      </div>

      <div className='banner__card'>
        <span><i className="ri-customer-service-2-fill ri-2x"/></span>
        <h4>Fast Customer Support</h4>
        <p>24/7 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, incidunt.</p>
      </div>
    </section>
  )
}

export default PromoBanner
