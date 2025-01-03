"use client";

import { useState } from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

type Video = {
  id: number;
  src: string;
  thumbnail: string;
};

export default function VideoPortfolio() {
  const videos: Video[] = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dazlvcjmc/video/upload/v1735908968/qpp37g2y9osmfa9uhvyg.mp4",
      thumbnail: "https://via.placeholder.com/300x200",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);

  const openModal = (video: Video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative group cursor-pointer"
            onClick={() => openModal(video)}
          >
            <img
              src={video.thumbnail}
              alt={"videooo"}
              className="w-full h-48 object-cover rounded-lg group-hover:opacity-75"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && currentVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className=" bg-[#1c2333] rounded-lg p-4 w-[50%] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <CldVideoPlayer
              src={currentVideo.src}
              logo={false}
              playbackRates={[0.5, 1, 1.5, 2]}
              showJumpControls
              className="w-[50%] h-[20%]"
              height={100}
              width={100}
            />
          </div>
        </div>
      )}
    </div>
  );
}
