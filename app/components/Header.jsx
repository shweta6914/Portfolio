import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="w-11/12 max-w-3xl mx-auto h-screen
      flex flex-col items-center justify-center
      text-center gap-4"
    >
      {/* Profile Image */}
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
        transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      >
        <Image
          src={assets.profile_img}
          alt="Shweta profile"
          width={140}
          height={140}
          className="rounded-full object-cover mx-auto border-4 border-white shadow-lg"
          priority
        />
      </motion.div>

      {/* Greeting */}
      <h3 className="flex items-center gap-2 text-xl md:text-2xl font-Ovo">
        Hi! I'm Shweta

        <Image
          src={assets.hand_icon}
          alt="hand icon"
          width={24}
          height={24}
          className="w-6 h-auto"
        />
      </h3>

      {/* Heading */}
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        MERN Stack Developer.
      </h1>

      {/* Description */}
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a MERN stack developer from CBEES Pharma,
        with 6 months of internship experience in
        React.js, Node.js, and Express.js.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Contact Button */}
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full
          bg-black text-white flex items-center gap-2"
        >
          Contact Me

          <Image
            src={assets.right_arrow_white}
            alt="right arrow"
            width={16}
            height={16}
            className="w-4 h-auto"
          />
        </a>

        {/* Resume Button */}
        <a
          href="/Shweta.Resume.docx"
          download
          className="px-10 py-3 border rounded-full border-gray-500
          flex items-center gap-2"
        >
          My Resume

          <Image
            src={assets.download_icon}
            alt="download icon"
            width={16}
            height={16}
            className="w-4 h-auto"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;