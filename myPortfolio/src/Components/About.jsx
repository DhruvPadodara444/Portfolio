import React from "react";

function About() {
  return (
    <div
      name="About"
      className="w-full bg-linear-to-br from-indigo-50 via-white to-purple-50 py-28"
    >
      <div className="w-full px-10 md:px-24 lg:px-32 space-y-24">

        {/* SECTION TITLE */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">
            About <span className="text-indigo-600">Me</span>
          </h1>
          <div className="w-24 h-1 bg-indigo-600 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl text-lg">
            Passionate Full-Stack Developer focused on building scalable,
            performant, and user-friendly web applications using modern
            technologies.
          </p>
        </div>

        {/* ABOUT DESCRIPTION CARD */}
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 md:p-14">
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Hello, I'm Dhruvkumar Padodara, a final-year B.Tech Computer
            Engineering student specializing in the MERN stack
            (MongoDB, Express.js, React.js, Node.js).
            I have hands-on experience building scalable and responsive
            web applications with clean architecture and RESTful APIs.
          </p>
        </div>

        {/* EDUCATION */}
        <div className="space-y-10">
          <h2 className="text-3xl font-semibold text-indigo-600">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="font-bold text-xl">
                B.Tech in Computer Engineering
              </h3>
              <p className="text-gray-600 mt-2">
                Uka Tarsadia University
              </p>
              <p className="text-sm text-gray-500">
                2023 – Present
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="font-bold text-xl">
                Diploma in Computer Engineering
              </h3>
              <p className="text-gray-600 mt-2">
                Jayvantrai Harrai Desai Polytechnic
              </p>
              <p className="text-sm text-gray-500">
                2020 – 2023
              </p>
            </div>

          </div>
        </div>

        {/* SKILLS */}
        <div className="space-y-10">
          <h2 className="text-3xl font-semibold text-indigo-600">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "REST APIs",
              "Git & GitHub",
              "Postman",
              "Figma",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md font-medium hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <div className="space-y-10">
          <h2 className="text-3xl font-semibold text-indigo-600">
            Key Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="font-semibold text-lg">
                Movie & TV Show Explorer
              </h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                TMDB API integration displaying real-time movie data
                including cast, ratings, and trailers.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="font-semibold text-lg">
                Bus Ticket Booking System
              </h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                Full-stack MERN application with seat availability,
                route search, and admin dashboard features.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="font-semibold text-lg">
                Book Recommendation System
              </h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                ML-based recommendation system integrated with
                Flask APIs and React frontend.
              </p>
            </div>

          </div>
        </div>

        {/* MISSION */}
        <div className="space-y-10">
          <h2 className="text-3xl font-semibold text-indigo-600">
            Mission
          </h2>

          <div className="bg-white/80 backdrop-blur-md p-10 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
              To begin my career as a Full-Stack Developer where I can apply
              my technical knowledge to impactful real-world projects,
              contribute to scalable solutions, and continuously grow in
              modern web technologies.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
}

export default About;
