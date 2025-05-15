import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook,FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; 


export default function Footer() {
  return (
    <footer className="bg-[#fafafa] py-[110px]">
      <div className="container mx-auto px-4">
        <div className="flex">
          {/* Left Section */}
          <div className='w-[30%]'>
            <Link href="/" className="inline-block">
              <Image src="/images/logo.svg" width={140} height={50} alt="Logo" />
            </Link>
            <p className="text-[#464646] leading-[1.8] max-w-xs mt-6">
              Securing Your Digital World: Your Trusted Partner in Data Protection with Cutting Edge Solutions for Data Security.
            </p>
          </div>

          {/* Resources */}
          <div className='w-[20%] pl-18'>
            <h3 className="text-[16px] font-bold text-[#1d1d1d] mt-3 mb-[50px]">Resources</h3>
            <ul>
              <li><Link href="/features" className="text-[#1d1d1d] mb-5 inline-block hover:text-[#5ea977] cursor-pointer">Features</Link></li>
              <li><Link href="/pricing" className="text-[#1d1d1d] mb-5 inline-block hover:text-[#5ea977] cursor-pointer">Pricing</Link></li>
              <li><Link href="/blog" className="text-[#1d1d1d] mb-5 inline-block hover:text-[#5ea977] cursor-pointer">Blog</Link></li>
            </ul>
          </div>

          {/* Quick Info */}
          <div className='w-[20%] pl-12'>
            <h3 className="text-[16px] font-bold text-[#1d1d1d] mt-3 mb-[50px]">Quick Info</h3>
            <ul>
              <li><Link href="/terms" className="text-[#1d1d1d] mb-5 inline-block hover:text-[#5ea977] cursor-pointer">Terms</Link></li>
              <li><Link href="/privacy" className="text-[#1d1d1d] mb-5 inline-block hover:text-[#5ea977] cursor-pointer">Privacy Policy</Link></li>
              <li><Link href="/contact" className="text-[#1d1d1d] mb-5 inline-block hover:text-[#5ea977] cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className='w-[30%]'>
            <div>
              <h3 className="text-[16px] font-bold text-[#1d1d1d] mt-3 mb-[30px]">Subscribe to Our Newsletter!</h3>
              <p className="text-[#464646] leading-[1.8] mb-5">
                Stay Informed With Our Latest Security Insights - Subscribe to Our Newsletter!
              </p>
              <div className="flex relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#fff] rounded-full py-5 pr-[120px] text-[#1d1d1d] px-8 w-full h-[75px] focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-tertiary absolute right-[10px] top-[9px] text-[#464646] py-[18px] px-5 rounded-full ml-2 hover:bg-green-600 focus:outline-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-[16px] text-[#464646]">Copyright © 2025 Fortify, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}