"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setScroll] = useState(false);

  const sideMenuRef = useRef(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.right = "-16rem";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="Background"
          width={1200}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between 
        px-5 lg:px-8 xl:px-[8%] py-4 z-50 transition-all duration-300
        ${isScroll
            ? "bg-white/80 backdrop-blur-lg shadow-sm"
            : "bg-white/50 backdrop-blur-md"
          }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={assets.logo}
            alt="Logo"
            width={112}
            height={40}
            className="w-28 h-auto cursor-pointer"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50"
            }`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>

          <li>
            <a className="font-Ovo" href="#about">
              About Me
            </a>
          </li>

          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>

          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>

          <li>
            <a className="font-Ovo" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>

       <div className="flex items-center gap-4">

  {/* Dark Mode Icon */}
  <button onClick={() => setIsDarkMode((prev) => !prev)}>
    <Image
  src={assets.moon_icon}
  alt="moon"
  width={24}
  height={24}
  className="w-6 h-auto"
/>
</button>


          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 
            border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact

            <Image
              src={assets.arrow_icon}
              alt="Arrow"
              width={12}
              height={12}
              className="h-6 w-auto"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden ml-3"
            onClick={openMenu}
          >
            <Image
              src={assets.menu_black}
              alt="Menu"
              width={24}
              height={24}
              className="w-6 h-auto"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-20 px-10 fixed 
          top-0 bottom-0 right-[-16rem] w-64 h-screen bg-rose-50 
          z-50 transition-all duration-500"
        >
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute right-6 top-6"
          >
            <Image
              src={assets.close_black}
              alt="Close"
              width={20}
              height={20}
              className="w-5 h-auto cursor-pointer"
            />
          </button>

          <li>
            <a
              href="#top"
              onClick={closeMenu}
              className="font-Ovo"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={closeMenu}
              className="font-Ovo"
            >
              About Me
            </a>
          </li>

          <li>
            <a
              href="#services"
              onClick={closeMenu}
              className="font-Ovo"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#work"
              onClick={closeMenu}
              className="font-Ovo"
            >
              My Work
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="font-Ovo"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;