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
    <>
      I'm
      {' '}
      {person.name}
      , a full stack developer passionate about scalable systems and intuitive
      design. At
      {' '}
      <span className="font-bold text-blue-600">FLY</span>
      , I craft solutions
      that empower teams and businesses.
    </>
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
        company: 'FLY',
        timeframe: '2022 - Present',
        role: 'Senior Design Engineer',
        achievements: [

          `Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.`,

          `Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.`,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: '/images/projects/project-01/cover-01.jpg',
            alt: 'Once UI Project',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: 'Creativ3',
        timeframe: '2018 - 2022',
        role: 'Lead Designer',
        achievements: [
          `Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.`,
          `Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.`,
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
