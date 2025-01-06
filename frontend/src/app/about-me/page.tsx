import Image from "next/image";
import React from "react";

export default function AboutMe() {
  const technologies = [
    { name: "React.js - UI Library", icon: "/icons/reactjs.svg" },
    { name: "Next.js - React Framework", icon: "/icons/nextjs.svg" },
    // {
    //   name: "Redux - Production-grade State Management",
    //   icon: "/icons/tech.svg",
    // },
    {
      name: "Zustand - Lightweight State Management for personal projects",
      icon: "/icons/zustand.svg",
    },
    { name: "Tailwind CSS - Styling Library", icon: "/icons/tailwindcss.svg" },
    {
      name: "TypeScript - Superset of JavaScript",
      icon: "/icons/typescript.svg",
    },
    { name: "Python - Programming Language", icon: "/icons/python.svg" },
    { name: "Java - Programming Language", icon: "/icons/java.svg" },
    { name: "C++ - Programming Language", icon: "/icons/cpp.svg" },
  ];

  const tools = [
    { name: "Visual Studio Code - Text Editor", icon: "/icons/vs-code.svg" },
    { name: "PyCharm - Python IDE", icon: "/icons/pycharm.svg" },
    { name: "IntelliJ IDEA - Java IDE", icon: "/icons/intellij.svg" },
    { name: "Google Chrome - Web Browser", icon: "/icons/chrome.svg" },
    { name: "Figma - Design Tool", icon: "/icons/figma.svg" },
    { name: "After Effects - Video Editing Tool", icon: "/icons/ae.svg" },
    { name: "Premiere Pro - Video Editing Tool", icon: "/icons/pr.svg" },
  ];

  const platforms = [
    {
      name: "GitHub - Version control and hosting service",
      icon: "/icons/github.svg",
    },
    { name: "Steam - Gaming", icon: "/icons/steam.svg" },
    { name: "Spotify - Music Streaming", icon: "/icons/spotify.svg" },
    { name: "Vercel - Hosting and Database", icon: "/icons/vercel.svg" },
  ];

  return (
    <div className="noise-bg2 bg-[#161E31] text-[#e0e0e0] font-roboto">
      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-10">
        <section className="mb-10 pt-28">
          <h1 className="sm:text-4xl text-3xl font-bold font-firaCode text-white leading-snug tracking-tight">
            I’m <span className="text-gradient">Jawad Ali</span>, a website
            designer and video editor from
            <span className="text-gradient"> Pakistan</span>.
          </h1>

          <p className="sm:text-lg text-sm font-roboto py-2">
            A snapshot of who I am, what I do, and a few quirks that make me
            unique!
          </p>
        </section>
        <section className="mb-10">
          <h2 className="main-heading2 font-bold font-firaCode text-gradient mb-4">
            Student Life
          </h2>
          <p className="sm:text-lg text-sm">
            I am currently pursuing a degree in{" "}
            <span className="text-[#ffd1a9] font-bold">
              Software Engineering
            </span>{" "}
            with a stellar{" "}
            <span className="text-[#ffd1a9] font-bold">3.6+ CGPA</span>.
            Balancing academics with my other interests has been a journey, but
            it’s one I’ve thoroughly enjoyed.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="main-heading2 font-bold font-firaCode text-gradient mb-4">
            Professional Experience
          </h2>
          <p className="sm:text-lg text-sm">
            I’ve been a{" "}
            <span className="text-[#ffd1a9] font-bold">
              Freelance Video Editor
            </span>{" "}
            for over 2 years, honing my craft to bring stories to life through
            compelling visuals. When I’m not piecing together footage, I dive
            into{" "}
            <span className="text-[#ffd1a9] font-bold">Web Development</span>,
            where I create seamless, user-friendly experiences on the web.
          </p>
          <p className="italic text-gray-400 mt-2 sm:text-lg text-sm">
            Fun Fact: I once spent an hour debugging only to find out the
            problem was a missing semicolon. Classic developer moment!
          </p>
        </section>

        <section className="mb-10">
          <h2 className="main-heading2 font-bold font-firaCode text-gradient mb-4">
            Skills
          </h2>
          <ul className="list-disc list-inside space-y-2 sm:text-lg text-sm">
            <li>Video Editing (Adobe Premiere Pro, After Effects)</li>
            <li>Web Development (JavaScript, React, Next.js, Node.js)</li>
            <li>Creative Problem Solving</li>
            <li>
              Time Management (also known as "How to finish everything 5 minutes
              before the deadline")
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="main-heading2 font-bold font-firaCode text-gradient mb-4">
            Soft Skills
          </h2>
          <ul className="list-disc list-inside space-y-2 font-roboto sm:text-lg text-sm">
            <li>
              <strong className="tracking-wider">
                Independence and Initiative:
              </strong>
              <span className="text-gray-400">
                {" "}
                I’m accustomed to working with minimal supervision, ensuring
                tasks and projects are completed efficiently. This allows me to
                meet deadlines while sparing others the need to closely oversee
                my work.
              </span>
            </li>
            <li>
              <strong className="tracking-wider">Attention to Detail:</strong>
              <span className="text-gray-400">
                {" "}
                I thrive on creating designs and user interfaces with precision
                and care, ensuring every element is polished to perfection. For
                me, quality always takes precedence over quantity.{" "}
              </span>
            </li>
            <li>
              <strong className="tracking-wider">
                Self-Motivation and Discipline:
              </strong>
              <span className="text-gray-400">
                {" "}
                My self-motivation and disciplined approach to work mean I can
                tackle any task independently, whether it’s a long-term project
                or something that needs urgent attention.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="main-heading2 font-bold font-firaCode text-gradient mb-4">
            Who Am I Outside of Work?
          </h2>
          <p className="font-roboto sm:text-lg text-sm">
            Outside of my professional life, I enjoy exploring new technologies,
            binge-watching sci-fi series, and perfecting the art of making
            instant noodles (an essential student skill).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold font-firaCode text-gradient mb-4">
            Usage
          </h2>
          <p className="sm:text-lg text-sm">
            Tools, technologies, and gadgets I rely on daily to design, develop,
            and deliver. Here’s a snapshot of my tech stack and gear:
          </p>
          <section className="mb-10">
            <h3 className="text-xl font-semibold font-firaCode text-gradient mt-6 mb-2">
              Technologies
            </h3>
            <ul className="list-disc list-inside space-y-2 font-roboto sm:text-lg text-sm">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    height={20}
                    width={20}
                  />
                  {tech.name}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-6 font-firaCode text-gradient mb-2">
              Tools
            </h3>
            <ul className="list-disc list-inside space-y-2 font-roboto sm:text-lg text-sm">
              {tools.map((tool, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    height={20}
                    width={20}
                  />
                  {tool.name}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold font-firaCode text-gradient mt-6 mb-2">
              Platforms
            </h3>
            <ul className="list-disc list-inside space-y-2 font-roboto sm:text-lg text-sm">
              {platforms.map((platform, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Image
                    src={platform.icon}
                    alt={platform.name}
                    height={20}
                    width={20}
                  />
                  {platform.name}
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section>
          <h2 className="main-heading2 font-bold font-firaCode text-gradient mb-4">Looking Ahead</h2>
          <p className="font-roboto sm:text-lg text-sm">
            As I continue to grow, I aim to blend my technical expertise with
            creativity, making an impact both on the screen and on the web. If
            you’re curious about my work or have a cool project in mind, let’s
            connect!
          </p>
        </section>
      </main>
    </div>
  );
}
