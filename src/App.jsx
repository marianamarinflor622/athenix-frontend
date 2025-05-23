import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar"
import ContactButton from "./components/ContactButton/ContactButton"

import ScrollSection from './components/ScrollSection/ScrollSection';

import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import MissionVisionValue from './pages/MissionVisionValue/MissionVisionValue';
import Projects from './pages/Projects/Projects';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import CreativeProcess from './pages/CreativeProcess/CreativeProcess';
import ContactUs from './pages/Contact/ContactUs';

import AdminLogin from './pages/AdminLogin/AdminLogin';
import AdminPanel from './pages/AdminPanel/AdminPanel';

import './index.css';
import './App.css';

const sections = [
  { id: 'home', title: 'Inicio', Component: Home },
  { id: 'about', title: 'Quiénes Somos', Component: AboutUs },
  { id: 'mission', title: 'Misión, Visión, Valores', Component: MissionVisionValue },
  { id: 'projects', title: 'Proyectos', Component: Projects },
  { id: 'whatwedo', title: 'Cómo lo Hacemos', Component: WhatWeDo },
  { id: 'creative', title: 'Proceso Creativo', Component: CreativeProcess },
  { id: 'contact', title: 'Contáctanos', Component: ContactUs },
];

export default function App() {
  const [activeId, setActiveId] = useState('home');
  const location = useLocation();

  const isAdminRoute = location.pathname === '/mariana' || location.pathname === '/marianapa';

  return (
    <Routes>
      <Route
        path="/"
        element={
          !isAdminRoute && (
            <div className="app">
              <Sidebar items={sections} activeId={activeId} />
              <main className="main">
                <ContactButton />
                {sections.map(({ id, Component }) => (
                  <ScrollSection key={id} id={id} onEnter={() => setActiveId(id)}>
                    <Component />
                  </ScrollSection>
                ))}
              </main>
            </div>
          )
        }
      />
      <Route path="/mariana" element={<AdminLogin />} />
      <Route path="/marianapa" element={<AdminPanel />} />
    </Routes>
  );
}