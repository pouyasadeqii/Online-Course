import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import PopularCourses from './components/PopularCourses';

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <PopularCourses />
    </div>
  );
};

export default App;