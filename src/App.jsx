import { Outlet } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import { useEffect, useState } from 'react';

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
    </div>
  );
}

export default App;
