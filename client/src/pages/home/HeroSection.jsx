import React from 'react'

import decorCardImg from '../../assets/cards/decor-card.png'
import mensCardImg from '../../assets/cards/mens-clothes.png'
import womensCardImg from '../../assets/cards/womens-clothes.png'


const cards = [ 
  {
    id: 'men', 
    image: mensCardImg,
    trend: 'Summer trends',
    title: 'Men',
  },
  {
    id: 'women', 
    image: womensCardImg,
    trend: 'Summer trends',
    title: 'Women',
  },
  {
    id: 'decor', 
    image: decorCardImg,
    trend: '2025 trends',
    title: 'Home/Decor',
  },
  
];

const HeroSection = () => {
  return (
    <section className='section__container hero__container' id='hero-card'>
      {
        cards.map(card => {
          return (
            <div key={card.id} className='hero__card'>
              <img src={card.image} alt={card.title} />
              <div className='hero__content'>
                <p>{card.trend}</p>
                <h4>{card.title}</h4>
                <a href='#'>Browse</a>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}

export default HeroSection
