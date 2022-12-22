import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../../components/SectionHeading';
import SectionWrapper from '../../components/SectionWrapper';
import Activities from '../../components/Activities';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';

const About = () => {
  return (
    <Layout title="about us">
      <SectionWrapper flow="flex-col">
        <SectionHeading heading="WHO WE ARE" subHeading="Our Roots" />
        <Content className="w-full md:w-2/3 my-10 text-primaryColor leading-loose tracking-wide font-light">
          Here at Female Empowerment Initiative, we know that sometimes all it
          takes to change the world is a little support. Since our founding in
          2000, we have been determined to make an impact. The core of our
          efforts is to bring our team’s fresh ideas and passion to the range of
          activities we’re involved in. Through all of our endeavors we hope to
          display the conviction behind our beliefs.
        </Content>
      </SectionWrapper>
      <SectionWrapper flow="flex-col">
        <SectionHeading subHeading="Overall Goal" />
        <Content className="w-full md:w-2/3">
          To make the lives of people in communities, societies and nations
          better through the empowerment of women and girls. Our Focus is on
          Women and girls because they are home builders and society is greatly
          impacted by them.
        </Content>
      </SectionWrapper>
      <SectionWrapper flow="flex-col">
        <SectionHeading subHeading="Our Vision" />
        <Content className="w-full md:w-2/3">
          To reach out to women and girls to make informed decisions to enable
          them take up leadership roles in every aspect of the economy both in
          Ghana and beyond.
        </Content>
      </SectionWrapper>
      <SectionWrapper flow="flex-col">
        <SectionHeading subHeading="Our Mission" />
        <Content className="w-full md:w-2/3">
          To empower women and girls on leadership, sexual and reproductive
          health, sexual violence support, provision of livelihood to vulnerable
          women and girls and sustain the education of vulnerable girls leading
          to informed decisions among women and girls.T
        </Content>
      </SectionWrapper>
      <SectionWrapper flow="flex-col">
        <SectionHeading
          heading="Ways We Help"
          subHeading="Meaningful Work. Unforgettable Experiences."
        />
        <Activities />
      </SectionWrapper>
      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </Layout>
  );
};
const Content = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;
  color: rgb(67, 17, 97);
`;
export default About;
