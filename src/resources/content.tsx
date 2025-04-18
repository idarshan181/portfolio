import HandWave from '@/components/Animation/HandWave';

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const person = {
  firstName: 'Darshan',
  lastName: 'Patel',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Full Stack Developer',
  avatar: '/images/avatar.jpg',
  location: 'Canada', // Updated location
  timezone: 'America/St_Johns',
  languages: ['English', 'Hindi', 'Gujarati'], // Example languages
};

const newsletter = {
  display: true,
  title: (
    <>
      Subscribe to
      {' '}
      {person.firstName}
      's Newsletter
    </>
  ),
  description: (
    <>
      I share insights on building scalable systems, full stack development, and
      personal growth in the tech industry.
    </>
  ),
};

const social = [
  {
    name: 'GitHub',
    icon: <Github size={24} />,
    link: 'https://github.com/idarshan181',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={24} />,
    link: 'https://www.linkedin.com/in/idarshan18/',
  },
  {
    name: 'X',
    icon: <Twitter size={24} />,
    link: 'https://twitter.com/idarshan18',
  },
  {
    name: 'Email',
    icon: <Mail size={24} />,
    link: 'mailto:work.idarshan18@gmail.com',
  },
];

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `A showcase of my journey and work as a ${person.role}.`,
  headline: <>Full Stack Developer and Builder</>,
  subline: (
    <div className="inline-block font-normal text-foreground">
      Hi, I'm
      {' '}
      <span className="font-bold text-primary">{person.name}</span>
      <HandWave />
      , a full stack developer building scalable systems and AI-powered solutions. Exploring the RAG hype—because even AI needs a fact-checker!
    </div>
  ),
};

const about = {
  label: 'About',
  title: 'About me',
  description: `Meet ${person.name}, a ${person.role} from ${person.location}.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        {person.name}
        {' '}
        is a Full Stack Developer with expertise in crafting scalable
        systems and seamless user experiences. His work spans backend architecture,
        APIs, and modern frontend design.
      </>
    ),
  },
  work: {
    display: true,
    title: 'Work Experience',
    experiences: [
      {
        company: 'PlayPower Labs',
        timeframe: 'May 2020 – August 2023',
        role: 'Full-Stack Developer',
        achievements: [
          'Built a Super Admin portal to manage 50+ organizations and 2,500+ users, streamlining operations and improving user management.',
          'Developed scalable APIs and AI-driven pipelines for automating PDF processing, enabling the handling of 13 million assessments in 3 days.',
          'Digitized textbooks into interactive PDFs, boosting usage by 80%, and automated real-time performance reports for over 10,000 parents using WhatsApp API.',
          'Mentored junior engineers and guided architectural decisions, ensuring performant, maintainable code.',
        ],
        images: [],
      },
      {
        company: 'PlayPower Labs',
        timeframe: 'May 2019 – May 2020',
        role: 'Front End Developer Intern',
        achievements: [
          'Developed a scalable CMS with React, TypeScript, and AWS, improving authoring efficiency by 40% and cutting costs by 30%.',
          'Built cross-platform UI components and automated data processing using AWS Lambda, enhancing user experience across devices.',
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: 'Education',
    institutions: [
      {
        name: 'Memorial University',
        description: 'Master of Applied Science in Computer Engineering',
      },
      {
        name: 'Nirma University',
        description: 'Bachelor\'s in Information Technology',
      },
    ],
  },
  technical: {
    display: true,
    title: 'Technical',
    skills: [
      {
        category: 'Programming Languages',
        technologies: [
          { title: 'JavaScript', icon: 'JavaScript.svg' },
          { title: 'TypeScript', icon: 'TypeScript.svg' },
          { title: 'Python', icon: 'Python.svg' },
          { title: 'Java', icon: 'Java.svg' },
        ],
      },
      {
        category: 'Frontend',
        technologies: [
          { title: 'React', icon: 'React.svg' },
          { title: 'Next.js', icon: 'Next.js.svg' },
          { title: 'Tailwind CSS', icon: 'Tailwind-CSS.svg' },
          { title: 'Bootstrap', icon: 'Bootstrap.svg' },
          { title: 'Material-UI', icon: 'Material-UI.svg' },
        ],
      },
      {
        category: 'Backend',
        technologies: [
          { title: 'Node.js', icon: 'Node.js.svg' },
          { title: 'FastAPI', icon: 'FastAPI.svg' },
          { title: 'PostgreSQL', icon: 'PostgresSQL.svg' },
          { title: 'MongoDB', icon: 'MongoDB.svg' },
          { title: 'Express', icon: 'Express.svg' },
          { title: 'Kafka', icon: 'Apache-Kafka.svg' }, // Added Kafka for message queueing.
        ],
      },
      {
        category: 'DevOps & Tools',
        technologies: [
          { title: 'Docker', icon: 'Docker.svg' },
          { title: 'Kubernetes', icon: 'Kubernetes.svg' },
          { title: 'Git', icon: 'Git.svg' },
          { title: 'Vercel', icon: 'Vercel.svg' },
          { title: 'Jenkins', icon: 'Jenkins.svg' },
          { title: 'Travis CI', icon: 'Travis-CI.svg' },
          { title: 'GitHub Actions', icon: 'GitHub-Actions.svg' },
        ],
      },
      {
        category: 'Cloud & Infrastructure',
        technologies: [
          { title: 'AWS', icon: 'AWS.svg' },
          { title: 'Google Cloud', icon: 'Google-Cloud.svg' }, // Added Google Cloud for cloud diversity.
          { title: 'Terraform', icon: 'HashiCorp-Terraform.svg' },
        ],
      },
      {
        category: 'Data Science & AI',
        technologies: [
          { title: 'Python', icon: 'Python.svg' },
          { title: 'TensorFlow', icon: 'TensorFlow.svg' },
          { title: 'PyTorch', icon: 'PyTorch.svg' },
          { title: 'NumPy', icon: 'NumPy.svg' },
          { title: 'Pandas', icon: 'Pandas.svg' },
        ],
      },
    ],
  },
};

const blog = {
  label: 'Blog',
  title: 'Thoughts on Full Stack Development',
  description: `Read the latest from ${person.name} on development and technology.`,
};

const work = {
  label: 'Work',
  title: 'Projects',
  description: `Explore projects designed and developed by ${person.name}.`,
};

const gallery = {
  label: 'Gallery',
  title: 'Gallery',
  description: 'A glimpse into my projects and designs.',
};

export { about, blog, gallery, home, newsletter, person, social, work };
