import React from 'react'
import DealCountdown from './DealCountdown'
import dealImgSummer from '../../assets/deals/deals-4.png'
// import dealImgFall from '../../assets/deals/deals-3.png'



const DealSection = ({ dealEndsDate, dealActive }) => {
  
  // const dealCountDown;
  let dealTagline = `The heat isn't the only thing that's up, get Up to 50% off!`

  return (
    <section className='section__container deals__container'>
      <div className='deals__image'>
        <img src={dealImgSummer} alt='Deal Image'/> 
      </div>

      <div className='deals__content'>
        <h5 className='capitalize'>{dealTagline}</h5>
        <h4 className='capitalize'>Browse Our latest deals</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam iste similique mollitia rerum molestias accusamus perspiciatis adipisci voluptas earum, animi dolores corrupti dolorum, Check them out before they're gone!</p>

        <DealCountdown endDate={dealEndsDate}/>
      </div>
    </section>
  )
}

export default DealSection
