"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu } from "./Menu";
import { MenuToggle } from "./MenuToggle";
import TransitionLink from "./TransitionLink";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

// Define types for navigation links
interface NavLink {
  name: string;
  path: string;
}

// Header Component
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-me" },
    { name: "Web Dev", path: "/web-portfolio" },
    { name: "Video Editing", path: "/video-portfolio" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex justify-between md:justify-around items-center px-6 py-4 bg-noise backdrop-blur-sm shadow-md z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={"/JA_svg.svg"}
            height={40}
            width={40}
            alt="logo"
            className="md:max-w-10 max-w-8"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="text-gray-300 hover:text-[#F8B179] transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <button className="hidden md:flex items-center justify-center px-2 py-2 rounded bg-gradient-to-br from-[#F8B179] to-[#FFD1A9] text-sm font-semibold hover:shadow-lg transition-transform duration-300">
          Contact Me{" "}
          <Image
            src={"/icons/contact-me.svg"}
            className="ml-3"
            height={15}
            width={15}
            alt="logo"
          />
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 left-0 h-screen w-[50%] bg-black bg-opacity-80 flex flex-col items-center justify-center transform ${
            isOpen ? "-translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-40`}
          onClick={() => setIsOpen(false)}
        >
          <nav className="text-white text-center">
            <ul className=" flex flex-col gap-10 text-lg">
              {/* <li className="">Portfolio</li>
            <li>About</li>
            <li>Contact</li>
            <li>Search</li> */}
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-gray-300 hover:text-[#F8B179] transition-colors duration-300"
                >
                  <li>{item.name}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </header>
        <ProgressBar
          height="4px"
          color="#F8B179"
          options={{ showSpinner: false }}
          shallowRouting
          
        />

    </>
  );
}
