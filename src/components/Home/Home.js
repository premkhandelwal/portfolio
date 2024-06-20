import React, { useState } from 'react';
import "./Home.css";
import TechStack from '../TechStack/TechStack';
import WorkSample from '../Work/Work';
import Footer from '../Footer/Footer';
import Collaboration from '../Colloboration/Collaboration';

const Home = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const windowWidth = window.innerWidth;
    const maxRotationAngle = -40; // Adjust the maximum rotation angle as desired

    const rotation = (mouseX / windowWidth) * 2 * maxRotationAngle - maxRotationAngle;
    setRotationAngle(rotation);
  };



  return (
    <>
      <div
        className="section1"
        onMouseMove={handleMouseMove}
       
      >
        <div className="headline">
          hello, I'm Prem Khandelwal
        </div>
        <div className="subtitle">
          Software Development Engineer | Full Stack Developer | Flutter, C#, MySQL, NodeJS
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
