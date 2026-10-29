import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { CANDIDATE, EDUCATION_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1.5">
            Background & Academics
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About & Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Grounded Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="clean-card rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-3 text-slate-300">
                Academic Foundation & Goals
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {CANDIDATE.groundedBio}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                My objective is to establish a strong technical career as a software engineer by mastering clean code architectures, reliable problem-solving techniques, and collaborative development practices.
              </p>
            </div>

            {/* Quick Principles / Focus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="clean-card rounded-xl p-4">
                <p className="text-xs font-semibold text-white mb-1.5">Software Engineering</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Focusing on structured programming in C, object-oriented concepts in Python, and front-end development using modern JavaScript.
                </p>
              </div>
              <div className="clean-card rounded-xl p-4">
                <p className="text-xs font-semibold text-white mb-1.5">Technical Community</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Participating in IEEE student branch events, workshops, and technical seminars to expand technical breadth.
                </p>
              </div>
            </div>
          </div>

          {/* Education Card Column */}
          <div className="lg:col-span-5">
            <div className="clean-card rounded-xl p-6 border-slate-700/80">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 block">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-sm font-bold text-white leading-tight">
                    {EDUCATION_DATA.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-xs border-t border-slate-800 pt-4 mb-5">
                <div>
                  <span className="text-slate-400 block text-[11px]">Institution</span>
                  <p className="text-slate-200 font-medium">{EDUCATION_DATA.institution}</p>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px]">Affiliated University</span>
                  <p className="text-slate-200 font-medium">{EDUCATION_DATA.university}</p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>Location: {EDUCATION_DATA.location}</span>
                  <span className="text-blue-400 font-mono">{EDUCATION_DATA.status}</span>
                </div>
              </div>

              {/* IEEE Affiliation Note */}
              <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 mb-5">
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-slate-200">
                      {EDUCATION_DATA.affiliation}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Engaged in collegiate technology seminars, workshops, and peer technical activities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Coursework */}
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Key Coursework
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {EDUCATION_DATA.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2 py-1 bg-slate-900 text-slate-300 text-[11px] rounded border border-slate-800"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
