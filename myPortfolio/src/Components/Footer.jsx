import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-linear-to-br from-indigo-50 via-white to-purple-50 pt-24 pb-12">
      <div className="w-full px-10 md:px-24 lg:px-32">

        {/* MAIN CONTENT */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-16">

          {/* BRANDING */}
          <div className="space-y-4 max-w-md">
            <h2 className="text-3xl font-bold">
              Dhruv
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Full-Stack Developer focused on building scalable,
              modern, and high-performance web applications using
              the MERN stack.
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Connect
            </h3>
            <div className="flex space-x-6">
              <a
                href="#"
                className="p-4 bg-white rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="#"
                className="p-4 bg-white rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="#"
                className="p-4 bg-white rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="p-4 bg-white rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>
            © {new Date().getFullYear()} Dhruvkumar Padodara. All rights reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
