import React, { useState } from 'react';
import { MdCheckCircle } from "react-icons/md"; // Ensure this is installed: npm install react-icons
import CountUp from 'react-countup'; // Ensure this is installed: npm install react-countup

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [basicPrice, setBasicPrice] = useState(29);
  const [premiumPrice, setPremiumPrice] = useState(99);

  const handleToggle = () => {
    setIsYearly(!isYearly);
    // Trigger price change for animation
    if (!isYearly) {
      setBasicPrice(29 * 12); // Monthly to Yearly
      setPremiumPrice(99 * 12);
    } else {
      setBasicPrice(29); // Yearly to Monthly
      setPremiumPrice(99);
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center flex justify-between items-center max-w-[200px] w-full m-auto mb-12">
          <span>Monthly</span>
          <div className="flex justify-between p-1 w-[65px] h-[32px] bg-[#ddd] rounded-full">
            <button
              type="button"
              className={`inline-flex items-center justify-center w-[24px] h-[24px] rounded-full  ${!isYearly ? 'text-gray-700 bg-[#ddd] hover:bg-gray-50' : 'text-white bg-[#5ea977] hover:bg-indigo-700'}`}
              onClick={handleToggle}
            >
            </button>
            <button
              type="button"
              className={`inline-flex items-center justify-center w-[24px] h-[24px] rounded-full ${isYearly ? 'text-gray-700 bg-[#ddd] hover:bg-gray-50' : 'text-white bg-[#5ea977] hover:bg-indigo-700'}`}
              onClick={handleToggle}

            >
            </button>
          </div>
          <span>Yearly</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basic Plan Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Basic Plan</h2>
              <p className="text-gray-600 mb-4">
                Ideal for small businesses or individuals looking to secure their
                data with fundamental protection features.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  $
                  <CountUp
                    end={basicPrice}
                    duration={0.5} 
                    useEasing={true}
                  />
                </span>
                <span className="text-gray-500">
                  /
                  {isYearly ? 'year, billed yearly' : 'month, billed monthly'}
                </span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Basic Threat Detection</span>
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Basic Alerts & Reporting</span>
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Daily Data Backup</span>
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Email Support</span>
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Single User License</span>
                </li>
              </ul>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
              Select Basic Plan
            </button>
          </div>

          {/* Premium Plan Card */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full mr-2">
                  Recommended
                </span>
                <h2 className="text-2xl font-semibold text-white">Premium Plan</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Perfect for medium to large businesses requiring advanced security
                features and priority support.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  $
                    <CountUp
                      end={premiumPrice}
                      duration={0.5}
                      useEasing={true}
                    />
                </span>
                <span className="text-gray-400">
                  /
                  {isYearly ? 'year, billed yearly' : 'month, billed monthly'}
                </span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-white">Advanced Threat Detection and Remediation</span>
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-white">Real-Time Alerts and Reporting</span>
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-white">Continuous Data Backup and Restore</span>
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-white">24/7 Priority Support</span>
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-white">Multi-User Licenses (Up to 10 Users)</span>
                </li>
              </ul>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-4 rounded-md transition duration-300">
              Select Premium Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
