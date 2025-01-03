"use client";
import Video from "next-video";
import reel from "/videos/greatestt things in life.mp4";

export default function VideoPortfolio() {
  return (
    <div className="flex flex-col justify-center items-center noise-bg bg-[#161E31] lg:px-40 px-20 text-white min-h-screen">
      <div className="flex flex-col items-start pt-28 sm:pb-14 pb-10 sm:px-24 lg:px-36 sm:space-y-2">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:px-20 px-10">
        {/* <Video src={reel} /> */}
        <Video src={"https://res.cloudinary.com/dazlvcjmc/video/upload/v1735908968/qpp37g2y9osmfa9uhvyg.mp4"} />
      </div>
    </div>
  );
}
