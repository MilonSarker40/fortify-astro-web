import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Protection = () => {
    return (
        <div className='mt-14 mb-28'>
            <div className='container'>
                <div className='bg-[#1d1d1d] px-10 py-16 rounded-[40px] relative overflow-hidden'>
                    <div className='max-w-[680px] w-full m-auto text-center'>
                        <h2 className='text-[50px] text-[#f6f6f6] font-bold mb-5'>Secure Your Data with Fortify Protection Solution</h2>
                        <p className='text-[18px] text-[#f6f6f6] leading-[1.5] mb-6'>Allows you to set thresholds for security parameters and receive real-time alerts when these thresholds are breached.</p>
                        <div className='flex justify-center items-center'>
                            <a href="#" className="bg-[#fff] text-[#1d1d1d] text-[18px] w-[198px] h-[62px] relative px-9 py-5 pt-[22px] rounded-full hover:bg-[#5ea977] transition flex items-center gap-2">
                                Get Started <span className='w-[48px] h-[48px] bg-[#5ea977] hover:bg-[#1d1d1d] hover:text-[#fff] rounded-full flex justify-center items-center absolute top-[7px] right-2'><FaArrowRight /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Protection;