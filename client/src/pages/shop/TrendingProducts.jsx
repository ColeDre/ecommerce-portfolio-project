import React, { useState } from 'react'
import ProductCards from './ProductCards';
import products from '../../data/products.json'

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  
  const loadMoreProducts = () => {
    setVisibleProducts(prevCount => prevCount + 4)
  }

  return (
    <section className='product__container'>
      <h2 className='section__header'>Trending Products</h2>
      <p className='section__subheader'>
        Lorem ipsum dolor,  Consequatur, aliquid eaque ipsam magni eum architecto corporis!
      </p>
      
      <div style={{marginTop: '1.5rem'}}>
        <ProductCards products={products.slice(0, visibleProducts)} />
      </div>

      <div className='product__btn'>
        {
          visibleProducts < products.length && (
            <button className='btn' onClick={loadMoreProducts}>Show More</button>
          )
        }
      </div>
    </section>
  )
}

export default TrendingProducts
