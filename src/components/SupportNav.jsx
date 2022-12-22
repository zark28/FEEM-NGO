import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import tw from 'styled-components';
const SupportNav = () => {
  const router = useRoutes();
  const navItems = [
    { name: 'partner', link: '/support/partner' },
    { name: 'volunteer', link: '/support/volunteer' },
    { name: 'donate', link: '/support/donate' },
  ];
  const navItemStyles = [
    'text-primaryColor-light1 bg-transparent border-2 ',
    'text-primaryColor-white bg-primaryColor',
  ];
  return (
    <div className="flex w-full justify-evenly">
      <Link to="/support" className="cursor-pointer">
        <img src="/icons/arrow-left.svg" alt="back arrow" />
      </Link>
      {navItems?.map((item, i) => (
        <NavLink key={i} to={item.link}>
          <button
            className={`font-light text-2xl duration-300 ease-in-out  hover:bg-secondaryColor py-3 px-6 ${
              router.pathname === item.link
                ? navItemStyles[0]
                : navItemStyles[1]
            }`}
          >
            {item.name}
          </button>
        </NavLink>
      ))}
    </div>
  );
};
export default SupportNav;
