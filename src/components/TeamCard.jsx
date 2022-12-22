import React from 'react';
import tw from 'styled-components';

const TeamCard = ({ heading, img }) => {
  return (
    <Card className="md:w-80 md:h-80 w-96 h-96 object-contain object-center relative">
      <img className="w-full h-full" src={`/img/${img}`} alt={heading} />
      <Title className="text-primaryColor-white w-full bottom-0 left-0 absolute bg-primaryColor-light2 flex justify-center items-center text-2xl  h-1/2 ">
        <h3>{heading}</h3>
      </Title>
    </Card>
  );
};
const Card = tw.div` `;
const Title = tw.div` `;
export default TeamCard;
