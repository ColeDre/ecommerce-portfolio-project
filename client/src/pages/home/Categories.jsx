import React from "react";

import clothesCategoryImg from "../../assets/categories/clothes-icon.jpg";
import accessoriesCategoryImg from "../../assets/categories/accessories-icon.jpg";
import contactCategoryImg from "../../assets/categories/contact-icon.png";
import githubCategoryImg from "../../assets/categories/github-icon.png";
import { Link } from "react-router-dom";

const homePageCategories = [
  {
    name: "Clothes",
    path: "clothes",
    image: clothesCategoryImg,
  },
  {
    name: "Accessories",
    path: "accessories",
    image: accessoriesCategoryImg,
  },
  { name: "Resume", path: "contact", image: contactCategoryImg },
  {
    name: "GitHub",
    path: "https://github.com/ColeDre/ecommerce-portfolio-project",
    image: githubCategoryImg,
  },
];
let categoryPaths = ["clothes", "accessories"];

const Categories = () => {
  return (
    <>
      <div className='product__grid'>
        {homePageCategories.map((category) => {
          let isContactPath = category.path === "contact";

          if (categoryPaths.includes(category.path) || isContactPath) {
            return (
              <Link
                to={
                  isContactPath
                    ? `/${category.path}`
                    : `/categories/${category.path}`
                }
                key={category.name}
                className='categories__card'
              >
                <img
                  src={category.image}
                  alt={category.name}
                  id={category.name.toLowerCase()}
                />
                <h4>{category.name}</h4>
              </Link>
            );
          } else {
            return (
              <a
                href={category.path}
                key={category.name}
                className='categories__card'
                target='_blank'
              >
                <img
                  src={category.image}
                  alt={category.name}
                  id={category.name.toLowerCase()}
                />
                <h4>{category.name}</h4>
              </a>
            );
          }
        })}
      </div>
    </>
  );
};

export default Categories;
