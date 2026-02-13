import React from "react";
import pic from "../assets/userIcon.jpg";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div
      name="Home"
      className="min-h-screen w-full bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center"
    >
      <div className="w-full px-10 md:px-24 lg:px-32 py-24 flex flex-col md:flex-row items-center justify-between gap-20">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 space-y-8">

          <p className="text-xl text-gray-600 font-medium">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Dhruvkumar{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Padodara
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-gray-800">
            I’m a{" "}
            <ReactTyped
              className="text-indigo-600"
              strings={[
                "Full Stack Developer",
                "MERN Stack Developer",
                "React.js Developer",
              ]}
              typeSpeed={50}
              backSpeed={40}
              loop
            />
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Final-year B.Tech Computer Engineering student passionate about
            building scalable, responsive, and high-performance web
            applications using the MERN stack. I focus on clean architecture,
            maintainable code, and modern user experiences.
          </p>

          {/* SOCIAL + TECH */}
          <div className="flex gap-16 mt-10">

            {/* Social */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">
                Connect with me
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/DhruvPadodara444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition duration-300"
                >
                  <FaGithub className="text-2xl text-gray-800" />
                </a>

                <a
                  href="https://www.linkedin.com/in/dhruv-padodara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition duration-300"
                >
                  <FaLinkedin className="text-2xl text-blue-600" />
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">
                Tech Stack
              </h3>
              <div className="flex space-x-8">
                <SiMongodb className="text-4xl text-green-600 hover:scale-110 transition duration-300" />
                <SiExpress className="text-4xl text-gray-800 hover:scale-110 transition duration-300" />
                <FaReact className="text-4xl text-cyan-500 hover:scale-110 transition duration-300" />
                <FaNodeJs className="text-4xl text-green-500 hover:scale-110 transition duration-300" />
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">

            <div className="absolute inset-0 bg-linear-to-tr from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-30"></div>

            <img
              src={pic}
              alt="Dhruvkumar Padodara"
              className="relative rounded-full w-80 h-80 md:w-105 md:h-105 object-cover border-4 border-white shadow-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
