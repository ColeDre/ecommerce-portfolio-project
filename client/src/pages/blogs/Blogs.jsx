import React from "react";

import BlogCard from "./BlogCard";
import blogData from "../../data/blogs.json";

const Blogs = () => {
  return (
    <section className='section__container blog__container'>
      <h2 className='capitalize section__header'>Check out our blogs</h2>
      
      <p className='section__subheader'>
        Lorem, ipsum dolor sit amet consectetur adipisicing.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>

        {blogData.map((blog, index) => <BlogCard blog={blog} blogId={index} key={index} />)}

      </div>
    </section>
  );
};

export default Blogs;
