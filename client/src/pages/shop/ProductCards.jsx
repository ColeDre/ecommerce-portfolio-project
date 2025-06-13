import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating";

const ProductCards = ({ products }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
      {products.map((product, index) => (
        <div key={index} className='product__card'>
          <div className='relative'>
            <Link to={`/shop/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className='max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300 rounded-sm'
              />
            </Link>

            <div>
              <button className='hover:block absolute top-2 right-2'>
                <i
                  className='ri-shopping-cart-2-fill ri-sm rounded-md text-primary-dark bg-primary-light opacity-80 hover:bg-primary-light hover:rounded-xl transition-all duration-300'
                  style={{ padding: ".2rem" }}
                />
              </button>
            </div>
          </div>

          <div className="product__card__content">
              <h4>{product.name}</h4>
              <p>${product.price} {product.oldPrice ? <s>${product.oldPrice}</s> : null}</p>
              <Rating rating={product.rating}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
