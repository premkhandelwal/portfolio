import React from 'react';
import "./Home.css";
import TechStack from '../TechStack/TechStack';
import WorkSample from '../Work/Work';
import Footer from '../Footer/Footer';
import Collaboration from '../Colloboration/Collaboration';

const Home = () => {



  return (
    <>
      <div
        className="section1"
      >
        <div className="headline">
          hello, I'm Prem Khandelwal
        </div>
        <div className="subtitle">
          Software Development Engineer | Full Stack Developer | .NET, Flutter, MySQL, NodeJS
        </div>
       
        <br />
      </div>
      <TechStack />
      <WorkSample />
      <Collaboration />
      <Footer />
    </>
  );
};

export default Home;
