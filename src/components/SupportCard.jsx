import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'styled-components';

const SupportCard = ({ heading, link, text, img }) => {
  return (
    <Card className="w-full h-full object-contain object-center relative text-secondaryColor border-2 transform hover:scale-105 hover:z-40 transition duration-300">
      <img src={`/icons/${img}`} alt={heading} className=" w-full h-full" />
      <Link to={link} className="cursor-pointer">
        <Title className="w-full bottom-0 left-0 absolute bg-primaryColor-light1 bg-opacity-80 flex flex-col justify-between items-center text-2xl  h-1/2 ">
          <h3 className="border-b-2 border-primaryColor-light1 pt-4 font-extrabold text-center ">
            {heading}
          </h3>
          <p className=" text-primaryColor flex flex-1 font-medium h-full justify-center items-center px-5">
            {text ? text : ''}
          </p>
        </Title>
      </Link>
    </Card>
  );
};
const Card = tw.div` `;
const Title = tw.div`  `;
export default SupportCard;
