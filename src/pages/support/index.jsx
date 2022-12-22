import React from 'react';
import tw from 'styled-components';

import SectionHeading from '../../components/SectionHeading';
import SectionWrapper from '../../components/SectionWrapper';
import Footer from '../../components/Footer';
import SupportCard from '../../components/SupportCard';

import Layout from '../../components/Layout';
const Support = () => {
  const supportWays = [
    {
      img: 'partner.svg',
      head: 'PARTNER WITH US',

      link: '/support/partner',
    },
    {
      img: 'volunteer.svg',
      head: 'VOLUNTEER YOUR TIME',

      link: '/support/volunteer',
    },
    {
      img: 'donate.svg',
      head: 'MAKE DONATIONS',

      link: '/support/donate',
    },
  ];
  return (
    <Layout title="support">
      <SectionWrapper>
        <SectionHeading heading="WAYS TO HELP" subHeading="Take Action Now" />
      </SectionWrapper>
      <SectionWrapper flow="">
        <SupportList className="w-full grid md:grid-cols-3 grid-col-1 h-full">
          {supportWays?.map((way, i) => (
            <SupportCard
              heading={way.head}
              img={way.img}
              text="Get in Touch"
              key={i}
              link={way.link}
            />
          ))}
        </SupportList>
      </SectionWrapper>
      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </Layout>
  );
};
const SupportList = tw.div`
 `;
export default Support;
