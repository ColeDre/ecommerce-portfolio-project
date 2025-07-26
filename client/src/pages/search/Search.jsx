import React from "react";
import { useState } from "react";

import productsData from "../../data/products.json";
import ProductCards from "../shop/ProductCards";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true)

  const handleSearch = (e) => {
    e.preventDefault();
    setIsFirstRender(false)
    const query = searchQuery.toLowerCase();

    let filtered = [];

    if (query !== "" && query.length >= 3) {
      let foundProducts = productsData.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );

      filtered = [...foundProducts];
    }

    setFilteredProducts(filtered);
  };

  return (
    <>
      <section className='search__section__container bg-primary-light'>
        <h2 className='section__header capitalize'>Search Products</h2>
        <p className='section__subheader'>
          Search our dolor sit amet consectetur adipisicing elit. Deleniti minus
          ipsum nihil, omnis numquam asperiores..{" "}
        </p>
      </section>

      <section className='search__section__container'>
        <form onSubmit={handleSearch} >
          <div className='w-full mb-6 flex flex-col md:flex-row items-center justify-center gap-4'>
            <input
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              className='search-bar w-2/4 max-w-4xl p-2 border rounded'
              type='text'
              placeholder='Search for products...'
            />

            <button
              onClick={handleSearch}
              className='search-button w-full md:w-auto py-2 px-8 bg-primary text-white rounded'
            >
              Search
            </button>
          </div>
        </form>
        {
          filteredProducts.length > 0 || isFirstRender === true ? <ProductCards products={filteredProducts} /> : <p>No products found</p>
        }
      </section>
    </>
  );
};

export default Search;
