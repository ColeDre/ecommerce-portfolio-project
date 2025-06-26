import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import ProductCards from "../shop/ProductCards";

const CategoryPage = () => {
  // We can seperate this into a util we use it in multiple places
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, });
  };


  const { gender, categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let filtered = [];

    if (gender) {
      filtered = products.filter(
        (product) =>
          product.category === categoryName && product.gender === gender
      );
    } else {
      filtered = products.filter(
        (product) => product.category === categoryName
      );
    }

    setFilteredProducts(filtered);
    
    scrollToTop();
  }, [categoryName, gender]);

  return (
    <>
      <section className='category__section__container bg-primary-light'>
        <h2 className='section__header capitalize'>{categoryName}</h2>
        <p className='section__subheader'>
          Browse our latest {categoryName}! Dolor sit amet consectetur adipisicing elit.
          Deleniti minus ipsum nihil, omnis numquam asperiores..{" "}
        </p>
      </section>

      <div className='section__container'>
        <ProductCards products={filteredProducts} />
      </div>
    </>
  );
};

export default CategoryPage;
