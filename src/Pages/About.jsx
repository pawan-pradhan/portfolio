import React from 'react';
import aboutUsImg from '../assets/image/2d_about_us_img.png'

export default function About() {
  return (
    <section className="py-20 px-6 sm:px-10 max-w-5xl mx-auto relative">
      {/* Gradient background blur */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-sky-50 via-white to-sky-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-sky-400 dark:text-white">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I'm a passionate <span className="font-semibold text-sky-600 dark:text-sky-400">MERN Stack Developer</span> with hands-on experience in both frontend and backend development.
            My journey began with HTML, CSS, JavaScript, jQuery, and PHP/MySQL, then deepened through <strong>6+ months of intense MERN training</strong>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I specialize in building fast, responsive, and scalable web apps using <strong>React, Node.js, Express, and MongoDB</strong>. I enjoy tackling real-world problems and continually sharpen my skills by learning and building.
          </p>
        </div>

        {/* Right: Illustration */}
        <div className="flex justify-center">
          <img
            src={aboutUsImg}
            alt="Developer Illustration"
            className="w-80 h-auto object-contain animate-fade-in drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
