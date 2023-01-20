import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import menu from "../assets/images/textalign-left.svg";
import close from "../assets/images/close.svg";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <section className="bg-[#FDEBEA] w-full pt-8 pb-20">
      <header className=" px-6 md:px-32 bg-[#FDEBEA] rounded-lg  mx-auto ">
        <article className="flex justify-between items-center w-full container mx-auto sticky ">
          <div className="hidden lg:flex  items-center gap-2">
            <img src={logo} alt="logo" />
            <span className="text-accent font-bold cursor-default">
              e-learning
            </span>
          </div>

          {/* mobile menu */}

          <div className="lg:hidden cursor-pointer">
            <img
              src={menu}
              alt="menu"
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          </div>

          {/* end mobile menu */}

          <nav className="hidden lg:block">
            <ul className="flex gap-8 font-semibold text-myblack">
              <li>
                <a href="#" className="text-accent">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Articles</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3 lg:gap-7">
            <a
              href="#"
              className="text-accent text-sm lg:text-base lg:font-semibold"
            >
              Login
            </a>
            <a
              href="#"
              className="rounded-lg bg-accent text-secondary text-sm lg:text-base p-2 lg:px-4 lg:py-3"
            >
              Sign Up For Free
            </a>
          </div>
        </article>
      </header>

      <div
        className={`bg-primary mobilemenu w-10/12 sm:w-1/2 md:w-1/2 p-3 fixed top-0 ${
          mobileMenu ? "left-0" : "-left-[100%]"
        } h-full overflow-y-scroll transition-all duration-300 lg:hidden`}
      >
        <div className="flex items-center justify-between border-b-2 border-accent py-2">
          <div className="flex items-center gap-4">
            <img src={logo} alt="logo" />
            <span className="text-accent font-bold">e-learning</span>
          </div>
          <img
            className="cursor-pointer"
            src={close}
            alt="close"
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        </div>
        <nav className="mt-8">
          <ul className="flex flex-col gap-5 font-semibold text-myblack">
            <li>
              <a href="#" className="text-accent">
                Home
              </a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
