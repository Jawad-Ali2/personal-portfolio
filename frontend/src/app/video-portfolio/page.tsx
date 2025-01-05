"use client";

import { useState } from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type Category = {
  category: string;
  videos: Video[];
};

type Video = {
  id: number;
  src: string;
  thumbnail: string;
};

export default function VideoPortfolio() {
  const videosCategories: Category[] = [
    {
      category: "Reels",
      videos: [
        {
          id: 1,
          src: "https://res.cloudinary.com/dazlvcjmc/video/upload/v1736069608/zy5yy5plxrpxwautno03.mp4",
          thumbnail:
            "https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura.jpg",
        },
        {
          id: 2,
          src: "https://res.cloudinary.com/dazlvcjmc/video/upload/v1735908968/qpp37g2y9osmfa9uhvyg.mp4",
          thumbnail:
            "https://images.unsplash.com/photo-1568721721169-dc9a5b5acf7f?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 3,
          src: "https://res.cloudinary.com/dazlvcjmc/video/upload/v1735908968/qpp37g2y9osmfa9uhvyg.mp4",
          thumbnail:
            "https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura.jpg",
        },
        {
          id: 4,
          src: "https://res.cloudinary.com/dazlvcjmc/video/upload/v1735908968/qpp37g2y9osmfa9uhvyg.mp4",
          thumbnail:
            "https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura.jpg",
        },
        {
          id: 5,
          src: "https://res.cloudinary.com/dazlvcjmc/video/upload/v1735908968/qpp37g2y9osmfa9uhvyg.mp4",
          thumbnail:
            "https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura.jpg",
        },
        {
          id: 6,
          src: "https://res.cloudinary.com/dazlvcjmc/video/upload/v1735908968/qpp37g2y9osmfa9uhvyg.mp4",
          thumbnail:
            "https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura.jpg",
        },
      ],
    },
    {
      category: "Tutorials",
      videos: [
        {
          id: 7,
          src: "https://res.cloudinary.com/dazlvcjmc/video/upload/v1735908968/qpp37g2y9osmfa9uhvyg.mp4",
          thumbnail:
            "https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura.jpg",
        },
        {
          id: 8,
          src: "https://res.cloudinary.com/dazlvcjmc/video/upload/v1735908968/qpp37g2y9osmfa9uhvyg.mp4",
          thumbnail:
            "https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura.jpg",
        },
        {
          id: 9,
          src: "https://res.cloudinary.com/dazlvcjmc/video/upload/v1735908968/qpp37g2y9osmfa9uhvyg.mp4",
          thumbnail:
            "https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura.jpg",
        },
        {
          id: 10,
          src: "https://res.cloudinary.com/dazlvcjmc/video/upload/v1735908968/qpp37g2y9osmfa9uhvyg.mp4",
          thumbnail:
            "https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura.jpg",
        },
        {
          id: 11,
          src: "https://res.cloudinary.com/dazlvcjmc/video/upload/v1735908968/qpp37g2y9osmfa9uhvyg.mp4",
          thumbnail:
            "https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura.jpg",
        },
        {
          id: 12,
          src: "https://res.cloudinary.com/dazlvcjmc/video/upload/v1735908968/qpp37g2y9osmfa9uhvyg.mp4",
          thumbnail:
            "https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura.jpg",
        },
      ],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);

  const openModal = (video: Video) => {
    const videoElement = document.createElement("video"); // Create a temporary video element
    videoElement.src = video.src; // Set the video source

    videoElement.onloadedmetadata = () => {
      setCurrentVideo(video); // Set the video to state
      setIsModalOpen(true); // Open the modal
    };
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

      {videosCategories.map(({ category, videos }) => (
        <div key={category} className="flex flex-col w-full sm:px-24 lg:px-36">
          <h2 className="text-2xl font-bold text-gradient">{category}</h2>

          <Carousel
            opts={{
              align: "start",
              loop: true,
              active: true,
            }}
            className="w-full max-w-max h-max"
          >
            <CarouselContent>
              {videos.map((video) => (
                <CarouselItem
                  key={video.id}
                  className="md:basis-1/2 lg:basis-1/4"
                >
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
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <Image
                        src={"/icons/play.svg"}
                        alt={category}
                        height={50}
                        width={50}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ))}

      {isModalOpen && currentVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative flex justify-center items-center p-4 rounded-lg aspect-container"
            onClick={(e) => e.stopPropagation()}
          >
            <CldVideoPlayer
              src={currentVideo.src}
              logo={false}
              playbackRates={[0.5, 1, 1.5, 2]}
              showJumpControls
              controls={true}
              bigPlayButton={true}
              aspectRatio="16:9"
              pictureInPictureToggle={true}
              allowUsageReport={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
