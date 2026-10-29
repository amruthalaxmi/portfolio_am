import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StartupLoader } from './components/StartupLoader';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Native lightweight scroll reveal observer (vanilla JS / CSS, zero heavy libraries)
  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-init');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading]);

  // Handle URL hash sync and popstate navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'skills', 'projects', 'contact'].includes(hash)) {
        setActiveSection(hash);
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    if (window.location.hash) {
      handleHash();
    }

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Update active navigation link on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    window.location.hash = sectionId;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.location.hash = 'home';
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 2-Second Minimalist Startup Loader Screen */}
      {isLoading && (
        <StartupLoader onComplete={() => setIsLoading(false)} />
      )}

      {/* Main Portfolio Architecture */}
      <div className="min-h-screen bg-[#090D16] text-[#F8FAFC] flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-300">
        {/* Fixed Minimalist Top Bar */}
        <Navbar
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />

        {/* Main Content Area */}
        <main className="flex-1 w-full">
          {/* Landing / Hero Section */}
          <HeroSection onNavigate={handleNavigate} />

          {/* About & Education Container with lightweight scroll reveal */}
          <div className="reveal-init w-full">
            <AboutSection />
          </div>

          {/* Technical Skills Container with lightweight scroll reveal */}
          <div className="reveal-init w-full">
            <SkillsSection />
          </div>

          {/* Projects Showcase Container with lightweight scroll reveal */}
          <div className="reveal-init w-full">
            <ProjectsSection />
          </div>

          {/* Contact & Socials Container with lightweight scroll reveal */}
          <div className="reveal-init w-full">
            <ContactSection />
          </div>
        </main>

        {/* Minimalist Footer */}
        <Footer
          onNavigate={handleNavigate}
          onScrollToTop={handleScrollToTop}
        />
      </div>
    </>
  );
}
