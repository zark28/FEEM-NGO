import React, { useContext, useEffect } from 'react';
import BlogItem from '../../components/BlogItem';
import { AllBlogs } from '../../context/UseManageBlogs';
// import sanityClient from '../../sanityClient';

const Blogs = () => {
  const {allBlogPosts, setAllBlogPosts} = useContext(AllBlogs);

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `*[_type == "post"&&(*[_type == "category"&&title=="blog"][0]._id in categories[]._ref)]{
  //       title,
  //       slug,
  //       "author": author->name,
  //       "date":publishedAt,
  //       "body":body[].children[].text,
  //       mainImage{
  //         asset->{
  //         _id,
  //         url
  //       }
  //     }
  //   }`
  //     )
  //     .then((data) => setAllBlogPosts(data))
  //     .catch(console.error);
  // }, [allBlogPosts, setAllBlogPosts]);
  return (
    <div className="grid grid-cols-2 grid-flow-row gap-10 justify-evenly items-center p-5 ">
      {allBlogPosts &&
        allBlogPosts.blogs?.map((blog, i) => (
          <BlogItem
            key={i}
          
            title={blog.title}
            details={blog.body}
            img={blog.mainImage.asset.url}
            slug={blog.slug}
          />
        ))}
    </div>
  );
};

export default Blogs;
