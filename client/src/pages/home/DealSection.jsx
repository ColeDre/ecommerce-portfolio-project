import React, { useState, useEffect } from 'react'
import DealCountdown from './DealCountdown'
import dealImgSummer from '../../assets/deals/deals-4.png'
import { getDealEndDate, isDealActive } from '../../utils/dealSectionUtils'



const DealSection = () => {
  // TODO: These both are going to need backend validations
  // TODO: setting to false messes with the styling of the dealImg 
  const [dealActive, setDealActive] = useState(isDealActive())
  const dealEndDate = getDealEndDate()
  
  // const dealCountDown;
  let dealTagline = `The heat isn't the only thing that's up, get Up to 50% off until ${dealEndDate.getMonth()+1}/${dealEndDate.getDate()}! `

  useEffect(() => {
    setDealActive(isDealActive())
  }, [])

  return (
    <section className='section__container deals__container'>
      <div className='deals__image'>
        <img src={dealImgSummer} alt='Deal Image'/> 
      </div>

      <div className='deals__content'>
        <h5 className='capitalize'>{dealTagline}</h5>
        <h4 className='capitalize'>Browse Our latest deals</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam iste similique mollitia rerum molestias accusamus perspiciatis adipisci voluptas earum, animi dolores corrupti dolorum, Check them out before they're gone!</p>

        {
          // TODO: setting dealActive to false resizes dealImgSummer 
          dealActive && 
          <DealCountdown endDate={dealEndDate}/>
        }
      </div>
    </section>
  )
}

export default DealSection
