import React, { useRef, useState } from "react";
import contentWritting from "../assets/images/contentWritting.jpg";
import poster from "../assets/images/7.jpg";
import four from "../assets/images/1.jpg";
import two from "../assets/images/2.jpg";
import three from "../assets/images/3.jpg";
import five from "../assets/images/4.jpg";
import six from "../assets/images/5.jpg";
import one from "../assets/images/6.jpg";
import play from "../assets/images/play.svg";
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

const images = {
  uiStudent: one,
  pythonStudent: four,
  graphicStudent: five,
  webStudent1: two,
  webStudent2: three,
  webStudent3: six,
};

const StudentsStories = () => {
  const [video, setVideo] = useState(sapmle);
  const [videoPoster, setVideoPoster] = useState(poster);
  const [flag, setFlag] = useState(true);

  const videoRef = useRef();

  const videoHandler = (e) => {
    if (!(video == videos[e.target.alt])) {
      setFlag(true);
    }
    setVideo(videos[e.target.alt]);
    setVideoPoster(images[e.target.alt]);
  };

  const showHandler = () => {
    setFlag(false);
    videoRef.current.play();
  };

  return (
    <div className="mx-6 md:mx-32 mb-40">
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
              <div className="w-20 h-20 relative">
                <img
                  loading="lazy"
                  src={one}
                  alt="uiStudent"
                  className="wfull h-full object-cover rounded cursor-pointer z-50"
                  onClick={videoHandler}
                />
                <img
                  src={play}
                  alt="uiStudent"
                  className="absolute top-7 left-7 cursor-pointer"
                  onClick={videoHandler}
                />
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-semibold text-myblack text-sm">
                  John Esmith
                </span>
                <span className="text-[13px] text-mygray">Ui/Ux student</span>
              </div>
            </div>

            <div className="w-full bg-white p-3 rounded-lg flex items-center gap-3">
              <div className="w-20 h-20 relative">
                <img
                  loading="lazy"
                  src={two}
                  alt="webStudent1"
                  className="w-20 h-20 object-cover rounded cursor-pointer"
                  onClick={videoHandler}
                />
                <img
                  src={play}
                  alt="webStudent1"
                  className="absolute top-7 left-7 cursor-pointer"
                  onClick={videoHandler}
                />
              </div>
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
              <div className="w-20 h-20 relative">
                <img
                  loading="lazy"
                  src={three}
                  alt="webStudent2"
                  className="w-20 h-20 object-cover rounded cursor-pointer"
                  onClick={videoHandler}
                />
                <img
                  src={play}
                  alt="webStudent2"
                  className="absolute top-7 left-7 cursor-pointer"
                  onClick={videoHandler}
                />
              </div>
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
              <div className="w-20 h-20 relative">
                <img
                  loading="lazy"
                  src={four}
                  alt="pythonStudent"
                  className="w-20 h-20 object-cover rounded cursor-pointer"
                  onClick={videoHandler}
                />
                <img
                  src={play}
                  alt="pythonStudent"
                  className="absolute top-7 left-7 cursor-pointer"
                  onClick={videoHandler}
                />
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-semibold text-myblack text-sm">
                  John Esmith
                </span>
                <span className="text-[13px] text-mygray">Python student</span>
              </div>
            </div>

            <div className="w-full bg-white p-3 rounded-lg flex items-center gap-3">
              <div className="w-20 h-20 relative">
                <img
                  loading="lazy"
                  src={five}
                  alt="graphicStudent"
                  className="w-20 h-20 object-cover rounded cursor-pointer"
                  onClick={videoHandler}
                />
                <img
                  src={play}
                  alt="graphicStudent"
                  className="absolute top-7 left-7 cursor-pointer"
                  onClick={videoHandler}
                />
              </div>
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
              <div className="w-20 h-20 relative">
                <img
                  loading="lazy"
                  src={six}
                  alt="webStudent3"
                  className="w-20 h-20 object-cover rounded cursor-pointer"
                  onClick={videoHandler}
                />
                <img
                  src={play}
                  alt="webStudent3"
                  className="absolute top-7 left-7 cursor-pointer"
                  onClick={videoHandler}
                />
              </div>
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
        <div className="bg-blue-100 w-full rounded-lg overflow-hidden relative">
          <video
            ref={videoRef}
            src={video}
            className="w-full h-full object-cover"
            controls
            poster={videoPoster}
            onClick={() => setFlag(false)}
          ></video>
          {flag && (
            <img
              src={play}
              alt="play"
              className="hidden lg:block absolute w-14 h-14 top-[30%] sm:top-[40%] sm:left-[47%] left-[44%] cursor-pointer"
              onClick={showHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentsStories;
