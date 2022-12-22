import React from 'react';
import tw from 'styled-components';
import SectionHeading from '../components/SectionHeading';
import SectionWrapper from '../components/SectionWrapper';
import TeamCard from '../components/TeamCard';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
const Team = () => {
  const teamList = ['Rose Faith', 'Martin Abanga', 'loura kwaku'];
  return (
    <Layout title="team">
      <SectionWrapper>
        <SectionHeading heading="Our Leaders" />
      </SectionWrapper>
      <SectionWrapper>
        <TeamLeaders className="w-full flex items-center justify-center flex-col gab-10 md:flex-row flex-wrap md:gap-0">
          {teamList?.map((leader, i) => (
            <TeamCard key={i} heading={leader.name} />
          ))}
        </TeamLeaders>
      </SectionWrapper>
      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </Layout>
  );
};
const TeamLeaders = tw.div`  `;
export default Team;
