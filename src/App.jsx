import './index.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar        from './components/Sidebar/Sidebar';
import FloatingLogo   from './components/FloatingLogo/FloatingLogo';
import ContactButton  from './components/ContactButton/ContactButton';

import Home           from './pages/Home/Home';
import AboutUs        from './pages/AboutUs/AboutUs';
import Projects       from './pages/Projects/Projects';
import WhatWeDo       from './pages/WhatWeDo/WhatWeDo';
import CreativeProcess from './pages/CreativeProcess/CreativeProcess';
import ContactUs      from './pages/Contact/ContactUs';
import AdminLogin     from './pages/AdminLogin/AdminLogin';
import AdminPanel     from './pages/AdminPanel/AdminPanel';

export default function App() {
  return (
    <div>
      <Sidebar />             {/* Fixed sidebar */}
      <FloatingLogo />        {/* Floating logo */}
      <ContactButton />       {/* Persistent "Contáctanos" button */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<AboutUs />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/que-hacemos" element={<WhatWeDo />} />
        <Route path="/proceso-creativo" element={<CreativeProcess />} />
        <Route path="/contacto" element={<ContactUs />} />

        {/* Rutas de administración */}
        <Route path="/mariana" element={<AdminLogin />} />
        <Route path="/mariana2/panel" element={<AdminPanel />} />

        {/* Ruta comodín */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
