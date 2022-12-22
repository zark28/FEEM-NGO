import React from 'react';
import tw from 'styled-components';
import { Link } from 'react-router-dom';
const ActivitiesCard = ({ title, details, link, img, flow }) => {
  return (
    <div
      className={`flex w-full h-full flex-col  md:items-center md:justify-around border-t-2 p-2 border-primaryColor-light1  my-10 ${
        flow ? flow : ''
      } `}
    >
      <Img src={img} alt={title} className="w-full md:w-1/3 md:h-full h-1/2" />

      <span className="w-full p-2 h-full gap-4 md:w-1/3 flex flex-col md:items-center md:justify-around ">
        <h5 className=" w-full  text-primaryColor text-2xl md:text-3xl my-5 font-bold">
          {title}
        </h5>
        <p className=" w-full leading-loose tracking-wide text-xl md:text-2xl font-light text-primaryColor">
          {details}
        </p>
        <Link to={link ? link : ''}>
          <button className="py-3 px-2 md:text-xl text-tertiaryColor bg-primaryColor duration-75 hover:bg-primaryColor-light2 ">
            Read more
          </button>
        </Link>
      </span>
    </div>
  );
};
const Img = tw.img``;
export default ActivitiesCard;
