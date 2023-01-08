import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <section className="bg-[#FDEBEA] w-full h-[815px] pt-8">
      <header className="container max-w-[1180px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" />
          <span className="text-accent font-bold">e-learning</span>
        </div>

        <nav>
          <ul className="flex gap-8 font-semibold text-myblack">
            <li>
              <a href="#" className="text-accent" >Home</a>
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

        <div className="flex items-center gap-7">
          <a href="#" className="text-accent font-semibold">Login</a>
          <a href="#" className="rounded-lg bg-accent text-secondary px-4 py-3">Sign Up For Free</a>
        </div>
      </header>
    </section>
  );
};

export default Header;
