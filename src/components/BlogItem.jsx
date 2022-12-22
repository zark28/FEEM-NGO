import React from 'react';
import tw from 'styled-components';
import { Link } from 'react-router-dom';
const BlogItem = ({ img, title, slug, details }) => {
  return (
    <BlogCard className="w-full h-80 flex flex-col items-center justify-between mt-40 shadow-2xl border-2 border-primaryColor-light1 shadow-secondaryColor">
      <ImgContain className=" w-full h-full grow">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain object-center"
        />
      </ImgContain>

      <Link to={`/blog/${title}`} className="w-full h-2/5 cursor-pointer mt-5">
        <span className="w-3/5 mt-5 h-full transform hover:text-[16px]  transition-all duration-75">
          <h5 className="pt-5 text-l font-semibold ">{title}</h5>
          <p className=" font-medium ">{details}</p>
        </span>
      </Link>
    </BlogCard>
  );
};
const BlogCard = tw.article``;
const ImgContain = tw.div``;
export default BlogItem;
