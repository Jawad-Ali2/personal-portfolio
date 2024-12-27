"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  // noise-bg bg-[#161E31]
  return (
    <div className="flex relative h-screen w-screen noise-bg bg-[#161E31] overflow-hidden p-15 select-none">
      {/* <div className="main-bg text-6xl">HEYY</div>  */}
      <div className="flex-1 text-white items-center justify-center flex m-10 z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <p>👋 Hi! I am</p>
          <h1 className="font-semibold text-5xl my-2 text-[#F8B179] font-firaCode">
            Jawad Ali
          </h1>
          <p className="select-none max-w-96 text-justify">
            software engineer and video editor, combining technical skills with
            creativity to deliver functional websites and dynamic video content.
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
              {/* Icon */}
              <div className="relative z-10">
                <Image
                  src="/icons/code.svg"
                  alt="Website Developer Icon"
                  className="h-16 w-16 p-3 rounded-full bg-gradient-to-br from-[#F8B179] to-[#FFD1A9] shadow-md transition-transform duration-300"
                  height={64}
                  width={64}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col animate-pulse">
                <h3 className="text-2xl font-semibold text-white transition-colors duration-300">
                  Website Developer{" "}
                  <Image
                    src="/icons/external-link.svg"
                    className="inline"
                    alt="Verified Icon"
                    height={20}
                    width={20}
                  />
                </h3>
                <p className="text-gray-300 text-sm">
                  Building intuitive web experiences.
                </p>
              </div>
            </div>

            {/* Left-Aligned Connection Line */}
            <div className="relative">
              <div className="absolute left-[30px] -bottom-[50px] h-28 w-1 rounded-md bg-[#F8B179] z-0"></div>
            </div>

            {/* Video Editing Section */}
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="relative z-10">
                <Image
                  src="/icons/video-editing.svg"
                  alt="Video Editing Icon"
                  className="h-16 w-16 p-3 rounded-full bg-gradient-to-br from-[#F8B179] to-[#FFD1A9] shadow-md transition-transform duration-300"
                  height={64}
                  width={64}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col animate-pulse">
                <h3 className="text-2xl font-semibold text-white transition-colors duration-300">
                  Video Editing{" "}
                  <Image
                    src="/icons/external-link.svg"
                    className="inline"
                    alt="External Link"
                    height={20}
                    width={20}
                  />
                </h3>
                <p className="text-gray-300 text-sm">
                  Crafting engaging visual stories.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="flex flex-col flex-1 text-white items-center justify-center"
      >
        <Image
          className="feathered select-none rounded-md z-100"
          src={"../myself.jpg"}
          alt="pic"
          height={400}
          width={400}
        />

        <div className="flex m-2 space-x-2">
          <button className="flex-grow border-2 py-2 px-24 rounded-md border-[#F8B179] border-dashed">
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
      {/* <div
      className="flex flex-1 absolute inset-0 bg-cover bg-center  group-hover:brightness-75 transition-all duration-500"
      style={{ backgroundImage: "url('/Untitled-1.png')" }}
      ></div> */}
    </div>
    // <div className="relative flex h-screen w-screen">
    //   {/* Web Development Section */}
    //   <div className="group relative flex flex-1 items-center justify-center bg-blue-600 transition-all duration-500 ease-in-out hover:flex-[1.5]">
    //     <div className="absolute inset-0 bg-cover bg-center opacity-10 bg-black group-hover:opacity-100 transition-all duration-500"></div>
    //     <Link href={"/web-development"}>
    //       <div
    //         className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:blur-none blur-[2px] group-hover:brightness-75 transition-all duration-500"
    //         style={{ backgroundImage: "url('/web-dev-bg.jpeg')" }}
    //       ></div>
    //       <div className="flex flex-col text-center ">
    //         <h2 className="z-10 [text-shadow:_0_2px_4px_rgb(0_0_0_/_1)] group-hover:inline text-2xl font-bold text-white md:text-4xl select-none transition-all duration-700 ease-in-out group-hover:translate-y-0 transform translate-y-[3rem]">
    //           Web Development
    //         </h2>
    //         <p className="z-10 text-justify text-white group-hover:inline md:text-lg select-none max-w-md [text-shadow:_0_2px_4px_rgb(0_0_0_/_1)] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-4">
    //           Crafting seamless web experiences that bring ideas to life. Code,
    //           design, deliver
    //         </p>
    //       </div>
    //     </Link>
    //   </div>

    //   {/* Video Editing Section */}
    //   <div className="group relative flex flex-1 items-center justify-center bg-purple-600 transition-all duration-500 ease-in-out hover:flex-[1.5]">
    //     <div className="absolute inset-0 bg-cover bg-center opacity-10 bg-black group-hover:opacity-100 transition-all duration-500"></div>
    //     <Link href={"/web-development"}>
    //       <div
    //         className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:blur-none blur-[2px] group-hover:brightness-75 transition-all duration-500"
    //         style={{ backgroundImage: "url('/video-editing-bg.jpeg')" }}
    //       ></div>
    //       <div className="flex flex-col text-center ">
    //         <h2 className="z-10 [text-shadow:_0_2px_4px_rgb(0_0_0_/_1)] group-hover:inline text-2xl font-bold text-white md:text-4xl select-none transition-all duration-700 ease-in-out group-hover:translate-y-0 transform translate-y-[3rem]">
    //           Video Editing
    //         </h2>
    //         <p className="z-10 text-justify text-white group-hover:inline md:text-lg select-none max-w-md [text-shadow:_0_2px_4px_rgb(0_0_0_/_1)] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-4">
    //           Transforming moments into cinematic masterpieces. Let's create
    //           visuals that inspire
    //         </p>
    //       </div>
    //     </Link>
    //   </div>
    // </div>
  );
}
