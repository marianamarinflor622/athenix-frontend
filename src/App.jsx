import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import ContactButton from './components/ContactButton/ContactButton';
import FloatingLogo from './components/FloatingLogo/FloatingLogo';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import HowWeDo from './pages/HowWeDo/HowWeDo';
import CreativeProcess from './pages/CreativeProcess/CreativeProcess';
import ContactUs from './pages/Contact/ContactUs';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import AdminPanel from './pages/AdminPanel/AdminPanel';

export default function App() {
  return (
    <div>
      <Sidebar />             {/* Fixed sidebar */}
      <FloatingLogo />        {/* Floating logo */}
      <ContactButton />       {/* Persistent "Contáctanos" button */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<AboutUs />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/que hacemos" element={<HowWeDo />} />
        <Route path="/proceso-creativo" element={<CreativeProcess />} />
        <Route path="/contacto" element={<ContactUs />} />
        {/* Admin only via direct URL */}
        <Route path="/mariana" element={<AdminLogin />} />
        <Route path="/mariana2/panel" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}