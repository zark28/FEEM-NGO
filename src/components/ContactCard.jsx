import React from 'react';
import tw from 'styled-components';

const ContactCard = ({ heading, children }) => {
  return (
    <Container className="flex flex-col items-center justify-center w-full">
      <img
        src="/img/we4.jpg"
        alt="contact-us"
        className="flex-1 h-ful w-full px-10"
      />
      <ContactInfo className="w-2/3">
        {heading}
        <form className="flex flex-col p-5 justify-between text-primaryColor">
          <div className="">
            <Titile className="text-2xl font-bold w-full">
              CONTACT FEMALE EMPOWERMENT INITIATIVE
            </Titile>
            <ContactDetail>Bolgatanga, Ghana</ContactDetail>
            <ContactDetail>feeminitiative766@gmail.com</ContactDetail>
            <ContactDetail>+233 54 844 9660</ContactDetail>
          </div>
          <div>
            {children}
            <button className="w-full  bg-primaryColor text-primaryColor-white text-xl font-light p-5 mt-10">
              Submit
            </button>
          </div>
        </form>
      </ContactInfo>
    </Container>
  );
};
const Container = tw.div``;
const ContactInfo = tw.div``;
const ContactDetail = tw.p`
  padding:8px; 
   font-size:1.25rem;
  line-height:1.75rem;
`;
const Titile = tw.h5``;
export default ContactCard;
