import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import HeroSection from './HeroSection'
import TrendingProducts from '../shop/TrendingProducts'
import DealSection from './DealSection'

const date = new Date();
let dealEndsDay = date.getDate() <= 20 ? 20 : 4;
date.setFullYear(2026)
// date.setMonth(8)

// TODO: this may cause issues with locality, for scope of project won't worry but in broader picture something to keep in mind | also we would want to get this dealEnd Data from backend
let dealEnds = {
  year: date.getFullYear(), 
  month: date.getMonth(), 
  day: dealEndsDay, 
  hour: 0
}

const dealEndsDate = new Date(dealEnds.year, dealEnds.month, dealEnds.day, dealEnds.hour);

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />   
      <HeroSection /> 
      <TrendingProducts />
      <DealSection 
        // TODO: These both are going to need backend validations
        dealEndsDate={dealEndsDate}
        dealActive={true}
      />
    </>
  )
}

export default Home
