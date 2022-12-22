import React, { useState, useEffect } from 'react';
import tw from 'styled-components';

import SectionHeading from '../components/SectionHeading';
import SectionWrapper from '../components/SectionWrapper';

import Footer from '../components/Footer';
import sanityClient from '../sanityClient';
import Layout from '../components/Layout';
import BlogItem from '../components/BlogItem';
const Blog = () => {
  const [allBlogPosts, setAllBlogPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"&&(*[_type == "category"&&title=="blog"][0]._id in categories[]._ref)]{
        title,
        slug,
        "author": author->name,
        "date":publishedAt,
        "body":body[].children[].text,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllBlogPosts(data))
      .catch(console.error);
  }, [allBlogPosts]);

  return (
    <Layout title="blog">
      <SectionWrapper>
        <SectionHeading subHeading="All posts" />
      </SectionWrapper>
  
        <BlogList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-10 gap-x-8  gap-y-20">
          {allBlogPosts &&
            allBlogPosts?.map((blog, i) => (
              <BlogItem
                key={i}
                title={blog.title}
                img={blog.mainImage.asset.url}
                details={blog.body}
              />
            ))}
        </BlogList>
     
      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </Layout>
  );
};
const BlogList = tw.div``;
export default Blog;
