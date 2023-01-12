import React from "react";
import search from "../assets/images/search.svg";
import girl from "../assets/images/girl-purple.png";

const MainContent = () => {
  return (
    <section className="bg-[#FDEBEA] w-full pb-20">
      <div className="px-6 md:px-32 bg-[#FDEBEA] grid grid-cols-1 lg:grid-cols-2 justify-items-center  lg:justify-items-start gap-6">
        <div className="flex flex-col items-center lg:items-start justify-center gap-16">
          <h1 className="font-bold text-center lg:text-start text-4xl lg:text-5xl xl:text-6xl text-myblack xl:leading-snug">
            Access To Many <span className="text-accent">Online</span> Courses
            With E-Learning
          </h1>
          <p className="text-mygray text-lg lg:text-xl text-center lg:text-start">
            You Can Access To More Than 1000 Online Course Here And Grow Your
            Ability.
          </p>
          <div className="flex rounded-lg overflow-hidden">
            <input className="border-0 outline-0 pl-6 py-3 pr-3 sm:pr-14 lg:pr-16 xl:pr-52 lg:text-xl" type="text" placeholder="Search Your Favorite Course..." />
            <img
              src={search}
              alt="search"
              className="bg-accent rounded-tr-lg rounded-br-lg px-4 py-3 lg:px-5  lg:py-4"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
            <img src={girl} alt="girl" />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
