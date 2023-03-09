import React from "react";
import uxResearcher from "../assets/images/uxResearcher.jpg";
import userInterface from "../assets/images/userInterface.jpg";
import userExperience from "../assets/images/userExperience.jpg";
import webDesign from "../assets/images/webDesign.jpg";
import backendDeveloper from "../assets/images/backendDeveloper.jpg";
import dataScience from "../assets/images/dataScience.jpg";
import graphicDesign from "../assets/images/graphicDesign.jpg";
import contentWritting from "../assets/images/contentWritting.jpg";

const rowOne = [
  {
    image: uxResearcher,
    category: "Ux Research",
  },
  {
    image: userInterface,
    category: "User Interface",
  },
  {
    image: userExperience,
    category: "User Experience",
  },
  {
    image: webDesign,
    category: "Web Design",
  },
];

const rowTwo = [
  {
    image: backendDeveloper,
    category: "Backend Developer",
  },
  {
    image: dataScience,
    category: "Data Science",
  },
  {
    image: graphicDesign,
    category: "Graphic Design",
  },
  {
    image: contentWritting,
    category: "Content Writting",
  },
];

const Category = () => {
  return (
    <section className="mx-6 md:mx-32 mb-20">
      <h2 className="text-center lg:text-start font-bold text-3xl lg:text-4xl mb-5">
        Category
      </h2>
      <p className="text-mygray font-semibold text-center lg:text-start mb-10">
        You Can Access To All Categories Here And Choose Them.
      </p>

      <div className="grid justify-items-center grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        {rowOne.map((item) => {
          return (
            <div
              key={item.category}
              className="w-[255px] shadow-lg hover:shadow-none transition-shadow duration-300 bg-white rounded-lg p-3 flex gap-6"
            >
              <img
                loading="lazy"
                src={item.image}
                alt="uxresearcher"
                className="w-20 h-14"
              />
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-myblack text-sm">
                  {item.category}
                </span>
                <span className="text-sm text-mygray">15 Course</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid justify-items-center grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        {rowTwo.map((item) => {
          return (
            <div
              key={item.category}
              className="w-[255px] shadow-lg hover:shadow-none transition-shadow duration-300 bg-white rounded-lg p-3 flex gap-6"
            >
              <img src={item.image} alt="uxresearcher" className="w-20 h-14" />
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-myblack text-sm">
                  {item.category}
                </span>
                <span className="text-sm text-mygray">15 Course</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
