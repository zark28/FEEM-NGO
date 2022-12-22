import React from 'react';
import SectionHeading from '../../components/SectionHeading';
import SectionWrapper from '../../components/SectionWrapper';
// import { useForm } from 'react-hook-form';
import tw from 'styled-components';
import NestedLayout from '../../components/NestedLayout';
import SupportNav from '../../components/SupportNav';
// import axios from 'axios';

const SupportForm = () => {
  // const { register, handleSubmit, errors, reset } = useForm();

  // async function onSubmitForm(values) {
  //   let config = {
  //     method: 'post',
  //     url: `http://localhost:3000/api/contact`,
  //     header: {
  //       'Content-Type': 'application/json',
  //     },
  //     data: values,
  //   };
  //   console.log(config);

  //   try {
  //     const response = await axios(config);
  //     console.log(response);
  //     if (response.status === 200) {
  //       reset();
  //       alert('thank you for contaction us');
  //     }
  //   } catch (err) {}
  // }
  return (
    <NestedLayout title="partnership">
      <Container>
        <SectionWrapper>
          <SupportNav />
        </SectionWrapper>

        <SectionWrapper flow="md:flex-row">
          <SectionHeading
            heading="Partner With Us"
            subHeading="send us a message"
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
// const InputItem = tw.div`
//     flex flex-col w-3/4 items-centre justify-between 
//  border-b-2 py-2 
// `;
const ContactDetail = tw.p`
  p-2
  text-xl
  h-full

`;
const Titile = tw.h5`md:text-4xl flex flex-wrap text-2xl font-bold md:tracking-wide w-full`;
export default SupportForm;
