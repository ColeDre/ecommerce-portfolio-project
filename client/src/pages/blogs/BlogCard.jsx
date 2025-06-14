import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className='blog__card cursor-pointer hover:scale-105 transition-all duration-300'>
      <img src={blog.imageUrl} alt={`${blog.title} image`} />

      <div className='blog__card__content'>
        <h6>{blog.subtitle}</h6>
        <h4>{blog.title}</h4>
        <p>{blog.date}</p>
      </div>
      
    </div>
  );
};

export default BlogCard;
