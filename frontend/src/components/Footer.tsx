import Image from "next/image";

const Footer = () => {
  return (
    <footer className="noise-bg bg-[#161E31] backdrop-blur-md text-white py-6">
      <div className="flex sm:flex-row flex-col sm:gap-0 gap-2 justify-around items-center container mx-auto text-center">
        <p className="sub-text">
          &copy; {new Date().getFullYear()} Jawad Ali. All rights reserved.
        </p>
        <div className="flex items-center sub-text gap-3">
          <p>Built with</p>
          <Image
            src={"/icons/nextjs.svg"}
            alt="nextjs"
            height={20}
            width={20}
          />
          <Image
            src={"/icons/tailwindcss.svg"}
            alt="nextjs"
            height={20}
            width={20}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
