import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload } from 'react-icons/fa';

// import heroImg from '../assets/image/founder_img_11.png';
import heroImg from '../assets/image/2d_about_us_img.png'

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 md:px-8 text-center md:text-left relative overflow-hidden">
      {/* Background Blur/Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />

      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-gray-900 dark:text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Pawan Sharma</span>
          </h1>

          {/* Animated Text */}
          <div className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300 min-h-[2.5rem]">
            <TypeAnimation
              sequence={[
                'MERN Stack Developer', 2000,
                'Full Stack Developer', 2000,
                'Game Developer', 2000,
                'Node.js Enthusiast', 2000,
                'React.js Developer', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* CTA Buttons */}
          <div className="space-x-4">
            <Link
              to="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
            >
              Contact Me
            </Link>
            {/* <a
              href="https://drive.google.com/file/d/1FgLCbHRLRBS-BuDNVS8wO3Vy8vD59dqF/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <FaDownload />
              Resume
            </a> */}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Developer"
            className="w-72 md:w-96 h-auto object-contain drop-shadow-xl animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;