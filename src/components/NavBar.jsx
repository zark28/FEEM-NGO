import React, { useState } from 'react';
import NavItems from './NavItems';
import tw from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [navMode, setNavMode] = useState(null);
  return (
    <Nav className="w-full flex items-end h-30 justify-between text-primaryColor bg-primaryColor-white  md:relative pb-10 static">
      <Span className="w-3/5 h-full flex  items-end">
        <NavLink to="/">
          <Icon
            className="md:w-40 flex-1  contain md:mr-5 cursor-pointer"
            src="/icons/logo.png"
            alt="logo"
          />
        </NavLink>
        <MainTitle className="main-title md:flex md:w-3/4 md:text-xl hidden text-center">
          FEMALE EMPOWERMENT INITIATIVE
        </MainTitle>
      </Span>
      <Humberger
        className="z-20 cursor-pointer w-10 h-10 flex flex-col relative justify-evenly md:hidden"
        onClick={() => (navMode ? setNavMode('') : setNavMode(true))}
      >
        <HumSpan
          className={`flex bg-primaryColor  ${
            navMode ? 'transform absolute rotate-45 ' : ''
          }`}
        ></HumSpan>
        <HumSpan
          className={`flex bg-primaryColor ${navMode ? 'hidden' : 'delay-75'}`}
        ></HumSpan>
        <HumSpan
          className={`flex bg-primaryColor ${
            navMode ? 'transform absolute -rotate-45' : ''
          }`}
        ></HumSpan>
      </Humberger>
      <NavItems navLinksMode={navMode ? 'flex' : 'hidden'} />
    </Nav>
  );
};
const Nav = tw.nav``;
const Span = tw.span` `;
const Icon = tw.img` `;
const MainTitle = tw.h1`  `;
const Humberger = tw.div``;
const HumSpan = tw.span`
height:0.25rem;
width:100%;
transition:500ms ease-in-out;


`;
export default NavBar;
