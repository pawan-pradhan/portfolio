import { Outlet } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import { useEffect, useState } from 'react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    // <div className="min-h-screen bg-white px-4 dark:bg-gray-950 text-gray-800 dark:text-white transition-all">
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-white transition-all overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="pt-16 pb-8">
        <Outlet />
      </main>
      <Footer />
      {/* WhatsApp Icon */}
            {/* <a
              href="https://wa.me/919460379517"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-24 left-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a> */}
      
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/airman_pawan" // 🔁 Replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 left-6 z-50 bg-gradient-to-tr from-pink-400 via-red-500 to-yellow-400 hover:opacity-90 text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out"
              title="Follow on Instagram"
            >
              <FaInstagram size={20} />
            </a>
    </div>
  );
}

export default App;
