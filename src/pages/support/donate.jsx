import React from 'react';
import SectionHeading from '../../components/SectionHeading';
import SectionWrapper from '../../components/SectionWrapper';
// import Input from '../components/Input';
import NestedLayout from '../../components/NestedLayout';
import SupportNav from '../../components/SupportNav';
import tw from 'tailwind-styled-components';
const Donate = () => {
  return (
    <NestedLayout title="donate">
      <Container>
        <SectionWrapper>
          <SupportNav />
        </SectionWrapper>

        <SectionWrapper flow="md:flex-row">
          <SectionHeading
            heading="Donate"
            subHeading="support with money or goods"
          />
          <ContactInfo>
            <div className="text-primaryColor flex flex-col justify-evenly items-start md:gap-10 gap-2  h-full">
              <Titile>
                CONTACT FEMALE <br /> EMPOWERMENT <br /> INITIATIVE
              </Titile>
              <ContactDetail>Bolgatanga, Ghana</ContactDetail>
              <ContactDetail>feeminitiative766@gmail.com</ContactDetail>
              <ContactDetail>+233 54 844 9660</ContactDetail>
            </div>
          </ContactInfo>
        </SectionWrapper>
      </Container>
    </NestedLayout>
  );
};
const Container = tw.div` flex flex-col items-center justify-center w-full`;
const ContactInfo = tw.div`
flex    items-center
flex-col
    md:justify-around
    md:flex-row
    w-full
    h-full

`;
const ContactDetail = tw.p`
  p-2
  text-xl
  h-full

`;
const Titile = tw.h5`md:text-4xl flex flex-wrap text-2xl font-bold md:tracking-wide w-full`;

export default Donate;
