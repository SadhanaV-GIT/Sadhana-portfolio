import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      {!loading && (
        <>
          <ScrollProgress />
          <Toaster
            position="top-right"
            toastOptions={{
              style: { background: '#fff', color: '#1f2937', borderRadius: '10px', border: '1px solid #e5e7eb', fontSize: '14px' },
            }}
          />
          <Navbar />
          <main className="bg-white dark:bg-gray-900">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <CodingProfiles />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
