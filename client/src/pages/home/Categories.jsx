import React from 'react'

import clothesCategoryImg from '../../assets/categories/clothes-icon.jpg'
import shoesCategoryImg from '../../assets/categories/shoes-icon.jpg'
import contactCategoryImg from '../../assets/categories/contact-icon.png'
import githubCategoryImg from '../../assets/categories/github-icon.png'
import { Link } from 'react-router-dom'

const Categories = () => {
  const homePageCategories = [
    {name: 'Clothes', path: 'clothes', image: clothesCategoryImg},
    {name: 'Shoes', path: 'shoes', image: shoesCategoryImg},
    {name: 'Resume', path: 'contact', image: contactCategoryImg},
    {name: 'GitHub', path: 'github', image: githubCategoryImg},
  ]

  return (
    <>
      <div className='product__grid'>
        {
          homePageCategories.map(category => {
            let categoryPaths = ['clothes', 'shoes', 'contact'];
            let catergoryPathLink = '';

            if (categoryPaths.includes(category.path)) {
              catergoryPathLink = `/categories/${category.path}`
            }
             
            return (
              <Link to={catergoryPathLink ? catergoryPathLink : category.path} key={category.name} className='categories__card'> 
                <img src={category.image} alt={category.name} />
                <h4>{category.name}</h4>
              </Link>
            )
            
          })
        }
      </div>
    </>
  )
}

export default Categories
