import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";
import Navbar from './Navbar';

export default function Header() {
  return (
    <div className='py-6 absolute top-0 left-0 right-0'>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="inline-block">
          <Image src="/images/logo.svg" width={140} height={50} alt="Logo" />
        </Link>
        <div>
          <Navbar />
        </div>
        <div>
          <a
            href="#"
            className="bg-[#1d1d1d] text-white px-9 py-4 rounded-full hover:bg-[#5ea977] transition flex items-center gap-2"
          >
            Get Started <span><FaArrowRight /></span>
          </a>
        </div>
      </div>
    </div>
  );
}
