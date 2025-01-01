"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { useState } from "react";

export default function Home() {
  const [year, setYear] = useState(new Date().getFullYear());

  const changeYear = (newYear : number) => setYear(newYear);

  return (
    <div className="flex flex-col justify-center items-center relative min-h-screen w-full noise-bg bg-[#161E31] select-none space-y-20 py-10">
      {/* Main Content Section */}
      <div className="flex md:flex-row flex-col-reverse items-center lg:space-x-28 space-y-20 sm:space-y-10 md:space-y-24 md:gap-0 gap-10">
        {/* Introduction Section */}
        <div className="text-white md:px-10 md:pt-24 md:m-0 z-10 max-w-xl">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <p className="sub-text">👋 Hi! I am</p>
            <h1 className="main-heading my-2 text-gradient font-firaCode">
              Jawad Ali
            </h1>
            <p className="select-none sub-text sm:max-w-md max-w-72 text-justify">
              Software engineer and video editor, combining technical skills
              with creativity to deliver functional websites and dynamic video
              content.
            </p>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "90%" }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <hr className="my-10 md:my-6 lg:my-10" />
            </motion.div>
            <div className="relative flex flex-col items-start gap-6">
              {/* Web Developer Section */}
              <div className="flex items-center sm:gap-4 gap-2">
                <div className="relative z-10">
                  <Image
                    src="/icons/code.svg"
                    alt="Website Developer Icon"
                    className="sm:h-16 sm:w-16 h-12 w-12 p-3 rounded-full bg-gradient-to-br from-[#F8B179] to-[#FFD1A9] shadow-md transition-transform duration-300"
                    height={64}
                    width={64}
                  />
                </div>
                <div className="flex flex-col animate-pulse">
                  <h3 className="sub-heading text-white">
                    Website Developer{" "}
                    <Image
                      src="/icons/external-link.svg"
                      className="inline sm:max-w-none max-w-3"
                      alt="External Link"
                      height={20}
                      width={20}
                    />
                  </h3>
                  <p className="text-gray-300 sub-text">
                    Building intuitive web experiences.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute sm:left-[30px] left-[22px] -bottom-[55px] h-24 w-1 rounded-md bg-[#F8B179] z-0"></div>
              </div>
              {/* Video Editing Section */}
              <div className="flex items-center gap-4">
                <div className="relative z-10">
                  <Image
                    src="/icons/video-editing.svg"
                    alt="Video Editing Icon"
                    className="sm:h-16 sm:w-16 h-12 w-12 p-3 rounded-full bg-gradient-to-br from-[#F8B179] to-[#FFD1A9] shadow-md transition-transform duration-300"
                    height={64}
                    width={64}
                  />
                </div>
                <div className="flex flex-col animate-pulse">
                  <h3 className="sub-heading text-white">
                    Video Editing{" "}
                    <Image
                      src="/icons/external-link.svg"
                      className="inline sm:max-w-none max-w-3"
                      alt="External Link"
                      height={20}
                      width={20}
                    />
                  </h3>
                  <p className="text-gray-300 sub-text">
                    Crafting engaging visual stories.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="flex flex-col text-white sm:pt-16 items-center justify-center"
        >
          <Image
            className="select-none rounded-md z-100 lg:max-w-lg sm:max-w-[19rem] max-w-64 md:mr-10"
            src={"/myself.jpg"}
            alt="pic"
            height={400}
            width={400}
          />
          <div className="flex m-2 space-x-2">
            <button className="border-2 lg:px-20 sm:px-16 px-10 sub-text rounded-md border-[#F8B179] border-dashed">
              View Resume
            </button>
            <button className="">
              <Image
                src={"/icons/download.svg"}
                alt={"download-button"}
                height={50}
                width={50}
              />
            </button>
          </div>
        </motion.div>
      </div>

      {/* GitHub Calendar */}
      <div className="flex flex-col justify-center items-center text-white w-full px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 font-firaCode text-gradient text-center">
          My GitHub Contributions
        </h2>

        {/* Year Selection Buttons */}
        <div className="flex space-x-2 sm:space-x-4 mb-6 justify-center">
          {[2025, 2024, 2023].map((yr) => (
            <button
              key={yr}
              onClick={() => changeYear(yr)}
              className={`px-3 sm:px-4 py-2 rounded  ${
                year === yr
                  ? "bg-gradient-to-br from-[#F8B179] to-[#FFD1A9] text-black"
                  : "bg-gray-700"
              } hover:bg-[#F8B179] hover:text-black`}
            >
              {yr}
            </button>
          ))}
        </div>

        {/* Responsive GitHub Calendar */}
        <div className="w-full max-w-4xl m-auto md:px-6 ">
          <GitHubCalendar
            username="Jawad-Ali2"
            colorScheme="dark"
            year={year}
            theme={{
              light: ["#ff5f6d", "#ffc3a0"],
              dark: ["#333333", "#ff9f00"],
            }}
          />
        </div>
      </div>
    </div>
  );
}
