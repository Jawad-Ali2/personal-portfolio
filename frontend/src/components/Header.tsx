import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Web Dev", path: "/web-portfolio" },
    { name: "Video Editing", path: "/video-portfolio" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full flex justify-evenly items-center px-6 py-4 bg-noise backdrop-blur-sm shadow-md z-50">
      <div className="flex items-center">
        <Image
          src={"/JA_svg.svg"}
          height={40}
          width={40}
          alt="logo"
          className="md:max-w-10 max-w-8"
        />
      </div>

      {/* Navigation Items */}
      <nav className="hidden md:flex space-x-6">
        {navLinks.map((item, index) => (
          <Link
            key={index}
            href={`${item.path}`}
            className="text-gray-300 hover:text-[#F8B179] transition-colors duration-300"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Download CV Button */}
      <button className="flex items-center justify-center px-2 py-2 rounded bg-gradient-to-br from-[#F8B179] to-[#FFD1A9] text-sm font-semibold hover:shadow-lg transition-transform duration-300">
        Contact Me{" "}
        <Image
          src={"/icons/contact-me.svg"}
          className="ml-3"
          height={15}
          width={15}
          alt="logo"
        />
      </button>
    </header>
  );
}
