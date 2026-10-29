import React from 'react';
import { ArrowRight, Code2, Mail, Github, Linkedin, Award, GraduationCap } from 'lucide-react';
import { CANDIDATE } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Main Header / Monogram Block */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12">
          <div className="flex-1 max-w-2xl">
            {/* Monogram Badge & Status */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold text-lg shadow-sm">
                {CANDIDATE.initials}
              </div>
              <div>
                <span className="text-xs font-mono text-blue-400 font-medium tracking-wide uppercase block">
                  Portfolio Profile
                </span>
                <span className="text-xs text-slate-400 block">
                  Jawaharlal College of Engineering & Technology (KTU)
                </span>
              </div>
            </div>

            {/* Exact Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
              {CANDIDATE.name}
            </h1>

            {/* Exact Role */}
            <p className="text-base sm:text-lg font-medium text-blue-400 mb-5">
              {CANDIDATE.role}
            </p>

            {/* Concise 2-Sentence Summary */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              {CANDIDATE.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('projects')}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Contact Me</span>
                <Mail className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Quick Credibility Card */}
          <div className="w-full md:w-72 clean-card rounded-xl p-5 shrink-0">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Affiliation & Focus
            </p>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-slate-200 font-medium">B.Tech Computer Science</p>
                  <p className="text-slate-400 text-[11px]">JCET · APJ Abdul Kalam Tech Univ</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-slate-200 font-medium">IEEE Student Member</p>
                  <p className="text-slate-400 text-[11px]">Active Branch Member</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Code2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-slate-200 font-medium">Core Stack</p>
                  <p className="text-slate-400 text-[11px]">C, Python, JS, HTML/CSS</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <a
                href={CANDIDATE.contact.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={CANDIDATE.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-blue-400 flex items-center gap-1 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Key Metrics Strip: Clean 3-Column Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-slate-800">
          {CANDIDATE.stats.map((stat, idx) => (
            <div
              key={idx}
              className="clean-card rounded-xl p-4 flex flex-col justify-between cursor-default"
            >
              <span className="text-xs font-mono text-slate-400">{stat.label}</span>
              <p className="text-lg font-bold text-slate-100 mt-1">{stat.value}</p>
              <p className="text-xs text-slate-400 mt-0.5">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
