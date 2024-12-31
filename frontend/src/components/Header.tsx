import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-around items-center px-6 py-4 bg-noise backdrop-blur-sm shadow-md z-50">
      <div className="flex items-center space-x-2">
        {/* <div className="text-white font-bold text-2xl font-firaCode">JA</div> */}
        <Image src={"/JA_svg.svg"} height={40} width={40} alt="logo" />
      </div>

      {/* Navigation Items */}
      <nav className="hidden md:flex space-x-6">
        {["Home", "About", "Projects"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(" ", "")}`}
            className="text-gray-300 hover:text-[#F8B179] transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Download CV Button */}
      <button className="flex px-4 py-2 rounded bg-gradient-to-br from-[#F8B179] to-[#FFD1A9] text-black font-semibold hover:shadow-lg transition-transform duration-300">
        Contact Me{" "}
        <Image
          src={"/icons/contact-me.svg"}
          className="ml-3"
          height={20}
          width={20}
          alt="logo"
        />
      </button>
    </header>
  );
}
