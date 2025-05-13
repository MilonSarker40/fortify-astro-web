import React from 'react';
import { FaStar } from 'react-icons/fa'; 



const reviewData = [
  {
    rating: 5,
    quote:
      'Implementing this data security solution has been a game-changer for our company. The real-time threat detection and automated response features have significantly reduced our risk exposure. We now feel more confident than ever about our data security posture.',
    customerName: 'Michael Brown',
    customerTitle: 'IT Director at HealthCare',
    customerImage: 'https://via.placeholder.com/150/007bff/ffffff?Text=MB',
  },
  {
    rating: 4,
    quote:
      "The granular access controls and detailed user activity tracking have given us unparalleled visibility. The granular access controls and detailed user activity tracking have given us unparalleled visibility into our system's security. This platform has helped us maintain our data.",
    customerName: 'Jane Smith',
    customerTitle: 'CTO at Tech Innovators Inc.',
    customerImage: 'https://via.placeholder.com/150/28a745/ffffff?Text=JS',
  },
  {
    rating: 5,
    quote:
      'The comprehensive risk analysis and impact visualization tools are exceptional. The comprehensive risk analysis and impact visualization tools are exceptional. We can quickly identify and mitigate potential threats before they become serious issues.',
    customerName: 'Marvin Brown',
    customerTitle: 'COO at Financial Services Group',
    customerImage: 'https://via.placeholder.com/150/ffc107/000000?Text=MarvB',
  },
];

const CustomerReviews = ({ reviews }) => {
  const SectionHeader = ({ title, subtitle }) => (
    <div className="text-center mb-10">
      <p className="text-green-500 font-semibold text-sm mb-2">12,000+ Happy Customers</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 max-w-xl mx-auto">{subtitle}</p>
    </div>
  );

  const ReviewCard = ({ rating, quote, customerName, customerTitle, customerImage }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`text-yellow-500 ${index < rating ? '' : 'opacity-50'} w-5 h-5`}
      />
    ));

    return (
      <div className="bg-white rounded-md p-8 shadow-md hover:shadow-lg transition duration-300">
        <div className="flex space-x-1 mb-4">{stars}</div>
        <p className="text-gray-700 leading-relaxed mb-6">{quote}</p>
        <div className="flex items-center space-x-4">
          <img
            src={customerImage}
            alt={customerName}
            className="w-14 h-14 rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/150/cccccc/eeeeee?Text=User'; // Fallback image
            }}
          />
          <div>
            <h4 className="text-lg font-semibold text-gray-800">{customerName}</h4>
            <p className="text-sm text-gray-500">{customerTitle}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Customer Reviews"
          subtitle="Your Trusted Partner in Data Protection with Cutting-Edge Solutions for Comprehensive Data Security."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};
