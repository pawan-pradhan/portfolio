import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Manager, XYZ Corp",
    message: "Pawan is a very talented developer. Delivered our project on time with great UI!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Singh",
    role: "Team Lead, Techify",
    message: "Superb MERN skills and communication. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Aman Verma",
    role: "Founder, WebSprint",
    message: "Excellent experience working with Pawan. Clean code and great support!",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Designer, PixelPro",
    message: "The UI work was amazing, very clean and responsive designs.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Nikhil Joshi",
    role: "CTO, AppVerse",
    message: "Helped us launch our app faster than expected. Truly skilled developer!",
    img: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    name: "Kavya Jain",
    role: "CEO, DevCore",
    message: "Great collaboration and timely delivery. Will definitely work again!",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 320;
        if (scrollAmount >= scrollContainer.scrollWidth) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition duration-300">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Client <span className="text-blue-600">Feedback</span>
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-2 md:px-4 py-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[300px] bg-white/70 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-5 hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">“{item.message}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;









// import React from 'react';

// const testimonials = [
//   {
//     name: "Ravi Kumar",
//     role: "Manager, XYZ Corp",
//     message: "Pawan is a very talented developer. Delivered our project on time with great UI!",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Neha Singh",
//     role: "Team Lead, Techify",
//     message: "Superb MERN skills and communication. Highly recommended!",
//     img: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="bg-gray-100 dark:bg-gray-900 py-10 px-4">
//       <h2 className="text-3xl font-semibold text-center mb-8 dark:text-white">Testimonials</h2>
//       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//         {testimonials.map((item, i) => (
//           <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded shadow">
//             <div className="flex items-center mb-4">
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-12 h-12 rounded-full object-cover mr-3"
//               />
//               <div>
//                 <h4 className="font-semibold dark:text-white">{item.name}</h4>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
//               </div>
//             </div>
//             <p className="text-gray-700 dark:text-gray-300">"{item.message}"</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
