import React, { useState } from 'react';
import FileSaver from 'file-saver';
import "./Home.css";
import About from '../About/About';
import TechStack from '../TechStack/TechStack';
import WorkSample from '../Work/Work';
import Footer from '../Footer/Footer';
import Collaboration from '../Colloboration/Collaboration';
import omoji from "../../assets/images/omoji-foto.png";

const Home = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const windowWidth = window.innerWidth;
    const maxRotationAngle = -40; // Adjust the maximum rotation angle as desired

    const rotation = (mouseX / windowWidth) * 2 * maxRotationAngle - maxRotationAngle;
    setRotationAngle(rotation);
  };

  const saveFile = () => {
    FileSaver.saveAs(
      "/assets/resume.pdf",
      "MyResume.pdf"
    );
  };

  return (
    <>
      <div
        id='section1'
        style={{
          height: "100vh",
        }}
        onMouseMove={handleMouseMove}
      >
        {/* <Navbar /> */}
        <div
          style={{
            marginBottom: "20px",
            fontSize: 20,
            height: "30vh",
            alignItems: "flex-end",
            display: "flex",
            justifyContent: "center",
          }}
        >
          I'm developer by mind, designer by heart
        </div>
        <hr style={{ width: "20%", height: "2px", textAlign: "center", margin: "auto" }} />
        <img
          className='omoji'
          src={omoji}
          alt=""
          style={{
            transform: `rotate(${rotationAngle}deg)`,
          }}
        />

        <div
          style={{
            marginTop: "20px",
            fontSize: 55,
            alignItems: "center",
            height: "10vh",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
          }}
        >
          let's build amazing things together!!
        </div>
        <br />
      </div>
      <About />
      <TechStack />
      <WorkSample />
      <Collaboration />
      <Footer />
    </>
  );
};

export default Home;
