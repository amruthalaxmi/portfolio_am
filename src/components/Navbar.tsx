import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { CANDIDATE } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Overview' },
    { id: 'about', label: 'About & Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#090D16]/95 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-sm'
          : 'bg-[#090D16]/80 backdrop-blur-sm border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-6">
          {/* Monogram Brand */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold text-sm tracking-tight group-hover:bg-blue-600/20 group-hover:border-blue-400/50 transition-colors">
              {CANDIDATE.initials}
            </div>
            <div>
              <span className="text-sm font-semibold text-slate-100 group-hover:text-blue-400 transition-colors block leading-tight">
                {CANDIDATE.name}
              </span>
              <span className="text-[11px] text-slate-400 font-mono block leading-tight">
                CSE Undergrad
              </span>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`py-1 transition-colors cursor-pointer relative ${
                    isActive ? 'text-blue-400 font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Direct External Verified Icon Links & Download Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="/amrutha-laxmi-portfolio.zip"
              download="amrutha-laxmi-portfolio.zip"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
              title="Download full project code as ZIP"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download ZIP</span>
            </a>

            <a
              href={CANDIDATE.contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors border border-transparent hover:border-slate-800"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={CANDIDATE.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/60 rounded-lg transition-colors border border-transparent hover:border-slate-800"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg transition-colors cursor-pointer"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-slate-800 px-5 py-4 mt-2 flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-left py-2 px-2 rounded text-xs font-medium transition-colors ${
                activeSection === link.id ? 'bg-blue-950/40 text-blue-400 font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 mt-1 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={CANDIDATE.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-400 hover:text-white rounded bg-slate-900 border border-slate-800"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={CANDIDATE.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-400 hover:text-blue-400 rounded bg-slate-900 border border-slate-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-100 bg-blue-600 hover:bg-blue-500 rounded-lg"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
