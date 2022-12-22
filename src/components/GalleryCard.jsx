import React from 'react';
import tw from 'styled-components';

const GalleryCard = ({ heading, text, img }) => {
  return (
    <Card className="w-full h-full object-contain object-center ease-in-out transform duration-300 md:hover:scale-95 hover relative">
      <img src={`${img}`} alt={heading} className="w-full h-full" />
      <Title className="text-primaryColor-white w-full bottom-0 left-0 absolute bg-primaryColor-light2 flex flex-col justify-between items-center">
        <h3 className="border-b-2 border-primaryColor-light1 mb-2">
          {heading}
        </h3>
      </Title>
    </Card>
  );
};
const Card = tw.div` `;
const Title = tw.div`   `;
export default GalleryCard;
