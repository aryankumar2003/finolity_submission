import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Testimonials from './components/Testimonials.jsx';
import Team from './components/Team.jsx';
import ClientSupport from './components/ClientSupport.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';


const sectionVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.9, rotate: -5 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    rotate: 0, 
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } 
  },
  exit: { 
    opacity: 0, 
    y: -100, 
    scale: 0.9, 
    rotate: 5, 
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } 
  },
};

function App() {
  const [visibleSection, setVisibleSection] = useState('hero');
  const sectionRefs = useRef({});

  const sections = [
    { id: 'hero', component: <Hero /> },
    { id: 'about', component: <About /> },
    { id: 'services', component: <Services /> },
    { id: 'testimonials', component: <Testimonials /> },
    { id: 'team', component: <Team /> },
    { id: 'client-support', component: <ClientSupport /> },
    { id: 'contact', component: <Contact /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setVisibleSection(visibleEntry.target.id);
        }
      },
      { threshold: 0.6 } 
    );

    sections.forEach((section) => {
      if (sectionRefs.current[section.id]) {
        observer.observe(sectionRefs.current[section.id]);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (sectionRefs.current[section.id]) {
          observer.unobserve(sectionRefs.current[section.id]);
        }
      });
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <Header />
      <AnimatePresence mode="wait">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            id={section.id}
            initial="hidden"
            animate={visibleSection === section.id ? 'visible' : 'hidden'}
            exit="exit"
            variants={sectionVariants}
            style={{ 
              minHeight: '100vh', 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}
          >
            {section.component}
          </motion.div>
        ))}
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;