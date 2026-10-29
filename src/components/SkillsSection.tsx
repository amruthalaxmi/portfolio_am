import React from 'react';
import { Code, Globe, Wrench, CheckCircle2 } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return Code;
      case 'Web Technologies':
        return Globe;
      case 'Tools & Workflow':
        return Wrench;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1.5">
            Technical Stack
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Core programming languages, web development standards, and engineering tools applied across academic coursework and personal projects.
          </p>
        </div>

        {/* Categorized Grid (No arbitrary percentage bars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group) => {
            const Icon = getCategoryIcon(group.category);
            return (
              <div
                key={group.category}
                className="clean-card rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800/80">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-100 font-mono">
                      {group.category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-slate-900/90 rounded-lg p-3 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <p className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </p>
                        {skill.tag && (
                          <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                            {skill.tag}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
