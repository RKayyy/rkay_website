import React from "react";
import elex from "../images/elex.png";
import dys_lock from "../images/Dyscalculia-lock.png";
import dys_home from "../images/Dyscalculia-home.png";
import dys_question from "../images/Dyscalculia-question.png";
import dys_results from "../images/Dyscalculia-results.png";
import line from "../images/line.png";
import vector from "../images/vector.png";
import Navbar2 from "../components/Navbar2";
import certificate_afour from "../images/certificate_afour.png"

const Projects = () => {

  const openImageInNewTab = () => {
    window.open(certificate_afour, "_blank");
  };
  return (
    <div className="bg-[#15141A] flex flex-col justify-center text-white ">
      <Navbar2 />
      <div className="flex justify-center">
        <div className="h-[1px] w-[80%] bg-white"></div>
      </div>

      <br></br>
      <br></br>
      <div
        className="lg:text-7xl text-5xl sm:text-left text-center lg:pl-36 md:pl-24 sm:pl-20"
        style={{ fontFamily: "Stardos" }}
      >
        Projects
      </div>

      <div className="flex flex-row hidden sm:block">
        <img alt="line" src={line} className="pl-20 lg:scale-[150%] md:scale-[120%]" />
      </div>


      <br></br>
      <br></br>
      
      <br></br>
      <br></br>
      <br></br>
      <div className="flex flex-col justify-center m-4">
        {" "}
        <h1
          className="text-white lg:text-6xl text-4xl text-center"
          style={{ fontFamily: "OswaldMedium" }}
        >
          1. UNRAVELING DYSCALCULIA
        </h1>
        <br></br>
        <h1
          className="text-white text-center lg:m-20 m-8 lg:text-xl text-sm"
          style={{ fontFamily: "OswaldMedium" }}
        >
          Developed dyscalculia detection project with a user-friendly application for children. Utilized Flutter, MySQL, and Firebase, incorporating a fuzzy ML model for accurate assessment. Paper accepted in conference - ICICET 2024
        </h1>

        <div className="flex flex-wrap justify-center items-center lg:mr-24 lg:ml-24">
          <img alt="dys-lock"
            className="m-2 screenshot-container lg:w-1/5 lg:h-auto lg:scale-75 h-64 w-28"
            src={dys_lock}
          />
          <img alt="dys-lock"
            className="m-2 screenshot-container lg:w-1/5 lg:h-auto lg:scale-75 h-64 w-28"
            src={dys_home}
          />
          <img alt="dys-lock"
            className="m-2 screenshot-container lg:w-1/5 lg:h-auto lg:scale-75 h-64 w-28"
            src={dys_question}
          />
          <img alt="dys-lock"
            className="m-2 screenshot-container lg:w-1/5 lg:h-auto lg:scale-75 h-64 w-28"
            src={dys_results}
          />

        </div>


        <br></br>

        <h1 className="text-white text-center lg:text-xl text-sm"
          style={{ fontFamily: "OswaldMedium" }}>View source code:<a target="_blank"
            rel="noopener noreferrer" href="https://github.com/RKayyy/projectdetect" className="text-blue-300">https://github.com/RKayyy/projectdetect</a></h1>




        <br></br>
        <br></br>
        <br></br>

      </div>
      
      <div className="flex justify-center items-center">
        <img alt="vector" src={vector} className=" h-16 w-16" />
      </div>
      <br></br>
        <br></br>
        <br></br>
      <div className="flex flex-col justify-center m-4">
        {" "}
        <h1
          className="text-white lg:text-6xl text-4xl text-center"
          style={{ fontFamily: "OswaldMedium" }}
        >
          2. Elex: Elective Management App
        </h1>

        <h1
          className="text-white text-center lg:m-20 m-8 lg:text-xl text-sm"
          style={{ fontFamily: "OswaldMedium" }}
        >
          The elective subject selection web app named Elex is designed to
          facilitate the management and selection of elective subjects for
          students. It provides a user-friendly interface that allows
          administrators or authorized users to perform various operations
          related to students, elective subjects, and their allocations. Elex,
          consists of different pages/screens/views to handle different tasks.
          It includes a Student Page where users can select a student from a
          list, view their details, and manage their elective subjects. On this
          page, users can add new elective subjects for a student, update the
          existing subjects, or delete them if needed.
        </h1>
        <img alt="elex"
          className="lg:m-16 m-8 lg:mr-96 lg:ml-96  border-2 border-white rounded-2xl"
          src={elex}
        />
        <h1 className="text-white text-center lg:text-xl text-sm"
          style={{ fontFamily: "OswaldMedium" }}>visit at: <a target="_blank"
            rel="noopener noreferrer" href="https://ggbois-one.vercel.app/" className="text-blue-300">https://ggbois-one.vercel.app/</a></h1>
        <br></br>
        <h1 className="text-white text-center lg:text-xl text-sm"
          style={{ fontFamily: "OswaldMedium" }}>View source code:<a target="_blank"
            rel="noopener noreferrer" href="https://github.com/RKayyy/af-3/" className="text-blue-300">https://github.com/RKayyy/af-3/</a></h1>

        <br></br>
        <button onClick={openImageInNewTab}><h1 className="text-blue-300 text-center lg:text-xl text-sm" style={{ fontFamily: 'OswaldMedium' }}>View Certificate</h1></button>
        <br></br>
        <br></br>
        <br></br>

      </div>
      
    </div>
  );
};

export default Projects;
