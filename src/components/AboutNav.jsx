import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import tw from 'styled-components'
const AboutNav = () => {
  const navItems = [
    {
      name: null,
      link: '',
    },
    {
      name: 'Sexual voilence',
      link: '/about/sexualVoilence',
    },
    {
      name: 'Leadership',
      link: '/about/leadership',
    },
    {
      name: 'Reproductive health',
      link: '/about/reproductiveHealth',
    },
    {
      name: 'Livelihoods',
      link: '/about/livelihoods',
    },
    {
      name: 'School',
      link: '/about/school',
    },

    {
      name: 'Decision making',
      link: '/about/opportunities',
    },
  ];
 
  return (
    <AboutNavLayout className="md:flex gap-5  w-full md:gap-x-5 pt-5 px-5">
      <Link to="/about" className="cursor-pointer text-5xl">
      <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </Link>
    
      {navItems?.map((item, i) => (
        <NavLink
          key={i}
          to={item.link}
          className={`${item.name ? '' : 'opacity-0'} about-nav`}
        >
          <button className= {` font-light md:text-l w-full  duration-300 ease-in-out  hover:bg-secondaryColor py-3 px-6 `}>
            {item.name}
          </button>
        </NavLink>
      ))}
    </AboutNavLayout>
  );
};

const AboutNavLayout=tw.div`
.about-nav  button{
    color:#A5A5A5;
    background:transparent;
    border:2px solid; 
}

.about-nav.active button{
  color:#ffffff;
  background:#431161;
 
}
`
export default AboutNav;
