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
    featured: false,
  },
  {
    id: 'linksnip',
    title: 'LinkSnip - URL Shortener & Scalable Link Manager',
    description:
      'URL Shortener is a web-based application that simplifies link management by allowing users to shorten URLs, track analytics, and manage links efficiently, featuring user authentication and real-time performance insights.',
    image: '/images/projects/LinkSnip-light.avif',
    tags: ['Next.js', 'PostgreSQL', 'System Design', 'TypeScript', 'URL Shortener'],
    github: 'https://github.com/idarshan181/SD-url-shortener',
    demo: 'https://linksnip.me/', // If you have a live demo, add the link, otherwise keep empty
    featured: true, // Set to true if you want it highlighted on the homepage
  },

  {
    id: 'expense-tracker-mun',
    title: 'Expense Tracker MUN',
    description:
      'A smart financial management application to track income, expenses, and spending habits with real-time insights and categorized analysis.',
    image: '/images/projects/Expense-Tracker-MUN-light.webp',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'ShadCN', 'NextAuth'],
    github: 'https://github.com/idarshan181/ExpenseTracker-MUN',
    demo: 'https://expense-tracker-mun.vercel.app',
    featured: true,
  },
  {
    id: 'cognitive-search-backend',
    title: 'Cognitive Search for Canadian Tax Law',
    description:
      'An AI-powered RAG (Retrieval-Augmented Generation) system that enables intelligent document retrieval and answering tax law-related queries using LLMs and Weaviate.',
    image: '/images/projects/Tax-Scout.webp', // Replace with an actual hosted image
    tags: ['LLM', 'Weaviate', 'FastAPI', 'Python', 'Docker', 'RAG', 'ML'],
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
    tags: ['FastAPI', 'ML', 'OpenCV', 'YOLO', 'Python', 'Docker', 'Hand Tracking'],
    github: 'https://github.com/idarshan181/faceblur-server-fastapi',
    demo: '',
    featured: true,
  },

];
