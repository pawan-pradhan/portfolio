import React from 'react';

const services = [
  {
    title: "Frontend Development",
    icon: "💻",
    points: [
      "React.js, Tailwind CSS, HTML/CSS/JS",
      "Responsive UI/UX with Figma & Canva",
      "Single Page & Static Sites",
    ],
  },
  {
    title: "Backend & APIs",
    icon: "🛠️",
    points: [
      "Node.js, Express.js, PHP",
      "REST APIs, Auth & Payment Gateway",
      "SQL, MySQL, MongoDB",
    ],
  },
  {
    title: "Full Stack Apps",
    icon: "🌐",
    points: [
      "MERN Stack Applications",
      "E-commerce Platforms & Admin Panels",
      "Dynamic Websites & Dashboards",
    ],
  },
  {
    title: "Mobile Development",
    icon: "📱",
    points: [
      "React Native App Development",
      "Location-based Apps (e.g., food delivery)",
      "Real-time Chat with Socket.IO",
    ],
  },
  {
    title: "Deployment",
    icon: "🚀",
    points: [
      "Git, GitHub, Vercel, Hostinger, GoDaddy",
      "Domain Setup & Production Hosting",
      "CI/CD & Deployment Best Practices",
    ],
  },
  // {
  //   title: "SEO & Optimization",
  //   icon: "📈",
  //   points: [
  //     "Search Engine Optimization (SEO)",
  //     "Performance & Accessibility Checks",
  //     "Meta Tags, Sitemaps, Robots.txt",
  //   ],
  // },
];

const Services = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto mt-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        My <span className="text-blue-600">Services</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-6 bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-blue-300 dark:hover:shadow-blue-700 transition duration-300"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-3xl rounded-full mb-4 mx-auto">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-800 dark:text-white">
              {service.title}
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;




