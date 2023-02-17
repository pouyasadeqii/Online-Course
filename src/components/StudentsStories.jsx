import React, { useState } from "react";
import contentWritting from "../assets/images/contentWritting.jpg";
import sapmle from "../assets/videos/sample.mp4";
import graphicStudent from "../assets/videos/graphicStudent.mp4";
import uiStudent from "../assets/videos/uiStudent.mp4";
import pythonStudent from "../assets/videos/pythonStudent.mp4";
import webStudent3 from "../assets/videos/webStudent3.mp4";
import webStudent2 from "../assets/videos/webStudent2.mp4";
import webStudent1 from "../assets/videos/webStudent1.mp4";

const videos = {
  uiStudent: uiStudent,
  pythonStudent: pythonStudent,
  graphicStudent: graphicStudent,
  webStudent1: webStudent1,
  webStudent2: webStudent2,
  webStudent3: webStudent3,
};

const StudentsStories = () => {
  const [video, setVideo] = useState(sapmle);

  const videoHandler = (e) => {
    setVideo(videos[e.target.alt]);
  };

  return (
    <div className="mx-6 md:mx-32 mb-20">
      <h2 className="text-center lg:text-start font-bold text-3xl lg:text-4xl mb-10">
        Students stories
      </h2>

      {/* content */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* lists */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-5">
          {/* 1 */}
          <div className="flex flex-col gap-4 w-full">
            <div className="w-full bg-white p-3 rounded-lg flex items-center gap-3">
              <img
                loading="lazy"
                src={contentWritting}
                alt="uiStudent"
                className="w-20 h-20 object-cover rounded cursor-pointer"
                onClick={videoHandler}
              />
              <div className="flex flex-col gap-4">
                <span className="font-semibold text-myblack text-sm">
                  John Esmith
                </span>
                <span className="text-[13px] text-mygray">Ui/Ux student</span>
              </div>
            </div>

            <div className="w-full bg-white p-3 rounded-lg flex items-center gap-3">
              <img
                loading="lazy"
                src={contentWritting}
                alt="webStudent1"
                className="w-20 h-20 object-cover rounded cursor-pointer"
                onClick={videoHandler}
              />
              <div className="flex flex-col gap-4">
                <span className="font-semibold text-myblack text-sm">
                  John Esmith
                </span>
                <span className="text-[13px] text-mygray">
                  Web developer student
                </span>
              </div>
            </div>

            <div className="w-full bg-white p-3 rounded-lg flex items-center gap-3">
              <img
                loading="lazy"
                src={contentWritting}
                alt="webStudent2"
                className="w-20 h-20 object-cover rounded cursor-pointer"
                onClick={videoHandler}
              />
              <div className="flex flex-col gap-4">
                <span className="font-semibold text-myblack text-sm">
                  John Esmith
                </span>
                <span className="text-[13px] text-mygray">
                  Web developer student
                </span>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-4 w-full">
            <div className="w-full bg-white p-3 rounded-lg flex items-center gap-3">
              <img
                loading="lazy"
                src={contentWritting}
                alt="pythonStudent"
                className="w-20 h-20 object-cover rounded cursor-pointer"
                onClick={videoHandler}
              />
              <div className="flex flex-col gap-4">
                <span className="font-semibold text-myblack text-sm">
                  John Esmith
                </span>
                <span className="text-[13px] text-mygray">Python student</span>
              </div>
            </div>

            <div className="w-full bg-white p-3 rounded-lg flex items-center gap-3">
              <img
                loading="lazy"
                src={contentWritting}
                alt="graphicStudent"
                className="w-20 h-20 object-cover rounded cursor-pointer"
                onClick={videoHandler}
              />
              <div className="flex flex-col gap-4">
                <span className="font-semibold text-myblack text-sm">
                  John Esmith
                </span>
                <span className="text-[13px] text-mygray">
                  Graphic Design student
                </span>
              </div>
            </div>

            <div className="w-full bg-white p-3 rounded-lg flex items-center gap-3">
              <img
                loading="lazy"
                src={contentWritting}
                alt="webStudent3"
                className="w-20 h-20 object-cover rounded cursor-pointer"
                onClick={videoHandler}
              />
              <div className="flex flex-col gap-4">
                <span className="font-semibold text-myblack text-sm">
                  John Esmith
                </span>
                <span className="text-[13px] text-mygray">
                  Web developer student
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* video */}
        <div className="bg-blue-100 w-full rounded-lg overflow-hidden">
          <video
            src={video}
            className="w-full h-full object-cover"
            controls
          ></video>
        </div>
      </div>
    </div>
  );
};

export default StudentsStories;
