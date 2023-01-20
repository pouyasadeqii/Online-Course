import React from "react";
import programming1 from "../assets/images/programming1.jpg";
import clock from "../assets/images/clock.svg";
import people from "../assets/images/people.svg";
import book from "../assets/images/book.svg";
import person from "../assets/images/person.png";


const PopularCourses = () => {
  return (
    <section className="w-full pt-10 bg-primary">
      <article className="px-6 md:px-32">
        <section className="flex flex-col lg:flex-row lg:justify-between gap-y-6 justify-center items-center pb-10">
          <h2 className="font-bold text-3xl lg:text-4xl">Popular Courses</h2>
          <div className="flex gap-x-6 lg:gap-0 flex-wrap justify-center">
            <span className="px-4 lg:px-6 py-2 bg-[#e3e3e3] cursor-pointer rounded-lg">
              All
            </span>
            <span className="lg:px-6 py-2 bg-transparent cursor-pointer rounded-lg">
              Design
            </span>
            <span className="lg:px-6 py-2 bg-transparent cursor-pointer rounded-lg">
              Programming
            </span>
            <span className="lg:px-6 py-2 bg-transparent cursor-pointer rounded-lg">
              Business
            </span>
          </div>
        </section>

        <section className="overflow-scroll flex items-center gap-5 ">
          <section className="w-[300px]  bg-secondary rounded-2xl overflow-hidden">
            <div className="relative">
              <img src={programming1} alt="programming" />
              <span className="px-3 inline-block py-1 bg-white text-[#00a946] rounded absolute top-6 right-3">
                programming
              </span>
            </div>
            <h3 className="mt-5 mb-5 pl-4 font-bold">Frontend Developer</h3>

            <div className="pb-5 mx-4 flex justify-between gap-4 border-b-2 border-dashed border-b-[#e3e3e3]">
              <div className="flex gap-1">
                <img src={clock} alt="clock" />
                <span className="text-[11px] text-mygray">4 hr 30 min</span>
              </div>
              <div className="flex gap-1">
                <img src={people} alt="people" />
                <span className="text-[11px] text-mygray">52 Students</span>
              </div>
              <div className="flex gap-1">
                <img src={book} alt="book" />
                <span className="text-[11px] text-mygray">10 Chapter</span>
              </div>
            </div>

            <section className="pt-4 pb-4 mx-4 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <img src={person} alt="person" />
                    <span className="text-xs text-myblack">Monica geller</span>
                </div>

                <span className="font-semibold text-sm text-myblack">120.99 $</span>
                
            </section>
          </section>
          
        </section>
      </article>
    </section>
  );
};

export default PopularCourses;
