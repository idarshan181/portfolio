import type { ExternalLink, Github, Globe } from 'lucide-react';

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
};

export type ProjectLink = {
  url: string;
  label: string;
  icon: typeof Github | typeof Globe | typeof ExternalLink;
};

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    description: 'A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, blog, and seamless animations.',
    image: '/images/projects/portfolio.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN'],
    github: 'https://github.com/idarshan181/portfolio',
    demo: 'https://idarshan18.com',
    featured: true,
  },
  {
    id: 'expense-tracker-mun',
    title: 'Expense Tracker MUN',
    description:
      'A smart financial management application to track income, expenses, and spending habits with real-time insights and categorized analysis.',
    image: '/images/projects/Expense-Tracker-MUN-light.webp',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Shadcn', 'NextAuth'],
    github: 'https://github.com/idarshan181/ExpenseTracker-MUN',
    demo: 'https://expense-tracker-mun.vercel.app',
    featured: true,
  },
  {
    id: 'cognitive-search-backend',
    title: 'Cognitive Search for Canadian Tax Law',
    description:
      'An AI-powered RAG (Retrieval-Augmented Generation) system that enables intelligent document retrieval and answering tax law-related queries using LLMs and Weaviate.',
    image: '/images/projects/cognitive-search-backend.webp', // Replace with an actual hosted image
    tags: ['LLM', 'Weaviate', 'FastAPI', 'Python', 'Docker', 'RAG'],
    // github: 'https://github.com/idarshan181/cognitive-search-backend', // Replace with actual repo if public
    demo: 'https://cognitive-marketing-website.vercel.app/',
    featured: false,
  },

  {
    id: 'faceblur-server',
    title: 'FaceBlur & Secure Video Processing Server',
    description:
      'A FastAPI-based server for secure video processing, including automated face blurring, hand landmark detection, and private video uploads. Uses OpenCV, YOLO, and AI-based detection to ensure privacy and security.',
    image: '/images/projects/cognitive-search-backend.webp',
    tags: ['FastAPI', 'OpenCV', 'YOLO', 'Python', 'Docker', 'Hand Tracking'],
    github: 'https://github.com/idarshan181/faceblur-server-fastapi',
    demo: '',
    featured: true,
  },

  {
    id: 'sd-url-shortener',
    title: 'URL Shortener - Scalable Link Management',
    description:
      'A URL shortening web application built with Next.js and MongoDB, designed using system design principles for scalability, reliability, and efficiency. Inspired by Alex Xu\'s system design concepts, this project serves as a hands-on practice in implementing real-world architectural patterns.',
    image: '/images/projects/url-shortener.webp',
    tags: ['Next.js', 'MongoDB', 'System Design', 'TypeScript', 'URL Shortener'],
    github: 'https://github.com/idarshan181/SD-url-shortener',
    demo: 'https://quickshorturl.vercel.app/', // If you have a live demo, add the link, otherwise keep empty
    featured: false, // Set to true if you want it highlighted on the homepage
  },

];
