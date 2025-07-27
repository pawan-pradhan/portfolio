import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


import './index.css';
import App from './App.jsx';
import Home from './Pages/Home';

import AboutUs from './Pages/About';
import ContactUs from './Pages/Contact';
import OurTeam from './Pages/Team';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="team" element={<OurTeam />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
</BrowserRouter>

);
