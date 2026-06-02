import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20">
      {/* Top Section */}
      <div className="text-center">
        {assets.logo && (
          <Image
            src={assets.logo}
            alt="Shweta logo"
            width={150}
            height={150}
            className="w-36 h-auto mx-auto mb-2"
            priority
          />
        )}

        <div className="flex items-center justify-center gap-2">
          {assets.mail_com && (
            <Image
              src={assets.mail_com}
              alt="Email icon"
              width={24}
              height={24}
              className="w-6 h-auto"
            />
          )}

          <a
            href="mailto:shwetalokesh6@gmail.com"
            className="text-gray-700 hover:text-black"
          >
            shwetalokesh6@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between
        border-t border-gray-400 mx-[10%] mt-12 py-6 gap-4"
      >
        <p className="text-sm text-gray-600">
          © 2026 Shweta. All rights reserved.
        </p>

        <ul className="flex items-center gap-6">
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
