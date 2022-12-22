import React from 'react';
import Wrapper from '../components/Wrapper';
import Input from '../components/Input';
import tw from 'styled-components';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
const Contact = () => {
  return (
    <Layout title="contact">
      <SectionWrapper>
        <ContactInfo className="flex items-center flex-col md:justify-around md:flex-row w-full h-full">
          <div className="text-primaryColor flex flex-col justify-evenly items-start md:gap-10 gap-2  h-full">
            <Titile className="md:text-4xl flex flex-wrap text-2xl font-bold md:tracking-wide w-full">
              CONTACT FEMALE <br /> EMPOWERMENT <br /> INITIATIVE
            </Titile>
            <ContactDetail className="p-2 text-xl h-full">
              Bolgatanga, Ghana
            </ContactDetail>
            <ContactDetail className="p-2 text-xl h-full">
              feeminitiative766@gmail.com
            </ContactDetail>
            <ContactDetail className="p-2 text-xl h-full">
              +233 54 844 9660
            </ContactDetail>
          </div>
          <form className="flex flex-col p-5 justify-between text-primaryColor">
            <div>
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
              <button className="w-full bg-primaryColor text-primaryColor-white text-xl font-light p-5 mt-10">
                Submit
              </button>
            </div>
          </form>
        </ContactInfo>
      </SectionWrapper>
      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </Layout>
  );
};

const ContactInfo = tw.div``;
const ContactDetail = tw.p` `;
const Titile = tw.h5``;
export default Contact;
