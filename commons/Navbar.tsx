"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
// import { FaAngleDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export const allPagesMenu = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Integration", link: "/integration" },
  { name: "Changelog", link: "/changelog" },
  { name: "Blog", link: "/blog" },
  { name: "Blog Details", link: "/blog/details" },
  { name: "Review", link: "/review" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Terms & Conditions", link: "/terms" },
  { name: "404", link: "/404" },
];

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="py-6 px-8">
      <ul className="flex items-center gap-5 font-medium text-black relative">
        {/* All Pages Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="flex items-center gap-1 text-[#1d1d1d] hover:text-green-600 transition px-4 py-2">
            All Pages
            <span
              className={`transition-transform duration-300 ${
                isHovered ? "rotate-180" : ""
              }`}
            >
              <FaAngleDown />
            </span>
          </button>

          <AnimatePresence>
            {isHovered && (
              <motion.ul
                key="dropdown"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 w-50 border-1 border-[#1d1d1d] bg-white shadow-lg rounded-sm z-50 p-4"
              >
                {allPagesMenu.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="block px-2 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
        <li>
          <a href="#features" className="px-4 py-2 hover:text-green-600 transition">
            Features
          </a>
        </li>
        <li>
          <a href="#pricing" className="px-4 py-2 hover:text-green-600 transition">
            Pricing
          </a>
        </li>
        <li>
          <a href="#contact" className="px-4 py-2 hover:text-green-600 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
