import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-8 mt-12 text-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Pawan Sharma</span> — MERN Stack Developer
        </p>

        <div className="flex gap-5 text-xl text-gray-600 dark:text-gray-300">
          <a
            href="https://github.com/pawan-pradhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pawan-sharma-2596b1240/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:pawanpradhantng@gmail.com"
            className="hover:text-blue-600 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
