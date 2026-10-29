import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { CANDIDATE } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onScrollToTop }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#070A10] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono font-bold text-xs">
              {CANDIDATE.initials}
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-200">
                {CANDIDATE.name}
              </p>
              <p className="text-[11px] text-slate-400">
                B.Tech Computer Science & Engineering · JCET (KTU)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 text-xs text-slate-400">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Overview
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('skills')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={CANDIDATE.contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={CANDIDATE.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={onScrollToTop}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded border border-slate-800 transition-colors ml-1 cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <p>© {currentYear} {CANDIDATE.name}. All rights reserved.</p>
          <p className="font-mono text-slate-400">
            Computer Science Engineering Student & IEEE Member
          </p>
        </div>
      </div>
    </footer>
  );
};
