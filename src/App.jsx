import React from "react";
import Category from "./components/Category";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import NewCourses from "./components/NewCourses";
import PopularCourses from "./components/PopularCourses";

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <PopularCourses />
      <Category />
      <NewCourses />
    </div>
  );
};

export default App;
