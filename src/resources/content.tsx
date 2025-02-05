import HandWave from '@/components/Animation/HandWave';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const person = {
  firstName: 'Darshan',
  lastName: 'Patel',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Full Stack Developer',
  avatar: '/images/avatar.jpg',
  location: 'St. John\'s, Canada', // Updated location
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
    icon: <FaGithub size={24} />,
    link: 'https://github.com/idarshan181',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={24} />,
    link: 'https://www.linkedin.com/in/idarshan18/',
  },
  {
    name: 'X',
    icon: <FaXTwitter size={24} />,
    link: 'https://twitter.com/darshan18',
  },
  {
    name: 'Email',
    icon: <MdEmail size={24} />,
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
      Hi, I’m
      {' '}
      <div className="inline-block font-bold text-primary">{person.name}</div>
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
          `Built a Super Admin portal to manage 50+ organizations and 2,500+ users, streamlining operations and improving user management.`,
          `Developed scalable APIs and AI-driven pipelines for automating PDF processing, enabling the handling of 13 million assessments in 3 days.`,
          `Digitized textbooks into interactive PDFs, boosting usage by 80%, and automated real-time performance reports for over 10,000 parents using WhatsApp API.`,
          `Mentored junior engineers and guided architectural decisions, ensuring performant, maintainable code.`,
        ],
        images: [],
      },
      {
        company: 'PlayPower Labs',
        timeframe: 'May 2019 – May 2020',
        role: 'Front End Developer Intern',
        achievements: [
          `Developed a scalable CMS with React, TypeScript, and AWS, improving authoring efficiency by 40% and cutting costs by 30%.`,
          `Built cross-platform UI components and automated data processing using AWS Lambda, enhancing user experience across devices.`,
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
    title: 'Technical Skills',
    skills: [
      {
        title: 'Next.js',
        description: <>Building scalable, server-rendered applications.</>,
      },
      {
        title: 'Supabase',
        description: <>Leveraging modern databases for real-time systems.</>,
      },
      {
        title: 'Shadcn',
        description: <>Creating intuitive UI components with Shadcn.</>,
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
  description: `A glimpse into my projects and designs.`,
};

export { about, blog, gallery, home, newsletter, person, social, work };
