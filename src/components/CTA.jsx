import React from 'react';

const CTA = () => {
  return (
    <section className="bg-blue-600 text-white py-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">Want to see more?</h2>
      <a
        href="https://drive.google.com/file/d/1FgLCbHRLRBS-BuDNVS8wO3Vy8vD59dqF/view"
        download
        className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100"
      >
        Download My Resume
      </a>
    </section>
  );
};

export default CTA;
