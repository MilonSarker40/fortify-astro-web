import Link from 'next/link';
import { FaAngleDown } from "react-icons/fa6";
import Navbar from './Navbar';

export default function Header() {
  return (
    <div className="shadow">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
            <image src='images/logo.svg' alt='Logo'/>
        </Link>
        <div>
          <Navbar />
        </div>
        <div>
            <a href="#"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition flex items-center gap-2"
          >
            Get Started <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}


