import SectionHeading from '@/commons/SectionHeading';
import React from 'react';

const SecurityStatus = () => {
  return (
    <div className='pb-[80px]'>
      <div className='container mx-auto px-4'>
        <div className='max-w-[620px] w-full m-auto mb-28'>
            <SectionHeading tagline='Features Explained' title='Interactive Chart Displays Key Metrics and Trends.' subtitle='Your Trusted Partner in Data Protection with Cutting-Edge Solutions for Comprehensive Data Security.' />
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Left Column Content */}
        <div className="md:w-1/3 pt-[40px]">
            <div className="mb-10 px-6 py-10 bg-[#fafafa] rounded-[24px] text-center mr-[80px] relative">
                <span className="inline-block absolute top-[50%] right-[-85px] w-[72px] h-1 border-b-1 border-dashed border-[#464646]"></span>
                <h2 className="text-[20px] font-semibold text-primary mb-2">Security Status Indicator</h2>
                <p className="leading-[1.6]">
                Displays the current security status of your organization with a clear color-coded indicator.
                </p>
            </div>
            <div className="mb-10 px-6 py-10 bg-[#fafafa] rounded-[24px] text-center">
                <h2 className="text-[20px] font-semibold text-primary mb-2">Threat Landscape Overview</h2>
                <p className="leading-[1.6]">
                Breaks down the threats by type (e.g., phishing, malware, ransomware) to give a detailed overview of the
                threat landscape.
                </p>
            </div>
            <div className='px-6 py-10 bg-[#fafafa] rounded-[24px] text-center mr-[80px] relative'>
                <span className="inline-block absolute top-[50%] right-[-85px] w-[72px] h-1 border-b-1 border-dashed border-[#464646]"></span>
                <h2 className="text-[20px] font-semibold text-primary mb-2">Incident Management</h2>
                <p className="leading-[1.6]">Lists the number of active security incidents currently being addressed.</p>
            </div>
        </div>

        {/* Middle Image */}
        <div className="md:w-1/3 flex justify-center">
        <img
            src="/images/product.png"  
            alt="Security Status Overview"
            className="w-full h-auto rounded-md"
        />
        </div>

        {/* Right Column Content */}
        <div className="md:w-1/3 pt-[40px]">
            <div className="mb-10 px-6 py-9 bg-[#fafafa] rounded-[24px] text-center relative">
                <h2 className="text-[20px] font-semibold text-primary mb-2">User Activity Monitoring</h2>
                <p className="leading-[1.6]">
                Highlights the most frequently accessed sensitive files or databases and the users
                involved, ensuring transparency and control over critical data.
                </p>
            </div>
            <div className="mb-10 px-6 py-9 bg-[#fafafa] rounded-[24px] text-center ml-[80px] relative">
                <span className="inline-block absolute top-[50%] left-[-85px] w-[72px] h-1 border-b-1 border-dashed border-[#464646]"></span>
                <h2 className="text-[20px] font-semibold text-primary mb-2">Data Access Monitoring</h2>
                <p className="leading-[1.6]">
                Highlights the most frequently accessed sensitive files or databases and the users involved.
                </p>
            </div>
            <div className='ml-3 px-6 py-9 bg-[#fafafa] rounded-[24px] text-center relative'>
                <span className="inline-block absolute top-[50%] left-[-25px] w-[15px] h-1 border-b-1 border-dashed border-[#464646]"></span>
                <h2 className="text-[20px] font-semibold text-primary mb-2">Compliance Monitoring</h2>
                <p className="leading-[1.6]">
                Our system continuously monitors your network and data environments for any suspicious activities.
                </p>
            </div>
        </div>
    </div>
        
    </div>
    </div>
  );
};

export default SecurityStatus;
