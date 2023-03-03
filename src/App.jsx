import React from "react";
import Category from "./components/Category";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import NewArticles from "./components/NewArticles";
import NewCourses from "./components/NewCourses";
import PopularCourses from "./components/PopularCourses";
import StudentsStories from "./components/StudentsStories";

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <PopularCourses />
      <Category />
      <NewCourses />
      <StudentsStories />
      <ContactUs />
      <NewArticles />
      <Footer />
    </div>
  );
};

export default App;
