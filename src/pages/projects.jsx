import React, { useState, useEffect } from 'react';
import tw from 'styled-components';
import SectionHeading from '../components/SectionHeading';
import SectionWrapper from '../components/SectionWrapper';
import ActivitiesCard from '../components/ActivitiesCard';

import Footer from '../components/Footer';
import sanityClient from '../sanityClient';
import Layout from '../components/Layout';
const Projects = () => {
  const [allProjects, setAllProjects] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"&&(*[_type == "category"&&title=="projects"][0]._id in categories[]._ref)]{
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
      .then((data) => setAllProjects(data))
      .catch(console.error);
  }, [allProjects]);

  return (
    <Layout title="projects">
      <SectionWrapper>
        <SectionHeading
          heading="OUR PROJECTS"
          subHeading="The Focus of Our Efforts"
        />
      </SectionWrapper>
      <SectionWrapper>
        <AllProjects className="w-full flex items-center justify-center flex-col gab-10 md:flex-row flex-wrap md:gap-0">
          {allProjects &&
            allProjects?.map((project, i) => (
              <ActivitiesCard
                key={i}
                title={project.title}
                img={project.mainImage.asset.url}
                details={project.body}
                flow="md:flex-row"
              />
            ))}
        </AllProjects>
      </SectionWrapper>
      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </Layout>
  );
};
const AllProjects = tw.div`  `;
export default Projects;
