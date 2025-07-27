import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import dummyUserImg from '../assets/image/2d_user_img.png'

export default function Contact() {
  return (
    <section className="relative z-10 py-10 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 via-white to-sky-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />

      <h2 className="text-4xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-sky-400 dark:text-white">
        Let's Connect
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center backdrop-blur-md bg-white/60 dark:bg-gray-800/50 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700">
        {/* Contact Form */}
        <form className="space-y-5 p-10">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white/70 dark:bg-gray-900/70 text-gray-800 dark:text-white transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white/70 dark:bg-gray-900/70 text-gray-800 dark:text-white transition"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white/70 dark:bg-gray-900/70 text-gray-800 dark:text-white transition"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-semibold py-3 rounded-xl shadow-lg transform transition-transform hover:scale-105"
          >
            ✉️ Send Message
          </button>
        </form>

        {/* Cartoon Illustration */}
        <div className="p-5 flex flex-col items-center text-center">
          <img
            src={dummyUserImg}
            alt="Working on computer illustration"
            className="w-60 h-60 object-contain mb-6"
          />
          <p className="text-gray-700 dark:text-gray-300 text-base">
            I'm open to new opportunities and collaborations. Use the form or connect via social media below.
          </p>
          <div className="flex justify-center gap-6 mt-6 text-3xl">
            <a
              href="https://wa.me/919460379517"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 transition-transform hover:scale-125"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/airman_pawan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition-transform hover:scale-125"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
