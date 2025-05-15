import CommonButton from '@/commons/CommonButton';
import SectionHeading from '@/commons/SectionHeading';
import React from 'react';
import { MdCheckCircle } from "react-icons/md"; 

const Features = () => {
  return (
    <div className="py-12 px-6">
      <div className="container mx-auto">
        <div className='max-w-[650px] w-full m-auto'>
            <SectionHeading tagline='Essential Feature' title='Discover the Features That Makes Fortify Stand Out.' subtitle='Your Trusted Partner in Data Protection with Cutting-Edge Solutions for Comprehensive Data Security.' />
        </div>
        <div className="flex justify-center items-center flex-col lg:flex-row gap-12">
           <div className='w-[50%]'>
              <div className='bg-[#fafafa] pl-[50px] pt-[50px] rounded-[24px]'>
                <img
                  src="/images/essential-feature-top.webp"
                  alt="Left Top Section"
                  className="rounded-lg w-full"
                />
              </div>
           </div>
           <div className='w-[50%] pl-[60px]'>
              <h2 className="text-[32px] font-semibold text-primary mb-5">
                Organize and understand data
              </h2>
              <p className="leading-[1.5] mb-[70px]">
                Allows you to set thresholds for security parameters and receive real-time alerts when these thresholds are breached ensuring you stay informed f critical events.
              </p>
              <div className='flex justify-center items-center gap-10'>
                 <div className='w-[50%]'>
                   <span className='bg-tertiary flex justify-center items-center w-[50px] h-[50px] rounded-full'><img src="/images/log.CmPoAMHR.webp"  alt="Security Status Overview" className="w-[30px] h-[30px] rounded-md"/></span>
                   <h4 className='text-[20px] text-primary font-semibold mt-[20px] mb-[15px]'>Detailed User Logs</h4>
                   <p>Our platform regularly logs all user activities including logins.</p>
                 </div>
                 <div className='w-[50%]'>
                   <span className='bg-tertiary flex justify-center items-center w-[50px] h-[50px] rounded-full'><img src="/images/code.DkaIcYyk.svg"  alt="Security Status Overview" className="w-[30px] h-[30px] rounded-md"/></span>
                   <h4 className='text-[20px] text-primary font-semibold mt-[20px] mb-[15px]'>Anomaly Detection</h4>
                   <p>This includes unusual login times and access to restricted data.</p>
                 </div>
              </div>
           </div>
         </div>

         <div className='flex justify-center items-center flex-col lg:flex-row gap-12 pt-[100px] pb-[50px]'>
            <div className='w-[50%] pr-28'>
              <h2 className='text-[32px] text-primary font-semibold leading-[1.3] mb-[40px]'>Delivers an all-encompassing security summary.</h2>
              <ul className="space-y-3 mb-[50px]">
                <li className="flex pl-[35px] relative">
                  <MdCheckCircle className="w-6 h-6 text-primary absolute top-1 left-0 mr-2" />
                  <span className="">Our platform ensures that all sensitive data is encrypted both during transmission and while stored</span>
                </li>
                <li className="flex pl-[35px] relative">
                  <MdCheckCircle className="w-6 h-6 text-primary absolute top-1 left-0 mr-2" />
                  <span className="">Implement role-based access controls (RBAC) and multi-factor authentication (MFA).</span>
                </li>
                <li className="flex pl-[35px] relative">
                  <MdCheckCircle className="w-6 h-6 text-primary absolute top-1 left-0 mr-2" />
                  <span className="">Regularly audit user access to sensitive information and systems to ensure compliance with security policies</span>
                </li>
              </ul>
              <CommonButton />
            </div>
            <div className='w-[50%] bg-[#fafafa] rounded-[24px] p-[50px]'>
                <img
                  src="/images/essential-feature-btm.webp"
                  alt="Left Top Section"
                  className="rounded-lg w-full"
                />
            </div>
         </div>
      </div>
    </div>
  );
};

export default Features;
