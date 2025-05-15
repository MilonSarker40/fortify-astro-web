import CommonButton from '@/commons/CommonButton';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='pt-[190px]'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='text-[64px] text-primary font-semibold leading-[1.2] mb-5'>Your Trusted Partner in Comprehensive Web Security</h2>
                    <p className='max-w-[600px] w-full m-auto leading-[1.7] mb-[35px]'>Securing Your Digital World: Your Trusted Partner in Data Protection with Cutting-Edge Solutions for Comprehensive Data Security.</p>
                    <div className='flex justify-center items-center gap-4'>
                        <button className="group inline-flex items-center gap-3 px-8 pr-17 py-4 relative rounded-full bg-[var(--color-primary)] text-white font-medium transition-colors duration-300 hover:bg-[var(--color-secondary)] hover:text-black"
                        >
                            <span className="transition-colors duration-300 group-hover:text-black">
                            Get Started
                            </span>
                            <span className="w-10 h-10 rounded-full bg-[var(--color-secondary)] absolute right-2 flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--color-primary)]">
                            <FaArrowRight className="text-black group-hover:text-white text-sm" />
                            </span>
                        </button>

                        <button className="group inline-flex items-center gap-3 px-8 pr-17 py-4 relative rounded-full border-1 border-[#ddd] hover:border-[#dcf986] text-primary font-medium transition-colors duration-300 hover:bg-[var(--color-secondary)] hover:text-black"
                        >
                            <span className="transition-colors duration-300 group-hover:text-black">
                            Get Started
                            </span>
                            <span className="w-10 h-10 rounded-full absolute right-2 flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--color-primary)]">
                            <FaArrowRight className=" group-hover:text-white text-sm" />
                            </span>
                        </button>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-30 pt-[70px]'>
                    <div className='lg:!rotate-[-9.4deg]'>
                        <img src="/images/banner-1.webp" alt="Left Top Section" className="rounded-lg"/>
                    </div>
                    <div className='lg:!rotate-[2.57deg]'>
                        <img src="/images/banner-2.webp" alt="Left Top Section" className="rounded-lg"/>
                    </div>
                    <div className='lg:!rotate-[-8.52deg] '>
                        <img src="/images/banner-3.webp" alt="Left Top Section" className="rounded-lg"/>
                    </div>
                </div>
                <div>
                 <img
                  src="/images/banner-img.webp"
                  alt="Left Top Section"
                  className="rounded-lg w-full"
                />
                </div>
            </div>
        </div>
    );
};

export default Banner;