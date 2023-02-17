import React from "react";

import handCoding from "../assets/images/HandCoding.svg";
import calendarSearch from "../assets/images/calendarSearch.svg";
import android from "../assets/images/android.svg";
import userInterface from "../assets/images/userInterface.svg";



const NewCourses = () => {
  return (
    <section className="mx-6 md:mx-32 mb-20">
      <h2 className="text-center lg:text-start font-bold text-3xl lg:text-4xl mb-10">
        New Courses
      </h2>
      <div className="xl:mx-[150px] flex flex-wrap justify-center items-center lg:flex-nowrap gap-6">

        {/* 1 */}
        <div className="bg-white hover:shadow-xl transition-shadow duration-300 px-2 pt-2 rounded-2xl w-[300px] h-[285px]">
          <div className="bg-green-100 w-full rounded-lg flex justify-center items-center py-5 flex-shrink-0 md:flex-shrink mb-3">
            <img src={handCoding} alt="handCoding" loading="lazy" />
          </div>
          <h2 className="font-bold px-1 mb-8 text-sm">Advanced PHP programming</h2>
          <div className="flex justify-between items-center px-1 pb-3">
            <div className="flex gap-1">
              <img src={calendarSearch} alt="calendarSearch" loading="lazy" />
              <span className="text-[10px] text-mygray">Starts Jan 20</span>
            </div>
            <button className="py-2 px-7 bg-accent text-secondary font-semibold text-sm rounded">
              Enroll Now
            </button>
          </div>
        </div>

        {/* 2 */}
        <div className="bg-white hover:shadow-xl transition-shadow duration-300 px-2 pt-2 rounded-2xl w-[300px] h-[285px]">
          <div className="bg-yellow-50 w-full rounded-lg flex justify-center items-center py-5 flex-shrink-0 md:flex-shrink mb-3">
            <img src={android} className="w-[115px] h-[115px]" alt="android" loading="lazy" />
          </div>
          <h2 className="font-bold px-1 mb-8 text-sm">Android Developer </h2>
          <div className="flex justify-between items-center px-1 pb-3">
            <div className="flex gap-1">
              <img src={calendarSearch} alt="calendarSearch" loading="lazy" />
              <span className="text-[10px] text-mygray">Starts Jan 20</span>
            </div>
            <button className="py-2 px-7 bg-accent text-secondary font-semibold text-sm rounded">
              Enroll Now
            </button>
          </div>
        </div>

        {/* 3 */}
        <div className="bg-white hover:shadow-xl transition-shadow duration-300 px-2 pt-2 rounded-2xl w-[300px] h-[285px]">
          <div className="bg-pink-100 w-full rounded-lg flex justify-center items-center py-5 flex-shrink-0 md:flex-shrink mb-3">
            <img src={userInterface} className="w-[115px] h-[115px]" alt="userInterface" loading="lazy" />
          </div>
          <h2 className="font-bold px-1 mb-8 text-sm">User Interface Design</h2>
          <div className="flex justify-between items-center px-1 pb-3">
            <div className="flex gap-1">
              <img src={calendarSearch} alt="calendarSearch" loading="lazy" />
              <span className="text-[10px] text-mygray">Starts Jan 20</span>
            </div>
            <button className="py-2 px-7 bg-accent text-secondary font-semibold text-sm rounded">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCourses;
