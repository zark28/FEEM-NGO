import React from 'react';
import AboutNav from '../../components/AboutNav';
import NestedLayout from '../../components/NestedLayout';
import tw from 'styled-components';
import SectionWrapper from '../../components/SectionWrapper';
import SectionHeading from '../../components/SectionHeading';
import { useParams } from 'react-router-dom';
import ways from '../../utils/data';
const AboutSingle = () => {
  const params = useParams();
  const { aboutItem } = params;
  const activeAbout = ways.find((way) => way.way.link === aboutItem);
  console.log(activeAbout);
  console.log(activeAbout.way);
  return (
    <NestedLayout title={activeAbout.way.title}>
      <Container className="w-full h-full flex flex-col items-center justify-center">
        <AboutNav />

        <SectionWrapper flow="flex-col md:grid md:grid-cols-1">
          <TextContent className="flex flex-col gap-5 p-10 h-full text-xl leading-10 text-primaryColor">
            <SectionHeading subHeading={activeAbout.way.subHeading} />
            <Text className="flex flex-col items-center justify-center w-full">{activeAbout.way.text}</Text>
            
            <div className="flex flex-col w-full">
              <h3 className="flex w-full bg-primaryColor-light2 text-center items-center justify-center font-semibold text-primaryColor-white mb-5">
                {activeAbout.way.textHeading1}
                <br />
                {activeAbout.way.textHeading2}
                <br />
                {activeAbout.way.textHeading3}
              </h3>
              <ul className="list-disc grid md:grid-cols-2 grid-cols-1 gap-5 md:px-8  px-2">
                {activeAbout.way.actions.map((action, i) => (
                  <li className='ml-5'  key={i}>{action}</li>
                ))}
              </ul>
              <Text className="flex flex-col w-full"></Text>
            </div>
          </TextContent>
         
        </SectionWrapper>
      </Container>
    </NestedLayout>
  );
};
const Container = tw.div`  `;
const TextContent = tw.article` `;
const Text = tw.p``;
const Images = tw.div``;
const ImgSpan = tw.div``;
const Img = tw.img` 
width:50%;
padding:4px;
`;

export default AboutSingle;
