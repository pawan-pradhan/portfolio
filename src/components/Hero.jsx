import React from 'react';
import heroImg from '../assets/image/founder_img_11.png';

const Hero = () => {
  return (
    <section className="h-[80vh] flex items-center justify-center px-4 text-center md:text-left text-gray-900 dark:text-white relative">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/30 to-transparent dark:from-gray-900 dark:via-gray-800 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-600 dark:text-blue-500">Pawan Sharma</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            MERN Stack Developer with 2+ years of hands-on experience building full-stack web apps.
          </p>
          <a
            href="https://drive.google.com/file/d/1FgLCbHRLRBS-BuDNVS8wO3Vy8vD59dqF/view"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={heroImg}
            alt="Developer working"
            className="w-80 h-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;









// import React from 'react';
// import heroImg from '../assets/image/founder_img_11.png'


// const Hero = () => {
//   return (
//     <section
//       className="h-[80vh] flex items-center justify-center px-4 text-center md:text-left dark:text-white"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/30 to-transparent dark:from-gray-900 dark:via-gray-800 z-0"></div>

//       <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
//         {/* Left Content */}
//         <div className="flex-1 space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Hi, I'm <span className="text-blue-500">Pawan Sharma</span>
//           </h1>
//           <p className="text-lg text-gray-200 dark:text-gray-300">
//             MERN Stack Developer with 2+ years of hands-on experience building full-stack web apps.
//           </p>
//           <a
//             href="https://drive.google.com/file/d/1FgLCbHRLRBS-BuDNVS8wO3Vy8vD59dqF/view"
//             download
//             className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition duration-300"
//           >
//             Download Resume
//           </a>
//         </div>

//         {/* Right Image */}
//         <div className="flex-1 flex justify-center">
//           <img
//             // src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
//             src={heroImg}
//             alt="Developer working"
//             className="w-80 h-auto drop-shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

















// import React from 'react';

// const Hero = () => {
//   return (
//     <section
//       className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4 dark:text-white"
//       style={{
//         backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
//       }}
//     >
//       <div className="bg-black/50 p-8 rounded-md">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Pawan Sharma</h1>
//         <p className="text-lg mb-6">MERN Stack Developer with 2+ years of experience</p>
//         <a
//           href="/resume.pdf"
//           download
//           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
//         >
//           Download Resume
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
