import React, { useState } from "react";
import contactUsImg from "../assets/images/contactus-image.png";

import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const [email, setEmail] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  return (
    <section className={`mx-6 md:mx-32 mb-20`}>
      <div
        className={`${styles.background} rounded-2xl pb-5 px-2 flex flex-col gap-y-5 xl:gap-y-0 xl:flex-row justify-center `}
      >
        {/* image */}
        <div className="w-full h-full xl:h-[448px] relative flex justify-center items-center ">
          <img
            src={contactUsImg}
            alt="contactusimage"
            className="w-full object-contain h-full absolute xl:top-[-68px]"
          />
        </div>

        {/* text and input */}
        <div className="flex flex-col items-center xl:mr-16 justify-center">
          <p className="text-center xl:text-2xl xl:leading-[46px] xl:font-bold text-[#2A2A2A] mb-8 xl:mb-20">
            Enter your email to recevice{" "}
            <span className="text-[#F25C54]">courses</span> new and{" "}
            <span className="text-[#F25C54]">articles</span> in platform.{" "}
          </p>
          <div className="flex rounded-lg overflow-hidden max-w[415px]">
            <input
              className="border-0 outline-0 text-sm pl-2 xl:pl-6 xl:py-3 xl:pr-3 sm:pr-14  lg:text-xl"
              type="email"
              placeholder="Your Email..."
              onChange={emailHandler}
              value={email}
            />
            <a
              href="#"
              className="bg-accent text-sm xl:text-base cursor-pointer rounded-tr-lg rounded-br-lg px-4 py-3 lg:px-5 text-secondary font-bold lg:py-4"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
