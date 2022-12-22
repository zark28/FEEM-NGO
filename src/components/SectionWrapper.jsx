import React from 'react';

const SectionWrapper = ({ flow, children }) => {
  return (
    <section className={`w-full flex items-center mt-10 ${flow}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
