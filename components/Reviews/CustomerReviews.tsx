import React from 'react';
import { FaStar } from 'react-icons/fa';
import SectionHeading from '@/commons/SectionHeading';


const CustomerReviews = () => {
  const reviewData = [
    {
      rating: 5,
      title:'Implementing this data security solution has been a game-changer for our company.',
      quote:
        'Implementing this data security solution has been a game-changer for our company. The real-time threat detection and automated response features have significantly reduced our risk exposure. We now feel more confident than ever about our data security posture.',
      customerName: 'Michael Brown',
      customerTitle: 'IT Director at HealthCare',
      customerImage: 'images/customer-img-1.webp',
    },
    {
      rating: 4,
      title:'The granular access controls and detailed user activity tracking have given us unparalleled visibility.',
      quote:
        "The granular access controls and detailed user activity tracking have given us unparalleled visibility. The granular access controls and detailed user activity tracking have given us unparalleled visibility into our system's security. This platform has helped us maintain our data.",
      customerName: 'Jane Smith',
      customerTitle: 'CTO at Tech Innovators Inc.',
      customerImage: 'images/customer-img-2.webp',
    },
    {
      rating: 5,
      title:'The comprehensive risk analysis and impact visualization tools are exceptional.',
      quote:
        'The comprehensive risk analysis and impact visualization tools are exceptional. The comprehensive risk analysis and impact visualization tools are exceptional. We can quickly identify and mitigate potential threats before they become serious issues.',
      customerName: 'Marvin Brown',
      customerTitle: 'COO at Financial Services Group',
      customerImage: 'images/customer-img-3.webp',
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto">

        <SectionHeading tagline='12,000+ Happy Customers' title='Customer Reviews' subtitle='Your Trusted Partner in Data Protection with Cutting-Edge Solutions for Comprehensive Data Security.' />

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewData.map((review, index) => (
            <div key={index} className="bg-[#fafafa] rounded-[24px] p-6 transition duration-300">
              <div className="flex space-x-1 mb-6">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`text-yellow-500 ${i < review.rating ? '' : 'opacity-50'} w-5 h-5`}
                  />
                ))}
              </div>
              <strong className='text-[18px] text-[#1d1d1d] inline-block leading-[1.5] mb-5'>{review.title}</strong>
              <p className="text-gray-700 leading-relaxed mb-6">{review.quote}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={review.customerImage}
                  alt={review.customerName}
                  className="w-14 h-14 rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/150/cccccc/eeeeee?Text=User';
                  }}
                />
                <div>
                  <h4 className="text-[18px] font-bold text-[#464646] mb-1">{review.customerName}</h4>
                  <p className="text-sm text-gray-500">{review.customerTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
