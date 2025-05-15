import React, { useState } from 'react';
import { MdCheckCircle } from "react-icons/md"; 
import CountUp from 'react-countup'; 
import SectionHeading from '@/commons/SectionHeading';
import { FaArrowRight } from "react-icons/fa6";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [basicPrice, setBasicPrice] = useState(29);
  const [premiumPrice, setPremiumPrice] = useState(99);

  const handleToggle = () => {
    setIsYearly(!isYearly);
    // Trigger price change for animation
    if (!isYearly) {
      setBasicPrice(29 * 12); 
      setPremiumPrice(99 * 12);
    } else {
      setBasicPrice(29); 
      setPremiumPrice(99);
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeading tagline='Pricing & Plan' title='Choose a suitable plan' subtitle='Your Trusted Partner in Data Protection with Cutting-Edge Solutions for Comprehensive Data Security.' />
        <div className="text-center flex justify-between items-center max-w-[200px] w-full m-auto mb-12">
          <span className='text-[16px] text-[#464646]'>Monthly</span>
          <div className="flex justify-between p-1 w-[65px] h-[32px] bg-[#ddd] rounded-full">
            <button
              type="button"
              className={`inline-flex items-center justify-center w-[24px] h-[24px] rounded-full  ${!isYearly ? ' bg-[#ddd] hover:bg-[#5ea977]' : 'text-white bg-[#5ea977]'}`}
              onClick={handleToggle}
            >
            </button>
            <button
              type="button"
              className={`inline-flex items-center justify-center w-[24px] h-[24px] rounded-full ${isYearly ? 'bg-[#ddd] hover:bg-[#5ea977]' : 'text-white bg-[#5ea977]'}`}
              onClick={handleToggle}

            >
            </button>
          </div>
          <span className='text-[16px] text-[#464646]'>Yearly</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Basic Plan Card */}
          <div className="bg-[#fafafa] rounded-[24px] px-[30px] py-[40px] flex flex-col justify-between">
            <div>
              <h2 className="text-[25px] text-[#1d1d1d] font-bold mb-[35px]">Basic Plan</h2>
              <p className="mb-[30px] leading-[1.7]">
                Ideal for small businesses or individuals looking to secure their <br/>
                data with fundamental protection features.
              </p>
              <div className="mb-10">
                <span className="text-[51px] font-medium text-[#1d1d1d]">
                  $
                  <CountUp
                    end={basicPrice}
                    duration={0.5} 
                    useEasing={true}
                  />
                </span>
                <span className="text-[#464646] pl-2">
                  /
                  {isYearly ? 'year, billed yearly' : 'month, billed monthly'}
                </span>
              </div>
              <ul className="space-y-3 mb-[50px]">
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-[#5ea977] mr-2" />
                  <span className="text-[#464646] text-[16px]">Basic Threat Detection</span>
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-[#5ea977] mr-2" />
                  <span className="text-[#464646] text-[16px]">Basic Alerts & Reporting</span>
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-[#5ea977] mr-2" />
                  <span className="text-[#464646] text-[16px]">Daily Data Backup</span>
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-[#5ea977] mr-2" />
                  <span className="text-[#464646] text-[16px]">Email Support</span>
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-[#5ea977] mr-2" />
                  <span className="text-[#464646] text-[16px]">Single User License</span>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="bg-[#1d1d1d] text-white w-[230px] px-9 py-5 rounded-full hover:bg-[#5ea977] transition flex items-center gap-2"
            >
              Select Basic Plan <span><FaArrowRight /></span>
            </a>
          </div>

          {/* Premium Plan Card */}
          <div className="bg-[#1d1d1d] rounded-[24px] px-[30px] py-[40px] flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-12">
                <h2 className="text-2xl font-medium text-[#f6f6f6] pr-4">Premium Plan</h2>
                <span className="bg-[#5ea977] text-[#1d1d1d] font-medium px-7 py-3 rounded-full mr-2">
                  Recommended
                </span>
              </div>
              <p className="text-gray-300 mb-10">
                Perfect for medium to large businesses requiring advanced security
                features and priority support.
              </p>
              <div className="mb-6">
                <span className="text-[51px] font-medium text-[#f6f6f6]">
                  $
                    <CountUp
                      end={premiumPrice}
                      duration={0.5}
                      useEasing={true}
                    />
                </span>
                <span className="text-[#f6f6f6] pl-2">
                  /
                  {isYearly ? 'year, billed yearly' : 'month, billed monthly'}
                </span>
              </div>
              <ul className="space-y-3 mb-[50px]">
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-[#5ea977] mr-2" />
                  <span className="text-[#f6f6f6]">Advanced Threat Detection and Remediation</span>
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-[#5ea977] mr-2" />
                  <span className="text-[#f6f6f6]">Real-Time Alerts and Reporting</span>
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-[#5ea977] mr-2" />
                  <span className="text-[#f6f6f6]">Continuous Data Backup and Restore</span>
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-[#5ea977] mr-2" />
                  <span className="text-[#f6f6f6]">24/7 Priority Support</span>
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-[#5ea977] mr-2" />
                  <span className="text-[#f6f6f6]">Multi-User Licenses (Up to 10 Users)</span>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="bg-[#fafafa] text-[#1d1d1d] w-[230px] px-9 py-5 rounded-full hover:bg-[#5ea977] transition flex items-center gap-2"
            >
              Select Basic Plan <span><FaArrowRight /></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
