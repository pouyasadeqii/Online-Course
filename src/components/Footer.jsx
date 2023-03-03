import React from "react";
import logo from "../assets/images/logo.png";
import facebook from "../assets/images/facebook.svg";
import linkedin from "../assets/images/linkedin.svg";
import instagram from "../assets/images/instagram.svg";

const Footer = () => {
  return (
    <section className="pt-11 border-t">
      <div className="mx-6 md:mx-32 flex flex-col justify-center items-center">
        <a href="#" className="flex items-center gap-2 mb-9">
          <img src={logo} alt="logo" />
          <span className="text-accent font-bold cursor-pointer">
            e-learning
          </span>
        </a>

        {/* nav */}
        <nav className="mb-7">
          <ul className="flex flex-col sm:flex-row  text-center gap-6 font-semibold text-myblack">
            <li>
              <a
                href="#"
                className="text-myblack transition-all duration-300 hover:text-mygray sm:border-r sm:pr-6 border-myblack"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="text-myblack transition-all duration-300 hover:text-mygray sm:border-r sm:pr-6 border-myblack"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#articles"
                className="text-myblack transition-all duration-300 hover:text-mygray sm:border-r sm:pr-6 border-myblack"
              >
                Articles
              </a>
            </li>
            <li>
              <a
                href="#stories"
                className="text-myblack transition-all duration-300 hover:text-mygray sm:border-r sm:pr-6 border-myblack"
              >
                Stories
              </a>
            </li>
            <li>
              <a
                href="#contactus"
                className="text-myblack transition-all duration-300 hover:text-mygray"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* footer text */}
        <p className="max-w-[787px] text-center text-mygray text-sm mb-6">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>

        {/* social media */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="#">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
      {/* copyright */}
      <div className="flex flex-col items-center justify-center py-2 gap-2 bg-white">
        <span className="text-sm text-myblack">
          Develop by
          <a
            href="https://www.linkedin.com/in/pouyasadeghi/"
            className="ml-2 px-1 text-accent font-bold "
          >
            Pouya Sadeghi
          </a>
        </span>
        <span className="text-sm text-myblack">
          Design by
          <a
            href="https://www.linkedin.com/in/saghar-saberinezhad-2381bb256/"
            className="ml-2 px-1 text-accent font-bold "
          >
            Saghar Saberinezhad
          </a>
        </span>
      </div>
    </section>
  );
};

export default Footer;
