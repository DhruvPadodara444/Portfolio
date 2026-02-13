import React from "react";
import JavaScript from "../assets/Javascript.png";
import python from "../assets/python.webp";
import Html from "../assets/html.png";
import Css from "../assets/css.jpg";
import reactjs from "../assets/reactjs.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: Html,
      name: "HTML Project",
      desc: "Responsive semantic web layouts with modern UI structure.",
    },
    {
      id: 2,
      logo: Css,
      name: "CSS Design System",
      desc: "Advanced styling, animations, and responsive layouts.",
    },
    {
      id: 3,
      logo: JavaScript,
      name: "JavaScript App",
      desc: "Interactive dynamic applications with clean logic.",
    },
    {
      id: 4,
      logo: reactjs,
      name: "React Application",
      desc: "Modern SPA using hooks, reusable components and API integration.",
    },
    {
      id: 5,
      logo: python,
      name: "Python Project",
      desc: "Backend logic & ML-based application development.",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="w-full bg-linear-to-br from-indigo-50 via-white to-purple-50 py-28"
    >
      <div className="w-full px-10 md:px-24 lg:px-32 space-y-20">

        {/* SECTION TITLE */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">
            My <span className="text-indigo-600">Portfolio</span>
          </h1>
          <div className="w-24 h-1 bg-indigo-600 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-3xl">
            A collection of projects demonstrating my expertise in full-stack
            development and modern web technologies.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {cardItem.map(({ id, logo, name, desc }) => (
            <div
              key={id}
              className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={logo}
                  alt={name}
                  className="w-20 h-20 object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {name}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed grow">
                {desc}
              </p>

              <div className="flex gap-4 mt-6">
                <button className="flex-1 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300">
                  Live Demo
                </button>

                <button className="flex-1 border border-gray-400 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300">
                  Source Code
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default PortFolio;
