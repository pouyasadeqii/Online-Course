import React from "react";
import artificial from "../assets/images/artificial.svg";
import business from "../assets/images/business.svg";
import uxdesign from "../assets/images/uxdesign.svg";
import flutter from "../assets/images/flutter.svg";
import writer from "../assets/images/person.png";
import clock from "../assets/images/clock.svg";
import calendar from "../assets/images/calendarSearch.svg";

const rowOne = [
  {
    image: artificial,
    category: "artificial intelligence",
    title: "A review of machine learning",
  },
  {
    image: business,
    category: "Business",
    title: "How does a product manager think?",
  },
];

const rowTow = [
  {
    image: uxdesign,
    category: "Design",
    title: "What is user experience?",
  },
  {
    image: flutter,
    category: "programming",
    title: "Flutter architectural overview",
  },
];

const NewArticles = () => {
  return (
    <section className="mx-6 md:mx-32 mt-2 mb-32" id="articles">
      {/* header new article */}
      <div className="flex items-end sm:items-center justify-between mb-16">
        <h2 className="text-myblack font-bold text-2xl sm:text-[40px] leading-[50px]">
          New Articles
        </h2>
        <div className="flex py-2 items-center gap-2 text-mygray cursor-pointer hover:text-accent transition-colors duration-100">
          <a
            href="#"
            className="text-inherit text-sm font-semibold transition-colors duration-100"
          >
            View More
          </a>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="text-inherit transition-colors duration-100"
          >
            <path
              d="M12 22.75C17.93 22.75 22.75 17.93 22.75 12C22.75 6.07 17.93 1.25 12 1.25C6.06997 1.25 1.24997 6.07 1.24997 12C1.24997 17.93 6.06997 22.75 12 22.75ZM12 2.75C17.1 2.75 21.25 6.9 21.25 12C21.25 17.1 17.1 21.25 12 21.25C6.89997 21.25 2.74997 17.1 2.74997 12C2.74997 6.9 6.89997 2.75 12 2.75Z"
              fill="currentcolor"
            />
            <path
              d="M10.74 16.2799C10.93 16.2799 11.12 16.2099 11.27 16.0599L14.8 12.5299C15.09 12.2399 15.09 11.7599 14.8 11.4699L11.27 7.93991C10.98 7.64991 10.5 7.64991 10.21 7.93991C9.92002 8.22991 9.92002 8.70991 10.21 8.99991L13.21 11.9999L10.21 14.9999C9.92002 15.2899 9.92002 15.7699 10.21 16.0599C10.35 16.2099 10.54 16.2799 10.74 16.2799Z"
              fill="currentcolor"
            />
          </svg>
        </div>
      </div>

      {/* body New article row1 */}
      <div className="flex flex-col xl:flex-row gap-5 items-center mb-5">
        {rowOne.map((item) => {
          return (
            <div
              key={item.category}
              className="flex flex-col sm:flex-row gap-4 p-2 rounded-lg shadow-md hover:shadow-none transition-shadow duration-200 bg-secondary max-w-[580px]"
            >
              <img src={item.image} alt="artificial" />

              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <img
                      src={writer}
                      className="w-10 h-10 rounded-full object-cover"
                      alt="writer"
                    />
                    <span className="text-myblack leading-5 text-xs">
                      Saghar Saberi
                    </span>
                  </div>
                  <span className="text-mygray bg-primary p-2 text-xs leading-5 rounded ">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-myblack font-bold leading-[14px] mt-4 mb-2">
                  {item.title}
                </h3>

                <p className="text-mygray text-sm xl:text-xs xxl:text-sm leading-6 max-w-[365px] mb-4">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for...
                </p>

                <div className="flex items-center">
                  <img src={calendar} alt="calendarSearch" />
                  <span className="text-mygray text-[10px] leading-5 ml-1">
                    Aug 15,2022
                  </span>
                  <img src={clock} alt="clock" className="ml-9" />
                  <span className="text-mygray text-[10px] leading-5 ml-1">
                    7 min read
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* body New article row2 */}
      <div className="flex flex-col xl:flex-row gap-5 items-center mb-5">
        {rowTow.map((item) => {
          return (
            <div
              key={item.category}
              className="flex flex-col sm:flex-row gap-4 p-2 rounded-lg shadow-md hover:shadow-none transition-shadow duration-200 bg-secondary max-w-[580px]"
            >
              <img src={item.image} alt="artificial" />

              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <img
                      src={writer}
                      className="w-10 h-10 rounded-full object-cover"
                      alt="writer"
                    />
                    <span className="text-myblack leading-5 text-xs">
                      Saghar Saberi
                    </span>
                  </div>
                  <span className="text-mygray bg-primary p-2 text-xs leading-5 rounded ">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-myblack font-bold leading-[14px] mt-4 mb-2">
                  {item.title}
                </h3>

                <p className="text-mygray text-sm xl:text-xs xxl:text-sm leading-6 max-w-[365px] mb-4">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for...
                </p>

                <div className="flex items-center">
                  <img src={calendar} alt="calendarSearch" />
                  <span className="text-mygray text-[10px] leading-5 ml-1">
                    Aug 15,2022
                  </span>
                  <img src={clock} alt="clock" className="ml-9" />
                  <span className="text-mygray text-[10px] leading-5 ml-1">
                    7 min read
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewArticles;
