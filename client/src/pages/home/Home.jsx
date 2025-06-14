import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import HeroSection from './HeroSection'
import TrendingProducts from '../shop/TrendingProducts'
import DealSection from './DealSection'
import { getDealEndDate } from '../../utils/dealSectionUtils'

const Home = () => {
  const dealEndDate = getDealEndDate()
  
  return (
    <>
      <Banner />
      <Categories />   
      <HeroSection /> 
      <TrendingProducts />
      <DealSection 
        // TODO: These both are going to need backend validations
        dealEndsDate={dealEndDate}
        // TODO: setting to false messes with the styling of the dealImg 
        dealActive={true}
      />
    </>
  )
}

export default Home
