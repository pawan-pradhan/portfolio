import React from 'react';

const projects = [
  {
    title: "E-commerce App",
    desc: "Full stack MERN e-commerce site with cart and Stripe payments.",
    img: "https://codeastro.com/wp-content/uploads/2021/03/Code-Astro-Thumbnail-Ecommerce-1280x720.jpg",
  },
  {
    title: "Chat Application",
    desc: "Real-time chat app using Socket.IO and MongoDB.",
    img: "https://i.ytimg.com/vi/HKJdqJIDtMs/sddefault.jpg",
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        My <span className="text-blue-600">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-48 object-cover transition-all duration-500 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                {proj.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;






// import React from 'react';

// const projects = [
//   {
//     title: "E-commerce App",
//     desc: "Full stack MERN e-commerce site with cart and Stripe payments.",
//     img: "https://codeastro.com/wp-content/uploads/2021/03/Code-Astro-Thumbnail-Ecommerce-1280x720.jpg",
//     // https://images.unsplash.com/photo-1498050108023-c5249f4df085
//   },
//   {
//     title: "Chat Application",
//     desc: "Real-time chat app using Socket.IO and MongoDB.",
//     img: "https://i.ytimg.com/vi/HKJdqJIDtMs/sddefault.jpg",
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="py-12 px-4 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Projects</h2>
//       <div className="grid md:grid-cols-2 gap-8">
//         {projects.map((proj, idx) => (
//           <div key={idx} className="bg-white dark:bg-gray-800 rounded-md shadow overflow-hidden">
//             <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2 dark:text-white">{proj.title}</h3>
//               <p className="text-gray-600 dark:text-gray-300">{proj.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
