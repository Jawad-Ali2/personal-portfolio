"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WebPortfolio() {
  const projects = [
    {
      title: "Trivia Master",
      description: "An online multiplayer trivia game with private rooms.",
      image: "/projects/trivia-master.svg",
      stack: ["nextjs", "nestjs", "typescript", "tailwindcss", "socketio"],
      link: "https://trivia-app-bay.vercel.app/",
      github: "https://github.com/Jawad-Ali2/type-rivals",
    },
    {
      title: "Type Rivals",
      description: "An online multiplayer typing practice game.",
      image: "/projects/type-rivals.png",
      stack: [
        "reactjs",
        "expressjs",
        "nodejs",
        "typescript",
        "tailwindcss",
        "socketio",
      ],
      link: "https://type-rivals.vercel.app/",
      github: "https://github.com/Jawad-Ali2/type-rivals",
    },
    {
      title: "Karved",
      description: "A product catalog website",
      image: "/projects/karved-white.png",
      stack: ["reactjs", "expressjs", "nodejs", "tailwindcss"],
      link: "https://karved.vercel.app/",
      github: "https://github.com/Jawad-Ali2/type-rivals",
    },
    {
      title: "Spectrum Core",
      badge: "Discarded",
      description: "An e-commerce startup project with unique features.",
      stack: [
        "nextjs",
        "expressjs",
        "nodejs",
        "typescript",
        "tailwindcss",
        "socketio",
      ],
      image: "/projects/spectrum-core.png",
      link: null,
      github: null,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center noise-bg bg-[#161E31] lg:px-40 px-20 text-white min-h-screen overflow-hidden">
      <div className="flex flex-col items-start pt-28 sm:pb-14 pb-10 sm:px-10 xl:px-32 sm:space-y-2">
        <h1 className="main-heading font-bold font-firaCode text-gradient">
          Projects
        </h1>
        <p className="text-justify max-w-full text-gray-300 sub-text text-pretty">
          I've worked on tons of little projects over the years but these are
          the ones that I'm most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas on how it can be improved.
        </p>
      </div>
      <p className="text-slate-400 text-left">
        Hover over the cards to see tech stacks used
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:px-20 px-10">
        {projects.map((project, index) => (
          <HoverCard openDelay={100} key={index}>
            <HoverCardTrigger>
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:space-x-4 noise-bg backdrop-blur-sm p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {project.badge && (
                  <span
                    className={`bg-yellow-900 sm:hidden text-white text-xs mb-2 font-medium text-[0.6rem] px-2.5 py-0.5 rounded`}
                  >
                    {project.badge}
                  </span>
                )}
                <Image
                  src={project.image}
                  width={100}
                  height={100}
                  alt={project.title}
                  className="object-cover sm:max-w-32 max-w-16 rounded-md bg-gradient-to-b from-gray-900/20 to-gray-800/20"
                />
                <div>
                  {project?.link ? (
                    <Link href={project.link} target="_blank">
                      <h2 className="sm:flex sm:items-center sm:text-left text-center text-pretty text-xl font-semibold text-orange-300 sub-heading line font-firaCode underline">
                        {project.title}
                      </h2>
                    </Link>
                  ) : (
                    <h2 className="sm:flex sm:items-center sm:text-left text-center text-pretty text-xl font-semibold text-orange-300 sub-heading line font-firaCode">
                      {project.title}
                      {project.badge && (
                        <span
                          className={`bg-yellow-900 sm:inline hidden text-white text-xs sm:mb-0 mb-2 sm:ml-2 font-medium text-[0.6rem] px-2.5 py-0.5 rounded`}
                        >
                          {project.badge}
                        </span>
                      )}
                    </h2>
                  )}
                  <p className="text-gray-400 sub-text text-justify">
                    {project.description}
                  </p>

                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className={`text-blue-400 sub-text hover:underline mt-2 block ${
                        project.badge === "Discarded" ? "hidden" : ""
                      }`}
                    >
                      <Image
                        src={"/icons/github.svg"}
                        alt="github link"
                        width={20}
                        height={20}
                      />
                    </Link>
                  )}
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="absolute z-50 top-0 sm:-left-48 -left-40 bg-[#161E31]/50 backdrop-blur-lg rounded-lg sm:p-4 p-2 shadow-lg">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1.25, bounce: 0.5 }}
                className="relative top-0 left-0 sm:w-full h-full flex justify-center items-center"
              >
                {project.stack.map((tech, index) => (
                  <motion.div
                    initial={{ rotate: 50, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ delay: index * 0.15 }}
                    key={index}
                    className="flex items-center justify-center p-2 rounded-md sm:m-2 m-1 hover:shadow-[0_4px_30px_rgba(255,192,138,0.6)]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image
                      src={`/icons/${tech}.svg`}
                      width={50}
                      height={50}
                      alt={project.title}
                      className="object-cover sm:max-w-32 max-w-9 rounded-md"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}
