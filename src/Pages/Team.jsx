import React from 'react';
import ownerImg from "../assets/image/founder_img.jpg";

const owner = {
  name: 'Pawan Sharma',
  role: 'Founder & CEO',
  image: ownerImg,
};

const teamMembers = [
  {
    name: 'Rohit Kumar',
    role: 'Frontend Developer (React)',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Anjali Mehta',
    role: 'Backend Developer (Node.js)',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Karan Verma',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Simran Kaur',
    role: 'QA Engineer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
];

export default function Team() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-sky-400 dark:text-white">
        Meet the Team
      </h2>

      {/* Owner Section */}
      <div className="flex justify-center mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center max-w-sm w-full hover:shadow-xl hover:ring-2 hover:ring-sky-700 transition-all duration-300 transform hover:-translate-y-1">
          <img
            src={owner.image}
            alt={owner.name}
            className="w-28 h-28 rounded-full mx-auto object-cover mb-4 border-4 border-sky-700 dark:border-white shadow-md"
          />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            {owner.name}
          </h3>
          <p className="text-sky-700 dark:text-gray-300">{owner.role}</p>
        </div>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center hover:shadow-xl hover:ring-2 hover:ring-sky-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-4 border-sky-700 dark:border-white shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {member.name}
            </h3>
            <p className="text-sky-700 dark:text-gray-300">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
