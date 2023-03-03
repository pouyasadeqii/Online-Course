import React from "react";
import programming1 from "../assets/images/programming3.png";
import programming2 from "../assets/images/programming2.png";
import graphic from "../assets/images/graphic.png";
import design from "../assets/images/design.png";
import clock from "../assets/images/clock.svg";
import people from "../assets/images/people.svg";
import book from "../assets/images/book.svg";
import person from "../assets/images/person.png";

const PopularCourses = () => {
  return (
    <section className="w-full pt-10 bg-primary mb-24" id="courses">
      <div className="px-6 md:px-32">
        {/* popular header */}

        <div className="flex flex-col lg:flex-row lg:justify-between gap-y-6 justify-center items-center pb-10">
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
        </div>

        {/* popualr body */}

        <div className="flex items-center gap-5 w-full overflow-scroll pb-4 xl:overflow-hidden">
          <div className="w-[280px] flex-shrink-0 xl:flex-shrink xl:w-full bg-secondary rounded-2xl overflow-hidden">
            <div className="relative overflow-hidden">
              <img src={programming1} alt="programming" className="transition-transform duration-300 hover:scale-110 h-[156px] rounded-t-2xl overflow-hidden " />
              <span className="px-3 inline-block py-1 bg-white text-[#00a946] rounded absolute top-6 right-3">
                programming
              </span>
            </div>
            <h3 className="mt-5 mb-5 pl-4 font-bold">Frontend Developer</h3>

            <div className="pb-5 mx-4 flex flex-wrap justify-between gap-4 lg:gap-1 border-b-2 border-dashed border-b-[#e3e3e3]">
              <div className="flex gap-1">
                <img src={clock} alt="clock" />
                <span className="text-[10px] text-mygray">4 hr 30 min</span>
              </div>
              <div className="flex gap-1">
                <img src={people} alt="people" />
                <span className="text-[10px] text-mygray">52 Students</span>
              </div>
              <div className="flex gap-1">
                <img src={book} alt="book" />
                <span className="text-[10px] text-mygray">10 Chapter</span>
              </div>
            </div>

            <div className="pt-4 pb-4 mx-4 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img src={person} alt="person" />
                <span className="text-xs text-myblack">Monica geller</span>
              </div>

              <span className="font-semibold text-sm text-myblack">
                120.99 $
              </span>
            </div>
          </div>
          <div className="w-[280px] flex-shrink-0 xl:flex-shrink xl:w-full  bg-secondary rounded-2xl overflow-hidden">
            <div className="relative overflow-hidden">
              <img src={programming2} alt="programming" className="transition-transform duration-300 hover:scale-110 h-[156px] rounded-t-2xl overflow-hidden " />
              <span className="px-3 inline-block py-1 bg-white text-[#00a946] rounded absolute top-6 right-3">
                programming
              </span>
            </div>
            <h3 className="mt-5 mb-5 pl-4 font-bold">Web Designing for beginners</h3>

            <div className="pb-5 mx-4 flex flex-wrap justify-between gap-4 lg:gap-1 border-b-2 border-dashed border-b-[#e3e3e3]">
              <div className="flex gap-1">
                <img src={clock} alt="clock" />
                <span className="text-[10px] text-mygray">4 hr 30 min</span>
              </div>
              <div className="flex gap-1">
                <img src={people} alt="people" />
                <span className="text-[10px] text-mygray">52 Students</span>
              </div>
              <div className="flex gap-1">
                <img src={book} alt="book" />
                <span className="text-[10px] text-mygray">10 Chapter</span>
              </div>
            </div>

            <div className="pt-4 pb-4 mx-4 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img src={person} alt="person" />
                <span className="text-xs text-myblack">Monica geller</span>
              </div>

              <span className="font-semibold text-sm text-myblack">
                120.99 $
              </span>
            </div>
          </div>
          <div className="w-[280px] flex-shrink-0 xl:flex-shrink xl:w-full  bg-secondary rounded-2xl overflow-hidden">
            <div className="relative overflow-hidden">
              <img src={graphic} alt="programming" className="transition-transform duration-300 hover:scale-110 h-[156px] rounded-t-2xl overflow-hidden " />
              <span className="px-3 inline-block py-1 bg-white text-[#00a946] rounded absolute top-6 right-3">
              Graphic
              </span>
            </div>
            <h3 className="mt-5 mb-5 pl-4 font-bold">Advanced Photoshop</h3>

            <div className="pb-5 mx-4 flex flex-wrap justify-between gap-4 lg:gap-1 border-b-2 border-dashed border-b-[#e3e3e3]">
              <div className="flex gap-1">
                <img src={clock} alt="clock" />
                <span className="text-[10px] text-mygray">4 hr 30 min</span>
              </div>
              <div className="flex gap-1">
                <img src={people} alt="people" />
                <span className="text-[10px] text-mygray">52 Students</span>
              </div>
              <div className="flex gap-1">
                <img src={book} alt="book" />
                <span className="text-[10px] text-mygray">10 Chapter</span>
              </div>
            </div>

            <div className="pt-4 pb-4 mx-4 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img src={person} alt="person" />
                <span className="text-xs text-myblack">Monica geller</span>
              </div>

              <span className="font-semibold text-sm text-myblack">
                120.99 $
              </span>
            </div>
          </div>
          
          <div className="w-[280px] flex-shrink-0 xl:flex-shrink xl:w-full  bg-secondary rounded-2xl overflow-hidden">
            <div className="relative overflow-hidden">
              <img src={design} alt="programming" className="transition-transform duration-300 hover:scale-110 h-[156px] rounded-t-2xl overflow-hidden " />
              <span className="px-3 inline-block py-1 bg-white text-[#00a946] rounded absolute top-6 right-3">
              Design
              </span>
            </div>
            <h3 className="mt-5 mb-5 pl-4 font-bold">UI and UX Design</h3>

            <div className="pb-5 mx-4 flex flex-wrap justify-between gap-4 lg:gap-1 border-b-2 border-dashed border-b-[#e3e3e3]">
              <div className="flex gap-1">
                <img src={clock} alt="clock" />
                <span className="text-[10px] text-mygray">4 hr 30 min</span>
              </div>
              <div className="flex gap-1">
                <img src={people} alt="people" />
                <span className="text-[10px] text-mygray">52 Students</span>
              </div>
              <div className="flex gap-1">
                <img src={book} alt="book" />
                <span className="text-[10px] text-mygray">10 Chapter</span>
              </div>
            </div>

            <div className="pt-4 pb-4 mx-4 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img src={person} alt="person" />
                <span className="text-xs text-myblack">Monica geller</span>
              </div>

              <span className="font-semibold text-sm text-myblack">
                120.99 $
              </span>
            </div>
          </div>
          
          
          

        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
