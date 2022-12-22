import React from 'react';
import tw from 'styled-components';
import Wrapper from '../components/Wrapper';
import SectionHeading from '../components/SectionHeading';
import SectionWrapper from '../components/SectionWrapper';
import Activities from '../components/Activities';
import Events from '../components/Events';
import ContactCard from '../components/ContactCard';
import Input from '../components/Input';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import AboutActivities from '../components/AboutActivities';

const index = () => {
  return (
    <Layout>
      <SectionWrapper>
        <Banner id="banner" className="  w-full"></Banner>
      </SectionWrapper>
      <SectionWrapper flow="flex-col">
        <SectionHeading heading="WHO WE ARE" subHeading="Our Roots" />
        <Content className="text-xl text-center w-full md:w-2/3 my-10 text-primaryColor leading-loose tracking-wide font-light">
          Here at Female Empowerment Initiative, we know that sometimes all it
          takes to change the world is a little support. Since our founding in
          2000, we have been determined to make an impact. The core of our
          efforts is to bring our team’s fresh ideas and passion to the range of
          activities we’re involved in. Through all of our endeavors we hope to
          display the conviction behind our beliefs.
        </Content>
      </SectionWrapper>
      <SectionWrapper flow="flex-col">
        <SectionHeading
          heading="Ways We Help"
          subHeading="Meaningful Work. Unforgettable Experiences."
        />

        <SectionWrapper>
          <AboutActivities />
        </SectionWrapper>
      </SectionWrapper>
      <SectionWrapper flow="flex-col bg-primaryColor-light1">
        <p className="text-primaryColor md:text-4xl text-2xl h-20 my-20">{`"Act as if what you do makes a difference. It does"`}</p>
        <p className="text-primaryColor md:text-2xl text-xl h-20 mb-10">
          
          {`- William James -`}
        </p>
      </SectionWrapper>
      <SectionWrapper flow="flex-col">
        <SectionHeading heading="Upcoming Events" />
        <Events />
      </SectionWrapper>
      <SectionWrapper>
        <ContactCard flow={'flex-col'}>
          <span className="grid grid-cols-2  w-full gap-5 mb-5">
            <Input
              type="text"
              label="Name *"
              id="name"
              placeholder="Enter your name"
            />
            <Input
              type="email"
              label="Email *"
              id="email"
              placeholder="Enter your email"
            />
            <Input
              type="phone"
              label="Phone"
              id="phone"
              placeholder="Enter your phone number"
            />
            <Input
              type="text"
              label="Address"
              id="address"
              placeholder="Enter your address"
            />
          </span>
          <Input
            type="text"
            label="Subject"
            id="subject"
            placeholder="Type the subject"
          />
          <Input
            type="textarea"
            label="Message"
            id="message"
            placeholder="Type your messagge here...."
          />
        </ContactCard>
      </SectionWrapper>
      <SectionWrapper flow="flex-col">
        <SectionHeading heading="BLOG POSTS" />
        <Blogs />
      </SectionWrapper>
      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </Layout>
  );
};
const Banner = tw.div`

`;

const Content = tw.p`

`;
export default index;
