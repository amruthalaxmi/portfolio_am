import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Cpu } from 'lucide-react';
import { PROJECTS, CANDIDATE } from '../data/portfolioData';
import { ProjectCategory } from '../types';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: PROJECTS.length },
    { id: 'web', label: 'Web Development', count: PROJECTS.filter((p) => p.category === 'web').length },
    { id: 'hardware', label: 'Hardware/Workshops', count: PROJECTS.filter((p) => p.category === 'hardware').length },
  ] as const;

  const filteredProjects =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1.5">
              Technical Experience
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Projects & Workshops
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Practical software implementations, institutional web design, and digital systems laboratory workshops.
            </p>
          </div>

          <a
            href={CANDIDATE.contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white py-1.5 px-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors self-start sm:self-auto shrink-0"
          >
            <Github className="w-3.5 h-3.5 text-blue-400" />
            <span>github.com/amruthalaxmi</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 p-1 bg-slate-900/90 rounded-lg border border-slate-800 w-fit">
          {filterTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as ProjectCategory)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>{tab.label}</span>
                <span className="ml-1.5 text-[11px] opacity-75 tabular-nums font-mono">
                  ({tab.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="clean-card rounded-xl p-6 flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    {project.category === 'hardware' ? (
                      <Cpu className="w-4 h-4 text-blue-400 shrink-0" />
                    ) : (
                      <Code2 className="w-4 h-4 text-blue-400 shrink-0" />
                    )}
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    title="View Source on GitHub"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
