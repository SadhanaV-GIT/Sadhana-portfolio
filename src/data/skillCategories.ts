export interface SkillCategory {
  id: number;
  title: string;
  icon: string;
  accent: string;
  glow: string;
  border: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: 'Programming Languages',
    icon: 'Code',
    accent: 'text-cyan-400',
    glow: 'hover:shadow-cyan-500/25',
    border: 'hover:border-cyan-500/50',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C++', 'C', 'Java (Basic)'],
  },
  {
    id: 2,
    title: 'Frontend Development',
    icon: 'Monitor',
    accent: 'text-blue-400',
    glow: 'hover:shadow-blue-500/25',
    border: 'hover:border-blue-500/50',
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Backend Development',
    icon: 'Server',
    accent: 'text-green-400',
    glow: 'hover:shadow-green-500/25',
    border: 'hover:border-green-500/50',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs'],
  },
  {
    id: 4,
    title: 'Databases',
    icon: 'Database',
    accent: 'text-orange-400',
    glow: 'hover:shadow-orange-500/25',
    border: 'hover:border-orange-500/50',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    id: 5,
    title: 'Tools & Technologies',
    icon: 'Wrench',
    accent: 'text-purple-400',
    glow: 'hover:shadow-purple-500/25',
    border: 'hover:border-purple-500/50',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    id: 6,
    title: 'Machine Learning & CV',
    icon: 'Brain',
    accent: 'text-pink-400',
    glow: 'hover:shadow-pink-500/25',
    border: 'hover:border-pink-500/50',
    skills: ['OpenCV', 'CNN', 'YOLO'],
  },
];
