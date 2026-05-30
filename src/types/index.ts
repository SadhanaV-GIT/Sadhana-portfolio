export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
  category: string;
}

export interface Skill {
  name: string;
  percentage: number;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
  type: string;
}

export interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  image: string;
  link: string;
}

export interface NavLink {
  label: string;
  href: string;
}
