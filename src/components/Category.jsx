import React from "react";
import uxResearcher from "../assets/images/uxResearcher.jpg";
import userInterface from "../assets/images/userInterface.jpg";
import userExperience from "../assets/images/userExperience.jpg";
import webDesign from "../assets/images/webDesign.jpg";
import backendDeveloper from "../assets/images/backendDeveloper.jpg";
import dataScience from "../assets/images/dataScience.jpg";
import graphicDesign from "../assets/images/graphicDesign.jpg";
import contentWritting from "../assets/images/contentWritting.jpg";

const Category = () => {
  return (
    <section className="mx-6 md:mx-32 mb-20">
      <h2 className="text-center lg:text-start font-bold text-3xl lg:text-4xl mb-5">
        Category
      </h2>
      <p className="text-mygray font-semibold text-center lg:text-start mb-10">
        You Can Access To All Categories Here And Choose Them.
      </p>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        <div className="w-[255px] shadow-lg hover:shadow-none transition-shadow duration-300 bg-white rounded-lg p-3 flex gap-6">
          <img loading="lazy" src={uxResearcher} alt="uxresearcher" className="w-20 h-14" />
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-myblack text-sm">
              Ux Research
            </span>
            <span className="text-sm text-mygray">15 Course</span>
          </div>
        </div>
        <div className="w-[255px] shadow-lg hover:shadow-none transition-shadow duration-300 bg-white rounded-lg p-3 flex gap-6">
          <img loading="lazy" src={userInterface} alt="uxresearcher" className="w-20 h-14" />
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-myblack text-sm">
              User Interface
            </span>
            <span className="text-sm text-mygray">15 Course</span>
          </div>
        </div>
        <div className="w-[255px] shadow-lg hover:shadow-none transition-shadow duration-300 bg-white rounded-lg p-3 flex gap-6">
          <img loading="lazy" src={userExperience} alt="uxresearcher" className="w-20 h-14" />
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-myblack text-sm">
              User Experience
            </span>
            <span className="text-sm text-mygray">15 Course</span>
          </div>
        </div>
        <div className="w-[255px] shadow-lg hover:shadow-none transition-shadow duration-300 bg-white rounded-lg p-3 flex gap-6">
          <img loading="lazy" src={webDesign} alt="uxresearcher" className="w-20 h-14" />
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-myblack text-sm">
              Web Design
            </span>
            <span className="text-sm text-mygray">15 Course</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        <div className="w-[255px] shadow-lg hover:shadow-none transition-shadow duration-300 bg-white rounded-lg p-3 flex gap-6">
          <img
            src={backendDeveloper}
            alt="uxresearcher"
            className="w-20 h-14"
          />
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-myblack text-sm">
              Backend Developer
            </span>
            <span className="text-sm text-mygray">15 Course</span>
          </div>
        </div>
        <div className="w-[255px] shadow-lg hover:shadow-none transition-shadow duration-300 bg-white rounded-lg p-3 flex gap-6">
          <img loading="lazy" src={dataScience} alt="uxresearcher" className="w-20 h-14" />
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-myblack text-sm">
              Data Science
            </span>
            <span className="text-sm text-mygray">15 Course</span>
          </div>
        </div>
        <div className="w-[255px] shadow-lg hover:shadow-none transition-shadow duration-300 bg-white rounded-lg p-3 flex gap-6">
          <img loading="lazy" src={graphicDesign} alt="uxresearcher" className="w-20 h-14" />
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-myblack text-sm">
              Graphic Design
            </span>
            <span className="text-sm text-mygray">15 Course</span>
          </div>
        </div>
        <div className="w-[255px] shadow-lg hover:shadow-none transition-shadow duration-300 bg-white rounded-lg p-3 flex gap-6">
          <img loading="lazy" src={contentWritting} alt="uxresearcher" className="w-20 h-14" />
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-myblack text-sm">
              Content Writting
            </span>
            <span className="text-sm text-mygray">15 Course</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
