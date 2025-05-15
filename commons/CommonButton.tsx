import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CommonButton = ({ text = 'Get Started', onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-3 px-8 pr-17 py-4 relative rounded-full bg-[var(--color-primary)] text-white font-medium transition-colors duration-300 hover:bg-[var(--color-secondary)] hover:text-black"
    >
      <span className="transition-colors duration-300 group-hover:text-black">
        {text}
      </span>
      <span className="w-10 h-10 rounded-full bg-[var(--color-secondary)] absolute right-2 flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--color-primary)]">
        <FaArrowRight className="text-black group-hover:text-white text-sm" />
      </span>
    </button>
  );
};

export default CommonButton;
