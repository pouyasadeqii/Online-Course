import React from "react";
import Category from "./components/Category";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import PopularCourses from "./components/PopularCourses";

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <PopularCourses />
      <Category />
    </div>
  );
};

export default App;
