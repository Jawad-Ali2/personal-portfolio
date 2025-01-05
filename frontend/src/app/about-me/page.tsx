import Image from "next/image";
import React from "react";

const AboutMePage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center noise-bg bg-[#161E31] text-white text-center">
      <Image
        priority
        height={200}
        width={200}
        className="mx-auto"
        src="/icons/under-construction.svg"
        alt="Under Construction"
      />
      <h2 className="sub-heading">Page Under Construction 🫡</h2>
    </div>
  );
};

export default AboutMePage;
