import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import useThemeSwitcher from "./hook/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} relative 
    group !text-light
    `}
    >
      {title}
      <span
        className={`h-[1px] inline-block
        absolute
        left-0 -bottom-0.5 group-hover:w-full
        transition-[width] ease duration-300
        bg-light
        ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium
    flex justify-between items-center dark:text-light relative bg-navbar
    "
    >
      <button
        className=" flex-col justify-center items-center hidden lg:flex "
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all ease-out duration-300 h-0.5 w-6 rounded-sm mb-1 ${
            isOpen && "scale-x-[100%] rotate-45 mb-0 "
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all ease-out duration-300 h-0.5 w-6 rounded-sm mb-1 ${
            isOpen && "hidden"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all ease-out duration-300 h-0.5 w-6 rounded-sm ${
            isOpen && "scale-x-[100%] -rotate-45 -translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/formation" title="Formation" className="mx-4" />
          <CustomLink href="/activities" title="Activities" className="mx-4" />
          <CustomLink href="/campaign" title="Campaign" className="ml-4" />
          <CustomLink href="/news" title="News" className="ml-4" />
          <CustomLink
            href="/registration"
            title="Registration"
            className="ml-4"
          />
          <CustomLink href="/donate" title="Donate" className="ml-4" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
