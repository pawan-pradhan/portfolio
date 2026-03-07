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
            I'm a committed <span className="font-semibold text-sky-600 dark:text-sky-400">Full Stack Developer</span> with nearly <strong>2+ years of professional experience</strong> in Web & Game development, focusing on scalable, high-performance applications.
          </p>
          {/* <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I started my journey at <strong>CnEL India</strong>, where I worked as a full stack developer. My role involved building admin panels and APIs using <strong>Node.js, React, and MongoDB</strong>, along with significant contributions using <strong>PHP, MySQL, and SQL</strong> for web game platforms, Telegram bots, automation tools, and Canva-based solutions.
          </p> */}
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I started my journey at <strong>RIT INFOTECH PVT LTD Jaipur</strong>, where I worked as a Full stack developer. My role involved building admin panels and APIs using <strong>Node.js, React, and MongoDB</strong>, along with significant contributions using <strong>PHP, MySQL, and SQL</strong> for web game platforms, Telegram bots, automation tools, and Canva-based solutions.<br></br>
            Also I worked on a large-scale <strong>eCommerce web and mobile app project</strong>. I was primarily responsible for the backend using <strong>Node.js</strong> and also supported the development of the <strong>React-based admin panel.</strong> ( 2 Years)
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            After that, I joined another company as a <strong>MERN Stack Developer,</strong> where I worked on <strong>Gaming web and mobile app projects</strong>. I was completly halndle the whole responsible for the frontend and backend using <strong>Node.js, React Js. and MongoDB.</strong><br></br>
            I responsible for design and develope this project from scratch and Deployment on live server. 
          </p>
          <p> - Pawan Sharma</p>
          <p> Jaipur Rajasthan India, 302015</p>
          <h3>I would like to connect with you, Thanks for visite !</h3>
          {/* <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I resigned from my last position 6 months ago and am currently seeking new opportunities to contribute and grow in the tech space.
          </p> */}

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
