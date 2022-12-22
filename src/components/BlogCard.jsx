import React from 'react';
import tw from 'styled-components';

const BlogCard = ({ heading, text, img }) => {
  return (
    <Card className="md:w-80 md:h-80 w-96 h-96 object-contain object-center relative shadow-2xl border-2 border-primaryColor-light1 shadow-secondaryColor">
      <img src={`${img}`} alt={heading} className=" w-full h-full" />
      <Title className="text-primaryColor-white w-full bottom-0 left-0 absolute bg-primaryColor-light2 flex flex-col justify-between items-center text-2xl  h-1/2">
        <h3 className="border-b-2 border-primaryColor-light1 mb-2">
          {heading}
        </h3>
        <p className="s flex flex-1 items-center justify-center w-full">
          {text}
        </p>
      </Title>
    </Card>
  );
};
const Card = tw.div``;
const Title = tw.div`    `;
export default BlogCard;
