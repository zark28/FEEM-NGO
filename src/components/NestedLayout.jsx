import React from 'react';
import SocialLinks from './SocialLinks';
import SectionWrapper from './SectionWrapper';

const NestedLayout = ({ title, children }) => {
  document.title = title ? `${title} - FEEM` : `FEEM`;
  return (
    <div>
      <span className="flex pt-5">
        <SocialLinks />
      </span>

      {children}
    </div>
  );
};

export default NestedLayout;
