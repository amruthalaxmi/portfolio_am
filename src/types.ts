export type ProjectCategory = 'all' | 'web' | 'hardware';

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'hardware';
  categoryLabel: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; tag?: string }[];
}

export interface EducationData {
  degree: string;
  institution: string;
  university: string;
  location: string;
  affiliation: string;
  status: string;
  coursework: string[];
}
