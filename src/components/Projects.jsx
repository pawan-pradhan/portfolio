import React, { useState } from 'react';
import emarinehub from '../assets/image/emarinehub.png';
import luckyWheelGame from '../assets/image/topbet9auspin_1.png';
import brandMyHotel from '../assets/image/BMH.png';
import pawan_portfolio from '../assets/image/pawan_portfolio.png';

const projects = [
  {
    title: "E-marinehub",
    desc: "Full-stack MERN e-commerce site with Admin & Seller panel, Product, order, filtering, cart, and payment integration.",
    img: emarinehub,
    liveLink: "https://emarinehub.com",
    codeLink: "",
    techStack: ["React.Js", "Next.Js", "Node.Js", "MongoDB", "Express", "Stripe"],
  },
  {
    title: "Lucky wheel game",
    desc: "Real-time chat app using Socket.IO, React, and MongoDB with authentication.",
    img: luckyWheelGame,
    liveLink: "https://topbet9auspin.com/",
    codeLink: "",
    techStack: ["PHP", "MySql", "SQL", "Javascript", "Jquery", "CSS", "HTML"],
  },
  {
    title: "Brand My Hotel",
    desc: "Single page static website for showing your business online as a portfolio.",
    img: brandMyHotel,
    liveLink: "https://staging.humairahome.in/",
    codeLink: "",
    techStack: ["React.Js", "Tailwind Css", "Html", "Css"],
  },
  {
    title: "Pawan portfolio",
    desc: "This is a static portfolio website showcasing my personal details, skills, projects, and services.",
    img: pawan_portfolio,
    liveLink: "https://pawan-sharma-webdev.netlify.app/",
    codeLink: "",
    techStack: ["React.Js", "Tailwind Css", "Html", "Css", "tawk.to"],
  },
];

const Projects = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto relative ">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        My <span className="text-blue-600">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8  ">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="relative cursor-pointer ">
              <a href={proj.liveLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-70 object-cover transition-all duration-500 group-hover:brightness-90"
                />
              </a>

              {/* Zoom icon overlay */}
              <button
                onClick={() => setModalImg(proj.img)}
                className="absolute top-2 right-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full p-1 hover:bg-blue-600 hover:text-white transition"
                title="View Image"
              >
                🔍
              </button>
            </div>

            {/* Details */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                {proj.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{proj.desc}</p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {proj.liveLink && (
                  <a
                    href={proj.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
                  >
                    Live Demo
                  </a>
                )}
                {proj.codeLink && (
                  <a
                    href={proj.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded text-sm"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full image view */}
      {modalImg && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden max-w-2xl w-full relative">
            <button
              onClick={() => setModalImg(null)}
              className="absolute top-2 right-2 text-black dark:text-white text-2xl"
            >
              &times;
            </button>
            <img src={modalImg} alt="Project" className="w-full max-h-[80vh] object-contain" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;













// import React from 'react';
// import emarinehub from '../assets/image/emarinehub.png'
// import luckyWheelGame  from '../assets/image/topbet9auspin_1.png';
// import brandMyHotel  from '../assets/image/BMH.png';
// import pawan_portfolio  from '../assets/image/pawan_portfolio.png';

// const projects = [
//   {
//     title: "E-marinehub",
//     desc: "Full-stack MERN e-commerce site with Admin & Seller panel, Product, order, filtering, cart, and payment integration.",
//     // img: "https://codeastro.com/wp-content/uploads/2021/03/Code-Astro-Thumbnail-Ecommerce-1280x720.jpg",
//     img: emarinehub,
//     liveLink: "https://emarinehub.com",
//     codeLink: "",
//     techStack: ["React.Js", "Next.Js", "Node.Js", "MongoDB", "Express", "Stripe"],
//   },
//   {
//     title: "Lucky wheel game",
//     desc: "Real-time chat app using Socket.IO, React, and MongoDB with authentication.",
//     // img: "https://i.ytimg.com/vi/HKJdqJIDtMs/sddefault.jpg",
//     img: luckyWheelGame,
//     liveLink: "https://topbet9auspin.com/",
//     codeLink: "",
//     techStack: ["PHP", "MySql", "SQL", "Javascript", "Jquery", "CSS", "HTML"],
//   },
//   {
//     title: "Brand My Hotel",
//     desc: "Single page static website for showing your bussiness online as a portfolio.",
//     // img: "https://i.ytimg.com/vi/HKJdqJIDtMs/sddefault.jpg",
//     img: brandMyHotel,
//     liveLink: "https://staging.humairahome.in/",
//     codeLink: "",
//     techStack: ["React.Js", "Tailwind Css", "Html", "Css"],
//   },
//   {
//     title: "Pawan portfolio",
//     desc: "This is static portfolio website, so showing my personal details, skills, contact details, projects, and services.",
//     // img: "https://i.ytimg.com/vi/HKJdqJIDtMs/sddefault.jpg",
//     img: pawan_portfolio,
//     liveLink: "pawan-sharma-webdev.netlify.app/",
//     codeLink: "",
//     techStack: ["React.Js", "Tailwind Css", "Html", "Css", "tawk.to"],
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="py-16 px-4 max-w-7xl mx-auto">
//       <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
//         My <span className="text-blue-600">Projects</span>
//       </h2>

//       <div className="grid md:grid-cols-2 gap-8">
//         {projects.map((proj, idx) => (
//           <div
//             key={idx}
//             className="group bg-white dark:bg-gray-900 border  border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
//           >
//             <img
//               src={proj.img}
//               alt={proj.title}
//               className="w-full h-48 overflow-y-scroll object-cover transition-all duration-500 group-hover:brightness-90"
//             />

//             <div className="p-6">
//               <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
//                 {proj.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">{proj.desc}</p>

//               {/* Tech Stack Tags */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {proj.techStack.map((tech, i) => (
//                   <span key={i} className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded">
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Links */}
//               <div className="flex gap-4">
//                 {proj.liveLink && (
//                   <a
//                     href={proj.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
//                   >
//                     Live Demo
//                   </a>
//                 )}
//                 {proj.codeLink && (
//                   <a
//                     href={proj.codeLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded text-sm"
//                   >
//                     View Code
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
