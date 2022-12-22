import React from 'react';
import tw from 'styled-components';
import NavBar from './NavBar';
import SocialLinks from './SocialLinks';
const Wrapper = (props) => {
  return (
    <Main className=" w-full h-full flex flex-col scroll-smooth  items-center justify-center md:p-10 p-2">
      <NavBar />
      <SocialLinks />
      <Span className="relative scroll-smooth w-full h-full flex flex-col items-center justify-center">
        {props.children}
      </Span>
    </Main>
  );
};

const Main = tw.section``;
const Span = tw.main` `;
export default Wrapper;
