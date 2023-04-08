import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg md:text-base sm:text-sm dark:text-light dark:border-light ">
      <Layout className="py-8 flex items-center justify-between  md:flex md:flex-col md:first-of-type:pt-3 md:last-of-type:pb-3 ">
        <span>2023 &copy; All Right Reserved</span>
        <Link href="/">by Mostofa Reza</Link>
        <Link href="/mailto:mostofa.reza3@gmail.com">Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
