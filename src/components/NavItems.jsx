import React from 'react';
import tw from 'styled-components';
import { NavLink } from 'react-router-dom';
const NavItems = ({ navLinksMode }) => {
  const navLinks = [
    { item: 'About', link: '/about' },
    { item: 'Projects', link: '/projects' },
    { item: 'Team', link: '/team' },
    { item: 'Blogs', link: '/blog' },
    { item: 'Gallery', link: '/gallery' },
    { item: 'Support', link: '/support' },
  ];
  const navItemStyles = [
    'text-primaryColor-light1 border-2 ease-in-out',
    'text-primaryColor',
  ];

  return (
    <NavLinks
      className={`w-full md:w-1/2 h-96 md:h-full md:flex absolute bg-primaryColor-light1 md:bg-transparent list-none flex-col justify-evenly md:flex-row md:items-end md:justify-between md:relative ${navLinksMode}`}
    >
      {navLinks?.map((nav, index) => (
        <NavLink
          to={nav.link}
          key={index}
          className="cursor-pointer hover:bg-secondaryColor flex justify-center transform duration-300  p-2 "
        >
          <NavItem className="  md:text-center text-xl w-3/4 md:mr-2 md:p-0  ">
            {nav.item}
          </NavItem>
        </NavLink>
      ))}
    </NavLinks>
  );
};

const NavLinks = tw.ul`
& > .active{
  border:2px;
  transition:ease-in-out;
  color: rgb(165, 165, 165);

}`;
const NavItem = tw.li` `;
export default NavItems;
