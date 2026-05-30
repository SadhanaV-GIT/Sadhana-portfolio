import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Based Cattle Health Monitoring System',
    description: 'Developed an AI-powered cattle health monitoring system that performs real-time disease detection and health tracking. Integrated image processing with IoT sensors to monitor temperature and movement patterns, while providing a web dashboard for health status visualization and alert management.',
    technologies: ['CNN', 'Raspberry Pi', 'OpenCV', 'IoT'],
    image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600&auto=format&fit=crop',
    github: 'https://github.com/yourusername/cattle-health-monitoring',
    live: '#',
    category: 'AI/IoT',
  },
  {
    id: 2,
    title: 'Bank Management System',
    description: 'Developed a banking application for managing customer accounts, transactions, deposits, withdrawals, and balance tracking. Implemented secure data persistence using MongoDB and followed a modular architecture for maintainability.',
    technologies: ['C++', 'MongoDB', 'Spring Boot'],
    image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=600&auto=format&fit=crop',
    github: 'https://github.com/yourusername/bank-management-system',
    live: '#',
    category: 'Full Stack',
  },
  {
    id: 3,
    title: 'Food Ordering Application',
    description: 'Built a full-stack food ordering platform that allows users to browse menus, place orders, and track order history. Developed RESTful APIs for backend operations and implemented responsive interfaces for customers and administrators.',
    technologies: ['Spring Boot', 'Java', 'SQL', 'HTML', 'CSS'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop',
    github: 'https://github.com/yourusername/food-ordering-app',
    live: '#',
    category: 'Full Stack',
  },
];
