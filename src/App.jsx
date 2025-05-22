import './index.css';

// src/App.jsx
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

import Sidebar           from './components/Sidebar/Sidebar';
import FloatingLogo      from './components/FloatingLogo/FloatingLogo';
import ContactButton     from './components/ContactButton/ContactButton';
import Section           from './components/Section/Section';

import Home              from './pages/Home/Home';
import AboutUs           from './pages/AboutUs/AboutUs';
import MissionVisionValue from './pages/MissionVisionValue/MissionVisionValue';
import Projects          from './pages/Projects/Projects';
import WhatWeDo          from './pages/WhatWeDo/WhatWeDo';
import CreativeProcess   from './pages/CreativeProcess/CreativeProcess';
import ContactUs         from './pages/Contact/ContactUs';
import AdminLogin        from './pages/AdminLogin/AdminLogin';
import AdminPanel        from './pages/AdminPanel/AdminPanel';


const sections = [
  { id: 'home',     title: 'Inicio',           Component: Home },
  { id: 'about',    title: 'Quiénes Somos',    Component: AboutUs },
  { id: 'services', title: 'Servicios',        Component: MissionVisionValue },
  { id: 'projects', title: 'Proyectos',        Component: Projects },
  { id: 'whatwedo', title: 'Cómo lo Hacemos',  Component: WhatWeDo },
  { id: 'creative', title: 'Proceso Creativo', Component: CreativeProcess },
  { id: 'contact',  title: 'Contáctanos',      Component: ContactUs },
  { id: 'login',    title: 'Admin Login',      Component: AdminLogin },
  { id: 'panel',    title: 'Admin Panel',      Component: AdminPanel },
];

export default function App() {
  const [activeId, setActiveId] = useState(sections[0].id);

  return (
    <div className={styles.app}>
      <Sidebar items={sections} activeId={activeId} />
      <FloatingLogo />
      <ContactButton />

      <main className={styles.main}>
        {sections.map(({ id, Component }) => (
          <InView
            as="div"
            key={id}
            id={id}
            onChange={(inView) => inView && setActiveId(id)}
            threshold={0.5}
          >
            <Section>
              <Component />
            </Section>
          </InView>
        ))}
      </main>
    </div>
  );
}