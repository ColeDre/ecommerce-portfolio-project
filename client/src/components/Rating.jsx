import React from 'react'

const Rating = ({ rating }) => {
  const stars = [];
  
  // 5 stars
  for(let i = 1; i <= 5; i++){
    let starIcon = '';
    rating > i ? starIcon = 'ri-star-fill' : starIcon = 'ri-star-line';

    // half-star functionality 
    if (rating < i && (rating + .6) >= i) {
      starIcon = 'ri-star-half-fill'
    }
    
    stars.push(
      <span key={i} className={`${starIcon}`}/>
    )
  }
  
  return (
    <div className='product__rating'>{stars}</div>
  )
}

export default Rating
