"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full noise-bg bg-[#161E31] select-none pt-12">
      {/* Main Content Section */}
      <div className="flex md:flex-row flex-col-reverse items-center m-auto space-y-6 md:space-y-24">
        {/* Introduction Section */}
        <div className="flex-1 text-white md:mt-0 m-10 items-start justify-center flex z-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <p className="sub-text">👋 Hi! I am</p>
            <h1 className="main-heading my-2 text-[#F8B179] font-firaCode">
              Jawad Ali
            </h1>
            <p className="select-none sub-text sm:max-w-96 max-w-72 text-justify">
              Software engineer and video editor, combining technical skills
              with creativity to deliver functional websites and dynamic video
              content.
            </p>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "90%" }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <hr className="my-10" />
            </motion.div>
            <div className="relative flex flex-col items-start gap-12">
              {/* Web Developer Section */}
              <div className="flex items-center gap-4">
                <div className="relative z-10">
                  <Image
                    src="/icons/code.svg"
                    alt="Website Developer Icon"
                    className="sm:h-16 sm:w-16 h-14 w-14 p-3 rounded-full bg-gradient-to-br from-[#F8B179] to-[#FFD1A9] shadow-md transition-transform duration-300"
                    height={64}
                    width={64}
                  />
                </div>
                <div className="flex flex-col animate-pulse">
                  <h3 className="sub-heading text-white ">
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
                <div className="absolute sm:left-[30px] left-[26.5px] -bottom-[50px] h-28 w-1 rounded-md bg-[#F8B179] z-0"></div>
              </div>
              {/* Video Editing Section */}
              <div className="flex items-center gap-4">
                <div className="relative z-10">
                  <Image
                    src="/icons/video-editing.svg"
                    alt="Video Editing Icon"
                    className="sm:h-16 sm:w-16 h-14 w-14 p-3 rounded-full bg-gradient-to-br from-[#F8B179] to-[#FFD1A9] shadow-md transition-transform duration-300"
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
          className="flex flex-col flex-1 text-white items-center justify-center"
        >
          <Image
            className="select-none rounded-md z-100 sm:max-w-lg max-w-64"
            src={"/myself.jpg"}
            alt="pic"
            height={400}
            width={400}
          />
          <div className="flex m-2 space-x-2">
            <button className="border-2 sm:px-24 px-10 sub-text rounded-md border-[#F8B179] border-dashed">
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

      {/* Additional Content Section
      <div className="mt-12 text-center space-y-20">
        <h2 className="text-3xl font-bold text-[#F8B179]">More About Me</h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          I am passionate about delivering solutions that merge functionality
          with visual appeal. Always eager to learn and grow!
        </p>
      </div> */}
    </div>
  );
}
