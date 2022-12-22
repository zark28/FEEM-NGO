import { Link } from 'react-router-dom';
import React from 'react';
import tw from 'styled-components';
const SocialLinks = () => {
  const socialList = [
    {
      icon: '/icons/facebook.svg',
      link: 'https://www.facebook.com/FemaleEmpowermentGh/',
    },
    {
      icon: '/icons/twitter.svg',
      link: 'https://twitter.com/feem_initiative?t=SCrvcPAIj5-EXdgcWuSUGQ&s=09',
    },
    {
      icon: '/icons/instagram.svg',
      link: 'https://instagram.com/feeminitiative?utm_medium=copy_link',
    },
  ];
  return (
    <Socials className="w-full  flex items-center justify-evenly md:justify-end">
      {socialList?.map((item, i) => (
        <Link
          to={item.link}
          passHref
          key={i}
          target="_blank"
          className="mx-5 ease-in-out transform duration-75 hover:scale-90"
        >
          <img src={item.icon} width='25px' alt="social-icon" />
        </Link>
      ))}
    </Socials>
  );
};
const Socials = tw.div``;

export default SocialLinks;
