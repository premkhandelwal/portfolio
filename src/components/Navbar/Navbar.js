import React from "react";
import profileImage from "../../profile.png"
import FileSaver from 'file-saver';
import logo from '../../self_logo.png';
import Home from "../Home/Home";

const Navbar = () => {
  const saveFile = () => {
    FileSaver.saveAs(
      "/assets/resume.pdf",
      "MyResume.pdf"
    );
  }
  return (
    <>

      <div data-bs-target=".navbar" data-bs-offset="150" id="section1">

        <nav className="navbar sticky-top justify-content-end navbar-expand-lg navbar-dark bg-black">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-end">
              <li>
                <a className="nav-link" href="#section1">
                  <img src={logo} alt="profile" style={{
                    width: "10vw",
                    height: "10vh",
                    // "objectFit": "cover",
                    // display: "block",
                    objectFit: "contain",
                    // margin: "auto",
                    maxHeight: "auto",
                    maxWidth: "none",
                  }}
                  // backgroundColor: "purple"
                  />
                </a>
              </li>
            </ul>

          </div>

        </nav>
        {/* <div className="container"></div> */}
        `<Home />

      </div>
    </>
  );
};

export default Navbar;
