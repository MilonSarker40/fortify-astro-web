import React from 'react';

const SectionHeading = ({ title, subtitle, tagline }) => {
  return (
    <div className="text-center mb-20">
      <span className="text-[#5ea977] text-[16px] font-medium mb-3">{tagline}</span>
      <h2 className="text-[50px] font-bold text-[#1d1d1d] mb-5">{title}</h2>
      <p className="max-w-xl mx-auto leading-[1.7]">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
