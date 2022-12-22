import React from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SocialLinks from '../../components/SocialLinks';
import { AllBlogs } from '../../context/UseManageBlogs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

const BlogDetails = () => {
const params =useParams()
const {allBlogPosts}=useContext(AllBlogs)
let {blogId}= params

const navigate=useNavigate()
const backToBlogs=()=>{
  navigate('/blog')
}

const activeBlog = allBlogPosts.find((post)=>post.title === blogId)
  return  <div className="flex px-12 relative mt-20 flex-col gap-10 items-center justify-center text-secondaryColor">
  <SocialLinks />
  <span
    className="absolute text-5xl top-20 right-14 cursor-pointer hover:scale-90 duration-300 "
    onClick={backToBlogs}
  >
    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
  </span>
  <h1 className="w-full text-3xl font-bold">{activeBlog?.title}</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
    <img src={activeBlog?.mainImage.asset.url} alt={activeBlog?.title} />
    <p className="text-2xl leading-10">{activeBlog?.body}</p>
  </div>
</div>;
};

export default BlogDetails;
