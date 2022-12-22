import React, { useEffect, useState } from 'react';
import tw from 'styled-components';
import SectionHeading from '../components/SectionHeading';
import SectionWrapper from '../components/SectionWrapper';
import GalleryCard from '../components/GalleryCard';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import sanityClient from '../sanityClient';
import Layout from '../components/Layout';
const Gallery = () => {
  const [allPics, setAllPics] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            "author": author->name,
            "date":publishedAt,
            mainImage{
              asset->{
              _id,
              url
            }
          }
        }`
      )

      .then((data) => setAllPics(data))
      .catch(console.error);
  }, [allPics]);

  return (
    <Layout title="gallery">
      <SectionWrapper>
        <SectionHeading heading="FEEM Initiative" subHeading="In Images" />
      </SectionWrapper>
      <SectionWrapper>
        <AllPics className="w-full grid md:grid-cols-2 grid-col-1 h-full gap-5">
          {allPics &&
            allPics?.map((pic, i) => (
              <GalleryCard
                key={i}
                heading={pic.title}
                img={pic.mainImage.asset.url}
              />
            ))}
        </AllPics>
      </SectionWrapper>
      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </Layout>
  );
};
const AllPics = tw.div`  `;
export default Gallery;
