import { Project, SkillGroup, EducationData } from '../types';

export const CANDIDATE = {
  name: 'Amrutha Laxmi',
  initials: 'AL',
  role: 'Computer Science Engineering Student | Aspiring Software Engineer | IEEE Member',
  headline: 'Aspiring Software Engineer & Computer Science Student',
  summary:
    'Computer Science Engineering student focused on core web development, programming, and software engineering principles. Dedicated to learning new technologies and building functional, reliable projects.',
  groundedBio:
    'Currently pursuing my Bachelor of Technology in Computer Science & Engineering at Jawaharlal College of Engineering and Technology (JCET), affiliated with APJ Abdul Kalam Technological University (KTU). My primary technical focus centers on foundational software development, clean web technologies, and systems programming with C and Python. As an active IEEE member, I engage in collegiate technical workshops and collaborative engineering initiatives.',
  stats: [
    { label: 'Academic Path', value: 'B.Tech CSE', detail: 'JCET · APJ KTU' },
    { label: 'Professional Body', value: 'IEEE Member', detail: 'Student Branch' },
    { label: 'Technical Work', value: 'Web & Hardware', detail: 'Software & Labs' },
  ],
  contact: {
    email: 'your-email@example.com',
    linkedin: 'https://www.linkedin.com/in/amrutha-laxmi-51137a340',
    github: 'https://github.com/amruthalaxmi',
  },
};

export const EDUCATION_DATA: EducationData = {
  degree: 'B.Tech in Computer Science & Engineering',
  institution: 'Jawaharlal College of Engineering and Technology (JCET)',
  university: 'APJ Abdul Kalam Technological University (KTU)',
  location: 'Kerala, India',
  affiliation: 'Active IEEE Student Member',
  status: 'Undergraduate Degree in Progress',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Operating Systems',
    'Database Management Systems',
    'Computer Networks',
    'Digital System Design',
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C Programming', tag: 'Core Systems' },
      { name: 'Python', tag: 'Scripting & Logic' },
      { name: 'JavaScript (ES6+)', tag: 'Web Logic' },
    ],
  },
  {
    category: 'Web Technologies',
    skills: [
      { name: 'HTML5', tag: 'Semantic Layout' },
      { name: 'CSS3', tag: 'Responsive Design' },
      { name: 'Tailwind CSS', tag: 'Utility-First Styling' },
      { name: 'DOM Manipulation', tag: 'Client Interaction' },
    ],
  },
  {
    category: 'Tools & Workflow',
    skills: [
      { name: 'Git', tag: 'Version Control' },
      { name: 'GitHub', tag: 'Code Collaboration' },
      { name: 'Microsoft Office', tag: 'Technical Docs' },
      { name: 'VS Code', tag: 'Development IDE' },
    ],
  },
  {
    category: 'Core Competencies',
    skills: [
      { name: 'Problem Solving', tag: 'Algorithmic Thinking' },
      { name: 'Technical Leadership', tag: 'IEEE Activities' },
      { name: 'Continuous Learning', tag: 'New Tech Exploration' },
      { name: 'Team Collaboration', tag: 'Engineering Projects' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    category: 'web',
    categoryLabel: 'Web Development',
    description:
      'Engineered a clean, fully responsive multi-page portfolio showcasing academic background, technical skills, and projects using semantic HTML5, modern Tailwind CSS, and component modularity.',
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Git'],
    githubUrl: 'https://github.com/amruthalaxmi',
  },
  {
    id: 'college-website-design',
    title: 'College Website Design',
    category: 'web',
    categoryLabel: 'Web Development',
    description:
      'Designed and developed an institutional portal prototype focusing on intuitive navigation, departmental academic updates, and quick access to student resources and syllabus materials.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    githubUrl: 'https://github.com/amruthalaxmi',
  },
  {
    id: 'fpga-workshop',
    title: 'FPGA Workshop Participation',
    category: 'hardware',
    categoryLabel: 'Hardware & Workshops',
    description:
      'Completed an intensive practical laboratory workshop on Field-Programmable Gate Arrays (FPGAs), gaining hands-on insight into digital logic simulation, RTL concepts, and hardware-software integration.',
    technologies: ['FPGA Architecture', 'Digital Logic', 'C Programming', 'Hardware Labs'],
    githubUrl: 'https://github.com/amruthalaxmi',
  },
  {
    id: 'mini-web-projects',
    title: 'Mini Web Development Projects',
    category: 'web',
    categoryLabel: 'Web Development',
    description:
      'A collection of targeted front-end utilities and interactive DOM applications demonstrating fundamental JavaScript programming, event-driven interactions, and clean responsive CSS styling.',
    technologies: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Local Storage'],
    githubUrl: 'https://github.com/amruthalaxmi',
  },
];
